const mongoose=require('mongoose');

function connectDatabase(){
    mongoose.connect(process.env.DB_LOCAL_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then((con)=>{

        console.log(`MongoDB is Successfully Connected to the host:${con.connection.host}`);
    }).catch((err)=>{
        console.log(err.message)
    })
    
}

module.exports = connectDatabase;