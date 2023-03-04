import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Homepage from "./Homepage";
import Projects from "./Projects";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/portofolio" element={<Homepage/>}></Route>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/project' element={<Projects/>}/>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
