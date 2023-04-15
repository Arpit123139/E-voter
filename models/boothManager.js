const mongoose=require('mongoose')

const BoothSchema=mongoose.Schema({

    name:{
        type:String
    },
    area:{
        type:String
    },
    voterId:{
        type:String,
    },
    url:{
        type:String
    }
})

module.exports=mongoose.model('Booth',BoothSchema)