import React from "react";
import JoinUs from "./JoinUs";
function Department1() {
  return (
    <div className="departmentBox">
      <div className="joinHeading">
        <h1>JOIN US</h1>
      </div>
      <div className="joinUsBox">
        <JoinUs />
        <div className="departmentContent">
          <div className="video"></div>
          <div className="data">
            <h1 className="MainHeading">COMPAIGN AND FEILD OPERATIONS</h1>
            <p className="MainContent">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              consequatur blanditiis deserunt consectetur officiis officia culpa
              facere repudiandae, perspiciatis ipsam ut distinctio, assumenda
              in, expedita quaerat possimus dolorem ipsum nam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Department1;
