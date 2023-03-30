import React, { useEffect, useState } from "react";
import instance from "../../apis/api";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { Redirect } from "react-router-dom";
import { toastError, toastSuccess } from "../../utils/userHelperFuncs";
import StaticDashboardCard from "../../uiComponents/StaticDashboardCard/StaticDashboardCard";
import NonStaticDashboardCard from "../../uiComponents/NonStaticDashboardCard/card";

import Navbar from "../../uiComponents/Navbar/Navbar";

import "./dashboard.css";

const Dashboard = (props) => {
  const [cookies, removeCookie] = useCookies(["token"]);
  const [showInstr, setShowInstr] = useState(false);
  const [name, setName] = useState("");
  const [loadingScreen, setLoadingScreen] = useState(true);
  const [prev, setPrev] = useState(false);
  const [goToForm, setGoToForm] = useState(false);
  const [goToLanding, setGoToLanding] = useState(false);
  const [data, setData] = useState({});
  const history = useHistory();

  useEffect(() => {
    if (cookies.token === "undefined" || cookies.token == null) {
      setLoadingScreen(false);
      // change back
      setPrev(true);
    } else {
      const checkFilled = async () => {
        instance
          .get("/dashboard/isFilledForm", {
            headers: {
              Authorization: `Bearer ${cookies.token}`,
              "Content-Type": "application/json; charset=utf-8",
            },
          })
          .then((response) => {
            console.log("Hey adsfuihbjkxnm", response.data.data);
            if (response.data.data === false) {
              setLoadingScreen(false);
              setGoToForm(true);
            } else {
            }
          })
          .catch(() => {
            setLoadingScreen(false);
            setPrev(true);
          });
      };
      checkFilled();
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log("ab");

    instance
      .get("/dashboard/dashboard", {
        headers: {
          Authorization: `Bearer ${cookies.token}`,
          "Content-Type": "application/json; charset=utf-8",
        },
      })
      .then(function (response) {
        const { data } = response.data;
        setData(data);
        setName(data.name);
        console.log("b", data);
        setLoadingScreen(false);
      })
      .catch(function (err) {
        setGoToLanding(true);
        // console.log(err);
        setLoadingScreen(false);
        // toastError(err.response.data.message);
      });
  }, [cookies.token, history]);

  if (loadingScreen) {
    return <LoadingScreen />;
  }
  return (
    <div id="dashboard-container-outer">
      <div id="dashboard-container">
        {goToLanding ? <Redirect push to="/" /> : null}
        <Navbar />
        <div id="dashboard-body">
          <div id="dashboard-welcome-message">
            <h1>Hi {name},</h1>
            <p>
              Welcome to E-Juice! <br></br>
              Please select your desired vehicle
            </p>
          </div>
          <div>
            <NonStaticDashboardCard data={data} />
          </div>
          {goToForm ? <Redirect push to="/form" /> : null}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
