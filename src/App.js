import logo from "./logo.svg";
import "./App.css";
//import { Button, Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Sidor/Home";
import Projects from "./Sidor/Projects";
import Contact from "./Sidor/Contact";
import About from "./Sidor/About";
import Navbaren from "./Components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbaren />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
