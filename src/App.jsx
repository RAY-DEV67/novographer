import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { Navbar } from "./components/navbar";
import { ScrollToTop } from "./components/scrolltotop";
import { LandingPage } from "./pages/landingpage";
import { LatestProjects } from "./pages/latestProjects";
import { AddImage } from "./pages/addImage";
import React from "react";
import { Menu } from "./pages/menu";

function App() {
  return (
    <div className="App">
     <Router>
      <ScrollToTop>
      <Navbar/>

      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Latest Projects" element={<LatestProjects />} />
      <Route path="/Admin/Bpixels" element={<AddImage />} />
      </Routes>
      </ScrollToTop>
    </Router>
    </div>
  );
}

export default App;
