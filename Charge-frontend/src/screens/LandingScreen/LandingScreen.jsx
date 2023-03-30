import React, { useEffect } from "react";
import "./LandingScreen.css";
import { Cookies } from "react-cookie";

import { makeStyles, Button } from "@material-ui/core";
import GoogleIcon from "../../assets/google_icon.svg";
import BrandImg from "../../assets/welcome-message.svg";
import { useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import Aos from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles(() => ({
  GoogleBtn: {
    background: "#6DBE45",
    border: "1.18982px solid #F0D8BD",
    boxSizing: "border-box",
    boxShadow: "0px 6.88073px 22.9358px #000000",
    borderRadius: "4.04538px",
    marginTop: "2vh",
    fontWeight: "550",
    color: "#20242A",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "#6DBE45",
      boxShadow: "0px 0px 1px 1px #fd510d",
    },
    "&:active": {
      backgroundColor: "#6DBE45",
      boxShadow: "0px 0px 3px 1px rgba(31, 150, 255, 0.6)",
    },
  },
}));

const LandingScreen = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const cookies = new Cookies();
  const history = useHistory();
  const classes = useStyles();


  const signInWithGoogle = async () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}auth/google`;
    window.open(url, "_self");
  };
  return (
    <div id="screen-container">
      <div className="landing-content" data-aos="fade-up">
        <img src={BrandImg} alt="" className="landing-brand" />
        <Button
          variant="contained"
          onClick={signInWithGoogle}
          className={classes.GoogleBtn}
        >
          <img src={GoogleIcon} alt="" className="google-icon" />
          Sign in with google
        </Button>
      </div>
    </div>
  );
};

export default LandingScreen;
