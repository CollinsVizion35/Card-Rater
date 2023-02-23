import { useEffect, useState, createContext } from "react";
import {  Routes, Route, Router } from "react-router-dom";
import "./App.css";
import Start from "./start";
import Home from "./home";
import HomeButton2 from "./HomeButtons/HomeButton2";

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" exact component={Start} />
        <Route path="/home" component={<Home />} />
        <Route path="/page2" component={<HomeButton2/>} />
      </Routes>
    </div>
  );
}

export default App;
