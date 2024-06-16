import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  Button,
  MenuItem,
  Typography,
} from "@mui/material";

const Form = ({ formType }) => {
  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
      setName(savedData.name);
      setCountryCode(savedData.countryCode);
      setPhoneNumber(savedData.phoneNumber);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { formType, name, countryCode, phoneNumber };
    axios
      .post("http://localhost:3001/submit", formData)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem(
          "formData",
          JSON.stringify({ name, countryCode, phoneNumber })
        );
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <Typography variant="h4">
        {formType === "A" ? "Form A" : "Form B"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          select
          label="Country Code"
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          required
          fullWidth
          margin="normal"
        >
          <MenuItem value="US">US</MenuItem>
          <MenuItem value="CA">CA</MenuItem>
          <MenuItem value="UK">UK</MenuItem>
        </TextField>
        <TextField
          label="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Form;
