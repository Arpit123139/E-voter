const express=require('express');
const { addDocument } = require('../controllers/BoothManagerController');
const router=express.Router();

router.route("/upload").post(addDocument)

module.exports=router