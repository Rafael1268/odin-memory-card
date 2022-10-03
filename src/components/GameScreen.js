import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import data from"../data.json";
import Card from "./Card";

const GameScreen = ({ level, setLevel, score, setScore, highScore, setHighScore, clicked, setClicked }) => {
  const navigate = useNavigate();
  let num = level + 2;
  let num1 = level + 2;

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

  const cardClicked = (e) => {
    setClicked(oldClicked => [...oldClicked, e.target.id]);
  };

  const addListeners = () => {
    numList.map((num) => {
      const el = document.getElementById(num.toString());
      el.addEventListener('click', (e) => {cardClicked(e)});
    });
  };

  const removeListeners = () => {
    numList.map((num) => {
      const el = document.getElementById(num.toString());
      console.log(el);
      el.removeEventListener('click', (e) => {cardClicked(e)});
    });
  };

  const checkGame = (contains) => {
    console.log(contains);
    if(contains === true) {
      navigate('/');
      resetGame();
    } else {
      setScore(score + 1);
    }
  };

  const checkLevel = () => {
    if(score === level + 2) {
      removeListeners();
    };
  };

  const resetGame = () => {
    setLevel(1);
    setScore(-1);
    setClicked([]);
  };

  useEffect(() => {
    addListeners();
  }, [])

  useEffect(() => {
    const latest = clicked[clicked.length - 1]
    let clicked1 = [...clicked];
    clicked1.splice(clicked.length - 1, 1);
    const contains = clicked1.includes(latest);
    checkGame(contains);
  }, [clicked])

  useEffect(() => {
    if(score > highScore) {
      setHighScore(score);
    };
    checkLevel();
  }, [score])

  return (
    <div id="gameScreen">
      <h4 className="marginT25">Level {level} / 15</h4>
      <h4>Score: {score}</h4>
      <h4 className="marginB20">High Score: {highScore}</h4>
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