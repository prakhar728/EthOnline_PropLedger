import { model } from "mongoose";

const mongoose = require('mongoose');


async function main() {
   mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology : true,
  })
  .then(()=> console.log("Connected to MongoDB Succesfully")  )
    .catch((err:any)=>console.log(err.message))


  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}




// SCHEMA DEFINITIONS


const propertyMetadata = new mongoose.Schema({
    propertyId:String,
    verificationStatus:String,  
})

const propertyMetaData = mongoose.model('PropertyData',propertyMetadata);

module.exports = {propertyMetaData,main}