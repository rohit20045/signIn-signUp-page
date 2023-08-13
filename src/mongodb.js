const mongoose=require("mongoose")
mongoose.set('strictQuery', true);

const mongodb="mongodb://0.0.0.0:27017/login"; 
mongoose.connect(mongodb,(err)=>
{
    if(err) 
        console.log("Unable to connect");
    else
        console.log("Monodb is connected")
})

const loginschema=new mongoose.Schema(
{
    name:
    {
        type:String,
        required:true
    },
    password:
    {
        type:String,
        required:true
    }
})

const collection=new mongoose.model("Collection1",loginschema)

module.exports=collection


