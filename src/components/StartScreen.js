import React from "react";
import { Link } from "react-router-dom";

const StartScreen = () => {
  return (
    <div id="startScreen">
        <h3>Welcome to F1 memory card!<br></br>Click all the tracks without clicking the same track twice.</h3>
        <Link to="/game">
          <button id="start">START</button>
        </Link>
    </div>
  )
};

export default StartScreen;