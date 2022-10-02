import { React, useState } from "react";

const App = () => {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState([]);

  return (
    <div id="container">
      <div id="nav">
        <h1>Formula 1 Memory Card</h1>
      </div>
      <div id="content">
        <h3>Welcome to F1 memory card!<br></br>Click all images without clicking the same image twice.</h3>
        <button id="start">START</button>
      </div>
      <div id="footer">
        <a href="">GITHUB</a>
      </div>
    </div>
  );
};

export default App;
