import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Countries from "./pages/Countries";
import Universities from "./pages/Universities";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/universities" element={<Universities />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
