import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Card = (info) => {
  return (
    <div id={info.info.id} className="card">
      <div id={info.info.id} className="topCard">
        <img id={info.info.id} className="flag" src={info.info.flag} alt={`Flag of ${info.info.country}`}></img>
        <button id={info.info.id} className="iconBtn"><FontAwesomeIcon id={info.info.id} className="icon" icon={faInfoCircle}/></button>
      </div>
      <img id={info.info.id} className="track" src={info.info.image} alt={`Track map of ${info.info.track_info.circuit_name}`}></img>
      <h2 id={info.info.id}>{info.info.country}</h2>
    </div>
  );
};

export default Card;