import React, { useState } from "react";
import "./Navbar.css";
import { useHistory } from "react-router-dom";
import { Cookies } from "react-cookie";
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  nav: {
    backgroundColor: "#0A0A0A",
    height: "69px",
    backgroundPosition: "center",
    padding: "0.2% 2%",
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
    verticalAlign: "middle",
    borderBottom: "1px solid #6DBE45",
  },
  logout: {
    border: "none",
    background: "none",
    fontSize: "24px",
    display: "flex",
    verticalAlign: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
    },
  },
  Button: {
    color: "#6DBE45",
    background: "#0A0A0A",
    alignItems: "center",
    fontFamily: "Manrope",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "14px",
    letterSpacing: "0.0125em",
    textTransform: "uppercase",
    boxSizing: "border-box",
    borderRadius: "4px",
    border: "1px solid #6DBE45",
    borderColor: "#6DBE45",
    "&:hover": {
      backgroundColor: "#1f1e1e",
    },
    "&:active": {
      backgroundColor: "#000000",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();
  const cookies = new Cookies();
  const handleLogout = () => {
    cookies.remove("token");
    history.push("/");
  };
  return (
    <div>      
      <nav className={classes.nav}>      
        
          <Button
            variant="outline"
            className={classes.Button}
            onClick={handleLogout}
          >
            LOGOUT
          </Button>        
      </nav>
    </div>
  );
};

export default Navbar;
