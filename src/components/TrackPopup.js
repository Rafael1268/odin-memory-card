import React from "react";
import data from "../data.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const TrackPopup = ({ circuitId, hidePopup }) => {
  return (
    <div className="hidden" id="trackPopupContainer">
      <div id="trackPopup">
        <div id="trackInfo">
          <div id="trackInfoSpacer"></div>
          <h4 id="trackInfoText">Track Info</h4>
          <FontAwesomeIcon onClick={hidePopup} id="infoIcon" icon={faCircleXmark} />
        </div>
        <h5>Circuit Name</h5>
        <h6>{data[circuitId].track_info.circuit_name}</h6>
        <h5>Circuit Length</h5>
        <h6>{data[circuitId].track_info.circuit_length}</h6>
        <h5>Race Length</h5>
        <h6>{data[circuitId].track_info.race_length}</h6>
        <h5>Lap Record</h5>
        <p>{data[circuitId].track_info.lap_record_name}</p>
        <h6>{data[circuitId].track_info.lap_record_time}</h6>
        <h5>First Grand Prix</h5>
        <h6>{data[circuitId].track_info.first_grand_prix}</h6>
      </div>
    </div>
  );
};

export default TrackPopup;