import React from "react";
import "../css/workWeDo.css";
import compaign from "../img/Compaign.svg";
import politicalCandidate from "../img/politicalCandidate.svg";
import SocialMediaManagment from "../img/SocialMediaManagment.svg";
// import compaign from "../img/Compaign.svg";

function WorkWeDo() {
  return (
    <div className="rightBox workBox">
      <div className="heading">
        <h1>WHAT WE DO</h1>
      </div>
      <div className="workWeDo">
        <div className="workTab">
          {" "}
          <p>
            Lorem ipsum dolor sit, amet consectetur
            adipisicingsdfjdosjfdslfjsdjfsdfssfsflsjfsjfslfjsdljfsljfldskjfsdfslfjsld
          </p>
          <img src={politicalCandidate} alt="" />
        </div>
        <div className="workTab">
          {" "}
          <p>d</p>
          <img src={compaign} alt="" />
        </div>
        <div className="workTab">
          <p>a</p>
          <img src={compaign} alt="" />
        </div>
        <div className="workTab">
          {" "}
          <p>c</p>
          <img src={SocialMediaManagment} alt="" />
        </div>
      </div>
    </div>
  );
}

export default WorkWeDo;
