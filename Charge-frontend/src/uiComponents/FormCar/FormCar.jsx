import React from "react";
import "./FormCar.css";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@material-ui/core";

const FormCar = ({ car, setCar, inputRef }) => {
  const handleInputChange = (event) => {
    setCar(event.target.value);
  };
  return (
    <div id="comp1-container">
      <FormControl component="fieldset">
        <h3>
          2. What's your drive?{" "}
          <span className="comp3-visible-comp" style={{ color: "red" }}>
            *
          </span>
        </h3>
        <RadioGroup
          aria-label="Car"
          defaultValue="Tata Nexon"
          name="radio-buttons-group"
          value={car}
        >
          <FormControlLabel
            value="Tata Nexon"
            control={<Radio />}
            label="Tata Nexon"
            onChange={handleInputChange}
          />
          <FormControlLabel
            value="MG ZS"
            control={<Radio />}
            label="MG ZS"
            onChange={handleInputChange}
          />
          <FormControlLabel
            value="Hyundai Kona"
            control={<Radio />}
            label="Hyundai Kona"
            onChange={handleInputChange}
          />
          <FormControlLabel
            value="Jaguar I-Pace"
            control={<Radio />}
            label="Jaguar I-Pace"
            onChange={handleInputChange}
          />
          <FormControlLabel
            value="Audi e-tron"
            control={<Radio />}
            label="Audi e-tron"
            onChange={handleInputChange}
          />
          <FormControlLabel
            value="Tesla Model 3"
            control={<Radio />}
            label="Tesla Model 3"
            onChange={handleInputChange}
          />          
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default FormCar;
