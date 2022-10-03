import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Card = (info) => {
  return (
    <div id={info.info.id} className="card">
      <div className="topCard">
        <img className="flag" src={info.info.flag} alt={`Flag of ${info.info.country}`}></img>
        <button className="iconBtn"><FontAwesomeIcon className="icon" icon={faInfoCircle}/></button>
      </div>
      <img className="track" src={info.info.image} alt={`Track map of ${info.info.track_info.circuit_name}`}></img>
      <h2>{info.info.country}</h2>
    </div>
  );
};

export default Card;