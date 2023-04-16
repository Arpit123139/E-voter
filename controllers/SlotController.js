const Slot=require('../models/Slot')
const BigPromise=require('../middleware/bigpromise');
const nodemailer=require('nodemailer')
const Booth=require('../models/boothManager')
const e = require('express');

exports.getSlot=(BigPromise(async(req,res)=>{

    const area=req.params.areaName;
    console.log("Area "+area);
   
    if(!area){
        return res.status(200).json({
            message:"Plz Provide The Area "
        })
    }
    const slot=await Slot.find({area});

    
    res.status(200).json({
        slot:slot[0]
    })
}))

exports.alotSlot=(BigPromise(async(req,res)=>{

    const {areaName,id,voterId}=req.params;
    console.log(req.params)
    const params=req.params.id

    const document=await Booth.findOne({voterId:voterId})
    console.log("Documetnt"+ document)
    if(!document){
        return res.status(200).json({
            success:"User Not Verified "
        })
    }

    const map=new Map();
    map.set('0','7 - 7:30')
    map.set('1','7:30 - 8:00')
    map.set('2','8:00 - 8:30')
    map.set('3','8:30 - 9:00')
    map.set('4','9:00 - 9:30')
    map.set('5','9:30 - 10:00')
    map.set('6','10:00 - 10:30')
    map.set('7','10:30 - 11:00')
    map.set('8','11:00 - 11:30')
    map.set('9','11:30 - 12:00')
    map.set('10','11:30 - 12:00')
    map.set('11','12:00 - 12:30 P.M')
    map.set('12','12:30 - 13:00 P.M')
    map.set('13','13:00 - 13:30 P.M')
    map.set('14','13:30 - 14:00 P.M')
    map.set('14','14:00 - 14:30 P.M')
    map.set('15','14:30 - 15:00 P.M')
    map.set('16','15:00 - 15:30 P.M')
    map.set('17','15:30 - 16:00 P.M')
    map.set('18','16:00 - 16:30 P.M')
    map.set('19','16:30 - 17:00 P.M')

    const slot=await Slot.find({area:areaName})

    // console.log(slot[0]._id);
    const available=await slot[0].timeslot[id].availability
    // console.log("Slot Avalilable "+available)
    slot[0].timeslot[id].availability=available-1;

    // console.log( slot[0].timeslot[id])
    
    const arr=[]
    for(let i=0;i<20;i++){
        arr.push(slot[0].timeslot[i])
    }
    // console.log("Array "+arr)
    slot[0].timeslot=arr;
    const newData={
        area:areaName,
        timeslot:arr
    }
    await Slot.findByIdAndUpdate(slot[0]._id,newData)

    const transporter=nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"elecathonsend@gmail.com",
            pass:"cplwgyyztljpevqd"
        }
    });

    const mailOptions={
        from:"elecathonsend@gmail.com",
        to:"aryanbadola431@gmail.com",
        subject:"Slot Booked Succesfully ",
        html:`<h3>Congratulations !! Your Slot is Booked for ${map.get(params)} You can Track Your route to the polling booth from the below Link    </h3>
        <a href="http://localhost:3001/map"> <h1>See Your Route<h1> <a>`
        
    }

    transporter.sendMail(mailOptions,(error,info)=>{

        if(error)
            console.log('Error ',error);
        else
            console.log('Email Sent '+info.response)
    })

    res.status(200).json({
        success:"Verified"
    })
    
}))