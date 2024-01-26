const express =require('express');
const signUpModel = require('../../config/DB/Models/signUpModel');
const router=express.Router();

router.get('/admin',async(req,res)=>{
        //const data=req.body;
       // console.log(data)
       // if(data.code==20021117){
            const users=await(signUpModel.find({}));
            res.send(users);
       // }
  //  else(
    //    res.send('Your Code Is Error!')
    //)
})

router.delete('/admin/delete/:id',async(req,res)=>{
    const ID=req.params.id;
    console.log(ID);
    const user=await signUpModel.findOne({user_id:ID})
    await signUpModel.findOneAndDelete({user_id:ID}).then(()=>{
        res.send({user_name:user.user_name,status:'ok'});
        
    }).catch((err)=>{
        res.send({status:'error'});
        
    })
    
})

router.post('/admin/edit',async(req,res)=>{
    const Email_ID=req.body;
    console.log(Email_ID);
        const CheckEmail=await signUpModel.findOne({user_email:Email_ID.email});
        const DetailsByID=await signUpModel.findOne({user_id:Email_ID.id});

        console.log(CheckEmail)
    if(!CheckEmail || DetailsByID.user_email==Email_ID.email){
        res.send({status:'ok'})
    }
    
    else{
        res.send({status:'!ok'})
    }
})


router.put('/admin/edit/update/:id',async(req,res)=>{

    const EditUser=req.body;
    const EditUserID=req.params.id
   await signUpModel.findOneAndUpdate({user_id:EditUserID},{user_name:EditUser.user_name,user_email:EditUser.user_email,user_password:EditUser.user_password}).then(()=>{
    res.send({userID:EditUserID,status:'Update Successfully'})
   }).catch((err)=>{
    console.log(err.message)
})



})

module.exports=router;