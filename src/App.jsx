import { useEffect, useState, createContext } from "react";
import { Routes, Route, Router } from "react-router-dom";
import "./App.css";
import { AuthContextProvider } from "./contexts/AuthContext";
import { AppContextPage } from "./contexts/AppContext";
import Start from "./start";
import Home from "./home";
import HomeButton2 from "./HomeButtons/HomeButton2";
import Rater from "./pages/rater";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <AppContextPage>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/home" element={<Home />} />
            <Route path="/page2" element={<HomeButton2 />} />
            <Route path="/footballRater" element={<Rater />} />
          </Routes>
        </AppContextPage>
      </AuthContextProvider>
    </div>
  );
}

export default App;
