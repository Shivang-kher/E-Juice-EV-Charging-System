import React, { useState, useEffect, useRef } from "react";
import success from "../../assets/success.png";
import { Redirect, useHistory } from "react-router-dom";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import FormNumber from "../../uiComponents/FormNumber/FormNumber";
import FormCar from "../../uiComponents/FormCar/FormCar";
import FormDomain from "../../uiComponents/FormDomain/FormDomain";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import LoadingIndicator from "../../uiComponents/LoadingIndicator/LoadingIndicator";
import instance from "../../apis/api";
import background from "../../assets/regForm-bg-2021.svg";
import { ToastContainer, toast } from "react-toastify";
import { toastError } from "../../utils/userHelperFuncs";
import { useCookies } from "react-cookie";
import "./formScreen.css";

const FormScreen = () => {
  const [counter, setCounter] = useState(1);
  const [name, setName] = useState("");
  const [car, setCar] = useState("");
  const [phNo, setPhNo] = useState("");
  const [domains, setDomains] = useState([]);
  const [coreDomains, setCoreDomains] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showConfirmed, setShowConfirmed] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [next, setNext] = useState(false);
  const [prev, setPrev] = useState(false);
  const [filledForm, setFilledForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingScreen, setLoadingScreen] = useState(true);
  const [cookies, removeCookie] = useCookies(["token"]);
  const phNoRegex = RegExp(/^[+]?\d{0,3}?[6-9]\d{9,10}$/);
  const history = useHistory();

  //Input References for Focus
  const phoneInput = useRef(null);
  const questionInput = useRef([]);

  useEffect(() => {
    if (counter >= 3 && questionInput.current[counter - 4]) {
      questionInput.current[counter - 4].focus();
    }
  }, [counter]);

  useEffect(() => {
    // redirect if not logged in
    if (cookies.token === "undefined" || cookies.token == null) {
      console.log("i wss here");

      setLoadingScreen(false);
      setPrev(true);
    } else {
      setLoadingScreen(false);
    }
    // eslint-disable-next-line
  }, []);
  function onKeyDownFunction(e) {
    if (e.key === "Enter" && counter <= 3) {
      incrCounter();
    }
  }
  function testEverythingCool() {
    if (counter === 1 && phNo.trim() === "") {
      requiredFieldToast();
      return false;
    } else if (counter === 1 && !phNoRegex.test(phNo)) {
      phNoFieldToast();
      return false;
    } else if (counter === 2 && car.trim() === "") {
      requiredFieldToast();
      return false;
    } else if (counter === 3 && domains.length === 0) {
      requiredFieldToast();
      return false;
    }
    return true;
  }

  function incrCounter() {
    if (counter !== questions.length + 3) {
      if (testEverythingCool()) {
        setCounter(counter + 1);
      }
    } else {
      initialSubmit();
    }
  }

  function decrCounter() {
    if (counter !== 1) {
      setCounter(counter - 1);
    }
  }

  function phNoFieldToast() {
    toast.dark("Please enter a valid 10 digit Phone Number!", {
      position: "top-center",
      autoClose: 10000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  function requiredFieldToast() {
    toast.dark("This is a required field!", {
      position: "top-center",
      autoClose: 10000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const initialSubmit = () => {
    // setLoading(true);
    setShowConfirmation(true);
  };

  const handleSubmit = () => {
    // setLoading(true);
    // setLoadingScreen(true);
    setFilledForm(true);
    let finalResp = {
      phoneNo: phNo,
      car: car,
      specificDomains: domains,
    };

    console.log("hekbfqajsd", finalResp);
    instance
      .post("/dashboard/userForm", finalResp, {
        headers: {
          Authorization: `Bearer ${cookies.token}`,
          "Content-Type": "application/json; charset=utf-8",
        },
      })
      .then(function (response) {
        alert("going to dash");
        console.log("going to dash");
        setLoading(false);
        setTimeout(() => {
          setNext(true);
          history.push("/dashboard");
        }, 1000);
        // history.push("/dashboard");
      })
      .catch(function (err) {
        console.log("catch block");
        alert(err);
        setShowConfirmed(false);
        setLoading(false);
        setLoadingScreen(false);
        toastError(err.response.data.message);
      });

    setLoading(false);
    setTimeout(() => {
      setNext(true);
      history.push("/dashboard");
    }, 3000);
    console.log("c");
  };

  if (loadingScreen) {
    return <LoadingScreen />;
  }
  return (
    <div id="form-screen-container" onKeyDown={(e) => onKeyDownFunction(e)}>
      <div
        id="overlay"
        className={showConfirmed ? "visible-comp" : "invisible-comp"}
      ></div>

      <div
        id="confirmation-screen"
        className={
          showConfirmation && !showConfirmed ? "visible-comp" : "invisible-comp"
        }
        // className="visible-comp"
      >
        <h2>Add car ?</h2>
        <div id="confirmation-btns">
          <h4 onClick={() => setShowConfirmation(false)}>Take me back</h4>
          <div
            onClick={() => {
              setShowConfirmed(true);
              handleSubmit();
            }}
          >
            Proceed
          </div>
        </div>
      </div>

      <div
        id="confirmed-screen"
        className={showConfirmed ? "visible-comp" : "invisible-comp"}
      >
        <img src={success} alt="success img" />
        <h2>CAR ADDED</h2>
        <h4>
          You will be redirected to{" "}
          <span
            // onClick={() => setNext(true)}
            style={{ color: "#FA652B" }}
          >
            Dashboard
          </span>{" "}
          in 5 secs...
        </h4>
      </div>

      <div className="form-container">
        <img src={background} alt="" className="form-bg-img" />

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div id="form-components">
          <div className={counter === 1 ? "visible-comp" : "invisible-comp"}>
            <FormNumber
              phNo={phNo}
              required={true}
              mandatory={true}
              setPhNo={(newPhNo) => setPhNo(newPhNo)}
              compno={counter}
              question="Tell us your phone number."
              inputRef={phoneInput}
              name={name}
            />
          </div>
          <div className={counter === 2 ? "visible-comp" : "invisible-comp"}>
            <FormCar car={car} setCar={(newCar) => setCar(newCar)} />
          </div>
          <div className={counter === 3 ? "visible-comp" : "invisible-comp"}>
            <FormDomain
              domains={domains}
              coreDomains={coreDomains}
              setCoreDomains={(newCoreDomains) => {
                setCoreDomains(newCoreDomains);
              }}
              setDomains={(domain) => {
                setDomains(domain);
              }}
            />
          </div>
        </div>
        <div id="form-footer-container">
          <div id="form-footer">
            <div id="form-footer-content">
              <div id="page-arrows">
                <div
                  id="icon-up"
                  className={counter === 1 ? "disabled-arrow" : "dummy-class"}
                  onClick={decrCounter}
                >
                  <KeyboardArrowUpIcon id="icon-size" />
                </div>
                {counter === questions.length + 3 ? (
                  <div
                    id="form-submit-btn"
                    onClick={() => initialSubmit()}
                    className={
                      counter !== questions.length + 3
                        ? "disabled-comp"
                        : "dummy-class"
                    }
                  >
                    {loading ? <LoadingIndicator /> : "Submit"}
                  </div>
                ) : (
                  <div
                    id="icon-down"
                    className={
                      counter === questions.length + 3
                        ? "disabled-arrow"
                        : "dummy-class"
                    }
                    onClick={incrCounter}
                  >
                    <KeyboardArrowDownIcon id="icon-size" />
                  </div>
                )}
              </div>
            </div>

            <div
              id="completion-indicator"
              style={{ width: (100 * counter) / (questions.length + 3) + "vw" }}
            ></div>
          </div>
        </div>
        <div className="absolute-pos">
          <ToastContainer
            position="top-center"
            autoClose={10000}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            style={{ padding: "12px 12px" }}
          />
        </div>
      </div>

      {prev ? <Redirect push to="/" /> : null}
      {next ? (
        <Redirect
          push
          to={{ pathname: "/dashboard", state: { redirected: filledForm } }}
        />
      ) : null}
    </div>
  );
};

export default FormScreen;
