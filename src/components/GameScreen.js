import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import data from"../data.json";
import TrackPopup from "./TrackPopup";

const GameScreen = ({ level, setLevel, score, setScore, highScore, setHighScore, clicked, setClicked }) => {
  const [circuitId, setCircuitId] = useState('1');
  const [numList, setNumList] = useState(['1', '2', '3']);
  const navigate = useNavigate();
  let num = level + 2;
  let num1 = level + 2;

  const randomCard = () => {
    const popup = document.getElementById('trackPopupContainer');
    if(popup === null) {
    } else {
      console.log(popup.className)
      if (popup.className === 'shown') {
        return;
      }
    };
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
    setNumList(numList1);
  };

  const cardClicked = (e) => {
    setClicked(oldClicked => [...oldClicked, e.target.id]);
  };

  const checkGame = (contains) => {
    if(contains === true) {
      navigate('/game-over');
      resetGame();
    } else {
      setScore(score + 1);
    }
  };

  const checkLevel = () => {
    if(clicked.length === level + 2) {
      setClicked([])
      setLevel(level + 1);
    };
  };

  const resetGame = () => {
    setLevel(1);
    setScore(0);
    setClicked([]);
  };

  const showPopup = (e) => {
    setCircuitId(e.currentTarget.id - 1);
    const popup = document.getElementById('trackPopupContainer');
    popup.classList.remove('hidden');
    popup.classList.add('shown');
  };

  const hidePopup = () => {
    const popup = document.getElementById('trackPopupContainer');
    popup.classList.add('hidden');
    popup.classList.remove('shown');
  }

  useEffect(() => {
    if(clicked[0] === undefined) return;
    const latest = clicked[clicked.length - 1]
    let clicked1 = [...clicked];
    clicked1.splice(clicked.length - 1, 1);
    const contains = clicked1.includes(latest);
    checkGame(contains);
  }, [clicked]);

  useEffect(() => {
    if(score > highScore) {
      setHighScore(score);
    };
    checkLevel();
  }, [score]);

  useEffect(() => {
    if(level === 20) {
      navigate('/game-won');
      setLevel(1);
      setScore(0);
      setHighScore(0);
      setClicked([]);
    };
  }, [level])

  useEffect(() => {
    randomCard();
  }, [score, level]);

  return (
    <div id="gameScreen">
      <TrackPopup circuitId={circuitId} hidePopup={hidePopup}/>
      <h4 className="marginT25">Level {level} / 20</h4>
      <h4>Score: {score}</h4>
      <h4 className="marginB20">High Score: {highScore}</h4>
      <div id="cards">
        {
          numList.map((num) => (
            <Card cardClicked={cardClicked} info={data[num - 1]} showPopup={showPopup} key={num} id={num}/>
          ))
        }
      </div>
    </div>
  );
};

export default GameScreen;