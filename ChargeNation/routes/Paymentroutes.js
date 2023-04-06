const {createOrder} =  require("../controllers/paymentControllers");
const express = require("express");
const router = express.Router();

router.get('/createorder',createOrder);
// router.post('/payment/callback',paymentCallback);


module.exports=router;
