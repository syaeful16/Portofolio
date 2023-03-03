import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Homepage from "./Homepage";
import Projects from "./Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portofolio" element={<Homepage/>}></Route>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/project' element={<Projects/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
