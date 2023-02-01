import React from "react";
import "../../../css/about.css";
import publicPic from "../../../img/public.png";

function About() {
  return (
    <div className="rightBar" id="ABOUT">
      <div className="about">
        <div className="publicImg">
          <img src={publicPic} alt="" id="PublicImg" />
        </div>
        <div className="aboutContent">
          <div className="aboutHeading">
            <h1>WHO WE ARE</h1>
          </div>
          <p id="AboutPara">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            facilis illo doloremque ducimus soluta vitae deleniti laboriosam,
            expedita dolor sequi? Quo libero adipisci doloremque, dignissimos id
            accusamus. Delectus, quas ipsum. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Amet ad atque veniam ducimus vero
            recusandae similique placeat dolore facilis aspernatur, dignissimos
            fugiat a beatae ab, corporis iste expedita dolores. Eligendi!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
