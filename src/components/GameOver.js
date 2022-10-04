import React from "react";
import { Link } from "react-router-dom";

const GameOver = ({ highScore }) => {
  return (
    <div id="gameOverScreen">
      <h4 className="marginT25">You lost!</h4>
      <h4>High Score: {highScore}</h4>
      <Link to="/game">
        <button id="tryAgain">TRY AGAIN</button>
      </Link>
    </div>
  );
};

export default GameOver;