import React from "react";
import "./FormNumber.css";

const FormComponent3 = ({
  compno,
  question,
  mandatory,
  phNo,
  setPhNo,
  inputRef,
  name,
}) => {
  const givenName = name === undefined ? "there" : name;
  return (
    <div id="comp3-container">
      <h1>Hey {givenName}!</h1>
      <h5>Let us get started by getting more about you.</h5>
      <h3>
        {compno + ". " + question + " "}
        <span
          className={mandatory ? "comp3-visible-comp" : "invisible-comp"}
          style={{ color: "red" }}
        >
          *
        </span>
      </h3>
      <input
        type="text"
        autoFocus
        value={phNo}
        placeholder="Your Phone Number"
        onChange={(newPhNo) => setPhNo(newPhNo.target.value)}
        className="form-comp-input-field"
        ref={inputRef}
        
      />
    </div>
  );
};

export default FormComponent3;
