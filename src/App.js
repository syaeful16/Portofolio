import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Element } from "react-scroll";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Motivation from "./components/Motivation";
import MyExperience from "./components/MyExperience";
import MyProject from "./components/MyProject";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Contact from "./Contact";
import Homepage from "./Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portofolio" element={<Homepage/>}></Route>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
