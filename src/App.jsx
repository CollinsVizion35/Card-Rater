import { useEffect, useState, createContext } from "react";
import { Routes, Route, Router } from "react-router-dom";
import "./App.css";
import { AuthContextProvider } from "./contexts/AuthContext";
import { AppContextPage } from "./contexts/AppContext";
import Start from "./start";
import Home from "./home";
import HomeButton2 from "./HomeButtons/HomeButton2";
import Rater from "./pages/rater";
import { MusicContextPage } from "./contexts/musicContext";
import Player from "./music/player";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <AppContextPage>
          <MusicContextPage>
            <Routes>
              <Route path="/" element={<Start />} />
              <Route path="/home" element={<Home />} />
              <Route path="/page2" element={<HomeButton2 />} />
              <Route path="/footballRater" element={<Rater />} />
              <Route path="/player" element={<Player />} />
            </Routes>
          </MusicContextPage>
        </AppContextPage>
      </AuthContextProvider>
    </div>
  );
}

export default App;
