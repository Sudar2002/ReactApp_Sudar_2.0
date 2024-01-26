const express =require('express');
const signUpModel = require('../../config/DB/Models/signUpModel');
const router=express.Router();

router.post('/sign-up',async(req,res)=>{
                // {
                // user_name: "user name",
                // user_email: "user email",
                // user_password: "user password"
                // }

        const data=req.body;
        console.log(data)
        const user_id=(await (signUpModel.find())).length+1;

        //console.log(user_id,data);
      
       

      async  function addNewUser(){
        const U_Email=data.user_email;
        const CheckEmail= await(signUpModel.findOne({user_email:U_Email}));
        if(!CheckEmail){
        const newUserData={
                user_id:user_id,
                user_name:data.user_name,
                user_email:data.user_email,
                user_password:data.user_password
                }

      
                try{
                const newUser=signUpModel(newUserData);
                await newUser.save().then(()=>{
                        return console.log("user add successfully!"),res.send({info:`Thank You Registration ${data.user_name.toLowerCase()}`,status:'ok'})
                }).catch((err)=>{
                        return console.log(err.message),res.send('name,email and password required!')
                })
                

                }catch(err){
                        console.log(err.message)

                }
        
        }
        else{
                res.send({info:'This Email Already Use!',status:'failed'});
               
        }}
        
addNewUser();




})

module.exports=router;