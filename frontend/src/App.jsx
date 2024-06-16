import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import FormA from "./components/FormA";
import FormB from "./components/FormB";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formA" element={<FormA />} />
        <Route path="/formB" element={<FormB />} />
      </Routes>
    </Router>
  );
}

export default App;
