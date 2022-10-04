import { React, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GameScreen from "./components/GameScreen";
import StartScreen from "./components/StartScreen";
import TrackPopup from "./components/TrackPopup";
import GameOver from "./components/GameOver";
import GameWon from "./components/GameWon";

const App = () => {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clicked, setClicked] = useState([]);

  return (
    <div id="container">
      <div id="nav">
        <h1>Formula 1 Memory Card</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartScreen/>}/>
          <Route path="/game" element={<GameScreen level={level} setLevel={setLevel} score={score} setScore={setScore} highScore={highScore} setHighScore={setHighScore} clicked={clicked} setClicked={setClicked}/>}/>
          <Route path="/game" element={<div><GameScreen level={level} score={score} setLevel={setLevel} setScore={setScore} highScore={highScore} setHighScore={setHighScore} clicked={clicked} setClicked={setClicked}/><TrackPopup/></div>}/>
          <Route path="/game-over" element={<GameOver highScore={highScore}/>}/>
          <Route path="/game-won" element={<GameWon/>}/>
        </Routes>
      </BrowserRouter>
      <div id="footer">
        <a href="https://github.com/Rafael1268/odin-memory-card" target="./">GITHUB</a>
      </div>
    </div>
  );
};

export default App;
