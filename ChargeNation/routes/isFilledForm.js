const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.get("/isFilledForm", (req, res) => {
  console.log("mainidhar tho ui", req.user);
  if (req.user?.phoneNo != null || req.user?.phoneNo != undefined) {
    res.json({ data: true });
  }
  res.json({ data: false });
});

router.get("/dashboard", async(req, res) => {
  const data=await User.findOne({phoneNo:req.user.phoneNo});
  if (req.user?.phoneNo != null || req.user?.phoneNo != undefined) {
    console.log(data);
    res.json({ data });
  } else {
    res.json({ data });
  }
});

router.post("/userForm", async (req, res) => {
  console.log("userform", req.body);
  const change = await User.findOneAndUpdate(
    { email: req.user.email },
    {
      phoneNo: req.body.phoneNo,
      car: req.body.car,
      chargingTech: req.body.specificDomains,
    }
  );
});

router.get("/dataDashboard", (req, res) => {
  User.findOne({ email: req.user.email });
});

module.exports = router;
