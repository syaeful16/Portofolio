import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllExperience from "./components/AllExperience";
import Contact from "./Contact";
import Homepage from "./Homepage";
import Projects from "./Projects";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/portofolio/" element={<Homepage/>}></Route>
          <Route path='/contact/' element={<Contact/>}/>
          <Route path='/project/' element={<Projects/>}/>
          <Route path='/experience/' element={<AllExperience/>}/>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
