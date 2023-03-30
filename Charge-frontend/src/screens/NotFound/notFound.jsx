import "./notFound.css";
import React from "react";
import { Link } from "react-router-dom";
// import Navbar from "../../uiComponents/Navbar/Navbar";
import { makeStyles, Button } from "@material-ui/core";
import AssetImg from "../../assets/404-img.svg";
// import { NotificationsOffRounded } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  Button: {
    background: "#FA652B",
    // border: "1.18982px solid #F0D8BD",
    boxSizing: "border-box",
    boxShadow: "0px 6.88073px 22.9358px #000000",
    borderRadius: "4.04538px",
    marginTop: "2vh",
    color: "#FFFFFF",
    alignItems: "center",
    fontFamily: "Manrope",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "14px",
    letterSpacing: "0.0125em",
    textTransform: "uppercase",
    "&:hover": {
      backgroundColor: "#fc5919",
      boxShadow: "0px 0px 1px 1px #fd510d",
    },
    "&:active": {
      backgroundColor: "#fd5411",
      boxShadow: "0px 0px 3px 1px rgba(31, 150, 255, 0.6)",
    },
  },
}));

const NotFound = () => {
  const classes = useStyles();
  // const handleClick = () => {

  // }
  return (
    <div id="not-found-container">
      {/* <Navbar /> */}
      <div className="not-found-content">
        <img src={AssetImg} alt="" className="not-found-img" />
        <div className="not-found-heading">OOPS!!</div>
        <div className="not-found-subtext">something went wrong</div>
        <Link to="/">
          <Button variant="contained" className={classes.Button}>
            Back to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
