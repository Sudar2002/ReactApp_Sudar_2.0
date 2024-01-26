const express=require('express')
const app=require('./app');
const dotenv=require('dotenv');
const path=require('path');
const connectDatabase = require('./config/database');
const bodyParser = require('body-parser');//
const cors = require('cors');
const signUpRoutes=require('./routes/user/signUp');
const logInRoutes=require('./routes/user/login');
const forgotRoutes=require('./routes/user/forgot');
const signUpModel = require('./config/DB/Models/signUpModel');
const adminRoutes=require('./routes/admin/admin')
//app.use(cors({origin:"http://localhost:3000",credentials:true}));//
app.use(cors())

dotenv.config({path:path.join(__dirname,'config/config.env')});
connectDatabase();

app.use(bodyParser.json());
app.use(signUpRoutes);
app.use(logInRoutes);
app.use(forgotRoutes);
app.use(adminRoutes)

app.use(express.static(path.join(__dirname,'../frontend/build')));
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../frontend/build/index.html"))
})


app.listen(process.env.PORT,()=>{
    console.log(`Server Successfully Running http://localhost:${process.env.PORT} in ${process.env.NODE_ENV}`);
 
})