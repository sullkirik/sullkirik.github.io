import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import InstallationCase from "./Pages/InstallationCase";
import Company from "./Pages/Company";
import Led from "./Pages/Led";
import Support from "./Pages/Support";
import ShowRoom from "./Pages/ShowRoom";
import Mail from "./Pages/Mail";
import LedDetail from "./Pages/LedDetail";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/InstallationCase" element={<InstallationCase />} />
        <Route path="/Led" element={<Led />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/ShowRoom" element={<ShowRoom />} />
        <Route path="/Company" element={<Company />} />
        <Route path="/Mail" element={<Mail />} />
        <Route path="/Led/:id" element={<LedDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
