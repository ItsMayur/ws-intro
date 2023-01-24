import React from "react";
import politicalCandidate from "../../img/politicalCandidate.svg";
import "../../css/tagline.css";

function tagline() {
  return (
    <div className="tagline rightBar" id="TAGLINE">
      <div className="headImg">
        <img src={politicalCandidate} alt="" srcset="" />
      </div>
      <div className="headContent">
        <h1>WINNIX SEEKERS</h1>
        <h2>WE DISCOVER BRAND IN YOU</h2>
      </div>
    </div>
  );
}

export default tagline;
