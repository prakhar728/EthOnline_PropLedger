const mongoose = require('mongoose');


async function main() {
   mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology : true,
  })
  .then(()=> console.log("Connected to MongoDB Succesfully")  )
    .catch((err:any)=>console.log(err.message))


}


const propertyMetadata = new mongoose.Schema({
    propertyId:String,
    verificationStatus:String,  
})

const propertyMetaData = mongoose.model('PropertyData',propertyMetadata);

export async function GET(request:Request) {
    return new Response("This is workings")
}


main();
