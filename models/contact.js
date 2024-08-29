const mongoose=require('mongoose')
const schema=mongoose.Schema

const contactschema= new schema ({
name:{
    type:String,
    required:true
},
photo:{
    type:String,
    default:'https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg'
},
phone:{
    type:Number,
    required:true
}
})

module.exports=contact=mongoose.model("Contact",contactschema)