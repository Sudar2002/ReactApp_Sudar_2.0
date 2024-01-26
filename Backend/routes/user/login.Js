const express =require('express');
const signUpModel = require('../../config/DB/Models/signUpModel');
const router=express.Router();

router.post('/log-in',async(req,res)=>{
   // {name_email:'login email',password:'login password'};

  const data=req.body;
  console.log(data);
   
   const name_email=data.name_email;
    const password=data.password;

    try{
        if(name_email && password){
            const userWithEmail=await signUpModel.findOne({user_email:name_email,user_password:password});

            const userWithName=await signUpModel.findOne({user_name:name_email,user_password:password});

            if(userWithEmail||userWithName){
                const user_data=await(signUpModel.find({}));
                res.send(user_data);
            }
            else{
                res.send({info:'Log In Failed!',status:'failed'})
            }
        }
        

        else{
            res.send({info:'name and password required!',status:'failed'})
        }

    }catch(err){
        res.send('Log In Error!')
       
    }


})

module.exports=router;