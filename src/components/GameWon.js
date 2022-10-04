import React from "react";
import { Link } from "react-router-dom";

const GameWon = () => {
  return (
    <div id="gameWonScreen">
      <h4 className="marginT25">You beat all 20 levels!</h4>
      <Link to="/">
        <button id="tryAgain">HOME</button>
      </Link>
    </div>
  );
};

export default GameWon;