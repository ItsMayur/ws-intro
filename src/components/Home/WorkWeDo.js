import React from "react";
import "../../css/workWeDo.css";
import compaign from "../../img/Compaign.svg";
import politicalCandidate from "../../img/politicalCandidate.svg";
import SocialMediaManagment from "../../img/SocialMediaManagment.svg";
import Checklist from "../../img/Checklist.svg";

function WorkWeDo() {
  return (
    <div className="rightBox workBox" id="WORKBOX">
      <div className="workBoxHeading">
        <h1>OUR SERVICES</h1>
      </div>
      <div className="workColumn">
        <div className="workTab">
          <img src={compaign} alt="" />
          <div className="workContent">
            <h2>CAMPAIGNING</h2>
            <p>
              POSITIVE AND NEGATIVE CAMPAIGING PLAY AN IMPORTANT ROLE AT THE
              TIME OF ELECTION THAT IS WHY WE ARE HERE FOR YOU ABOUT THIS.
            </p>
          </div>
        </div>
        <div className="workTab">
          <div className="workContent">
            <h2>ELECTION MOMENTUM</h2>
            <p>
              WE WILL BE THEIR FOR YOU FROM THE DAY OF NOMINATION TILL YOU HAS
              BEEN ELECTED.
            </p>
          </div>
          <img src={politicalCandidate} alt="" />
        </div>

        <div className="workTab">
          <img src={SocialMediaManagment} alt="" />
          <div className="workContent">
            <h2>SOCIAL MEDIA MANAGMENT</h2>
            <p>
              SOCIAL MEDIA MANAGMENT IS MUST DURING THIS ONLINE ERA WHERE YOU
              ALSO CAN MAKE GREAT EMPACT ON CROWD WITHOUT EVEN INTRACTING THEM
              PHYSICALLY
            </p>
          </div>
        </div>
        <div className="workTab">
          <div className="workContent">
            <h2>SURVEY OF WHAT PEOPLE DEMAND</h2>
            <p>
              ANALISING PEOPLE DEMAND IS CONSIDERED AS A MAJOR RESPOSIBILTY FOR
              A POLITICIAN.WINNER SEEKERS WILL HELP YOU TO MAKE THIS TASK EASY
              THROUGH OUR DETAILED REPORTS BASED ON SURVEYS
            </p>
          </div>
          <img src={Checklist} alt="" />
        </div>
      </div>
    </div>
  );
}

export default WorkWeDo;
