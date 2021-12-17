import React from "react"
import Header from "./components/Header";
import Home from "./components/Home"
import './App.css';
import Details from "./components/Details";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
        <Header />
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
