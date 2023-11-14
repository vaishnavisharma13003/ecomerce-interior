// const mongoose = require('mongoose');
import mongoose from "mongoose";
const connectDB = async ()=>{
try{
    const conn = await mongoose.connect(process.env.MONGO_URL)
    console.log(`connected to mongodb  database ${conn.connection.host}`)

}
catch(err){
    console.log(`error in mongodb${err}`.bgRed.white);
}
}
export default connectDB;

