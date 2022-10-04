import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Card = ({ cardClicked, info, showPopup }) => {
  return (
    <div className="card">
      <div className="topCard">
        <img className="flag" src={info.flag} alt={`Flag of ${info.country}`}></img>
        <button onClick={showPopup} id={info.id} className="iconBtn"><FontAwesomeIcon className="icon" icon={faInfoCircle}/></button>
      </div>
      <img onClick={cardClicked} id={info.id} className="track" src={info.image} alt={`Track map of ${info.track_info.circuit_name}`}></img>
      <h2>{info.country}</h2>
    </div>
  );
};

export default Card;