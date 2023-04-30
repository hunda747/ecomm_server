require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async ()=>{
    try{
        await mongoose.connect('mongodb+srv://dano:hailu@cluster0.vdxbl9v.mongodb.net/?retryWrites=true&w=majority' , {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to DataBase")

    }catch(error){
        console.error("DataBase connection faild");
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;