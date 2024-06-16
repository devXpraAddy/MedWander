import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Button, Typography } from "@mui/material";

const Home = () => {
  const handleRefresh = () => {
    axios
      .get("http://localhost:3001/refresh")
      .then((response) => {
        console.log(response.data);
        // Update Google Sheets with new data
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Welcome
      </Typography>
      <Link to="/formA">
        <Button variant="contained" color="primary">
          Form A
        </Button>
      </Link>
      <Link to="/formB">
        <Button variant="contained" color="secondary">
          Form B
        </Button>
      </Link>
      <Button variant="contained" color="default" onClick={handleRefresh}>
        Refresh Data
      </Button>
    </Container>
  );
};

export default Home;
