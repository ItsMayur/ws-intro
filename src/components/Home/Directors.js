import React from "react";
import "../../css/directors.css";
import dr1 from "../../img/directors/dr1.jpg";
import dr2 from "../../img/directors/dr2.jpg";

function directors() {
  return (
    <div className="directors rightBar" id="DIRECTORS">
      <div className="directorsHeading">
        <h1>WINNER SEEKER DIRECTORS</h1>
      </div>
      <div className="directorsText">
        <p>
          jsWe have established ourselves as a pioneering platform of choice for
          professio.nals to entWe have established ourselves as a pioneering
          platform of choice for professionals to enter the political sphere and
          meaningfully contribute to the space. We would like I-PAC to transform
          into an institution for young leaders to partake in grassroots
          politics and have a strengthening and positive impact on the democracy
          of our nation. We have established ourselves as a pioneering platform
          of choice for professionals to enter the political sphere and
          meaningfully contribute to the space. We would like I-PAC to transform
          into an institution for young leaders to partake in grassroots
          politics and have a strengthening and positive impact on the democracy
          of our nation.
        </p>
      </div>
      <div className="directorIntro">
        <div className="director">
          <img src={dr2} alt="" />
          <h2>Mayur Sehgal</h2>
          <p>CTO</p>
          <a href="">
            {" "}
            <i class="fa-brands fa-linkedin directorLinkedin"></i>
          </a>
        </div>
        <div className="director">
          <img src={dr1} alt="" />
          <h2>Avinash</h2>
          <p>TEAM LEAD</p>
          <a href="">
            {" "}
            <i class="fa-brands fa-linkedin directorLinkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default directors;
