import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Register from "./Register";
import RegistrationForm from "./RegistrationForm";
import "./App.css";

const App = () => {
  return (
    <div className="form-container">
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/RegistartionForm" element={<RegistrationForm />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
