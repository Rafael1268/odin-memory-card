import React from "react";
import data from"../data.json";
import Card from "./Card";

const GameScreen = (level, score, clicked) => {
  let num = level.level + 4;
  let num1 = level.level + 4;

  const randomCard = () => {
    let numList = [];
    let numList1 = [];

    for(let i = 0; i < num; i++) {
      numList.push(i + 1);
    };

    for(let i = 0; i < num; i++) {
      const num2 = Math.floor(Math.random() * num1)
      num1 = num1 - 1;
      numList1.push(numList[num2]);
      numList.splice(num2, 1);
    };

    return numList1;
  };

  const numList = randomCard();

  return (
    <div id="gameScreen">
      <h4>Level {level.level} / 17</h4>
      <div id="cards">
        {
          numList.map((num) => (
            <Card info={data[num - 1]} key={num} id={num}/>
          ))
        }
      </div>
    </div>
  );
};

export default GameScreen;