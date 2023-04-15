const Booth=require('../models/boothManager')
const BigPromise=require('../middleware/bigpromise');

exports.addDocument=BigPromise(async(req,res)=>{

    const {name,area,voterId,url}=req.body

    const booth=await Booth.create({
        name,
        area,
        voterId,
        url
    })

    res.status(200).json({
        booth
    })


})