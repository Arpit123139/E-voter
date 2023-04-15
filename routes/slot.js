const express=require('express')
const { getSlot, alotSlot } = require('../controllers/SlotController')
const router=express.Router()

router.route("/getSlot/:areaName").get(getSlot)
router.route("/alotSlot/:areaName/:id/:voterId").put(alotSlot)
module.exports=router