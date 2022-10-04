import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Card = ({ cardClicked, info }) => {
  return (
    <div onClick={cardClicked} id={info.id} className="card">
      <div id={info.id} className="topCard">
        <img id={info.id} className="flag" src={info.flag} alt={`Flag of ${info.country}`}></img>
        <button id={info.id} className="iconBtn"><FontAwesomeIcon id={info.id} className="icon" icon={faInfoCircle}/></button>
      </div>
      <img id={info.id} className="track" src={info.image} alt={`Track map of ${info.track_info.circuit_name}`}></img>
      <h2 id={info.id}>{info.country}</h2>
    </div>
  );
};

export default Card;