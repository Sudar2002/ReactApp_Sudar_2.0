const express=require('express');
const signUpModel = require('../../config/DB/Models/signUpModel');
const router=express.Router();

router.post('/forgot',async(req,res)=>{
        // {
        //         user_email:"email"
        // }
 async function Forgot(){
        try{
               
        const data=req.body;
        const email=data.user_email;
        console.log(email)
    
        const CheckEmail=await signUpModel.findOne({user_email:email})
           console.log(CheckEmail)
        if(CheckEmail){
             const old_pass=CheckEmail.user_password;
                // res.send(`${old_pass} , ${CheckEmail.user_id}`);
                 res.send({old_pass:old_pass,id:CheckEmail.user_id,status:'ok'})
         }
              else{
                        res.send('Not find your email address our Database...!')
                }
       
        }catch(err){
                console.log(err.message);
        }
                
        
}
Forgot();



});

router.post('/forgot/:id',async(req,res)=>{
        // {
        //         new_pass:"new password"
        // }
        const ID=req.params.id;
        //console.log(ID)
        data= req.body;
        const New_Pass=data.new_pass;
        const updatePass=await signUpModel.findOneAndUpdate({user_id:ID},{user_password:New_Pass}).then(()=>{
                res.send({info:'New Password Successfully Update.',status:'ok'});
        }).catch((err)=>{
                res.send('New Password Not Update...Error!')
        })
        
})


module.exports=router;