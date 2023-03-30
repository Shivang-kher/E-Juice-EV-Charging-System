const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/redirect",
  passport.authenticate("google", {
    failureRedirect: "/failed",
    session: false,
  }),
  function (req, res) {
    res.redirect(`${process.env.FRONTEND_URL}googlesuccessfulAuth?token=${req.user.jwt}`)
  }
);

module.exports = router;