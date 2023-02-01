import React from "react";
import "../../css/sidebar.css";
import Logo from "../../img/logo.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRankingStar,
  faSatelliteDish,
  faPeopleGroup,
  faBriefcase,
  faDiceD20,
} from "@fortawesome/free-solid-svg-icons";

const RankingStar = <FontAwesomeIcon icon={faRankingStar} />;
const PeopleGroup = <FontAwesomeIcon icon={faPeopleGroup} />;
const Briefcase = <FontAwesomeIcon icon={faBriefcase} />;
const DiceD20 = <FontAwesomeIcon icon={faDiceD20} />;
const SatelliteDish = <FontAwesomeIcon icon={faSatelliteDish} />;

function Sidebar(promps) {
  function HamToggle() {
    if (window.innerWidth <= 768) {
      var x = document.getElementById("HamToggleId");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }
  }
  return (
    <div>
      <div className="topNavRes">
        <div className="hambergerImg">
          {" "}
          <img src={Logo} alt="" />
        </div>

        <a onClick={HamToggle} id="HamburgerIcon">
          <i class="fa fa-bars"></i>
        </a>
      </div>
      <div id="HamToggleId" className="SideBox">
        <ul>
          <a className="sideIcons sideBarLogo">
            <li>
              <img src={Logo} alt="" id="Logo" />
            </li>
          </a>
          <a onClick={HamToggle} className="sideIcons" href="#TAGLINE">
            <li>
              {RankingStar}
              <p>Driving Force</p>
            </li>
          </a>
          <a onClick={HamToggle} className="sideIcons" href="#ABOUT">
            <li>
              {PeopleGroup}
              <p>About us</p>
            </li>
          </a>
          <a onClick={HamToggle} className="sideIcons" href="#WORKBOX">
            <li>
              {Briefcase}
              <p>Our work</p>
            </li>
          </a>
          <a onClick={HamToggle} className="sideIcons" href="#DIRECTORS">
            <li>
              {DiceD20}
              <p>WS TEAM</p>
            </li>
          </a>
          <a onClick={HamToggle} className="sideIcons" href="">
            <li>
              {SatelliteDish}
              <p>Media</p>
            </li>
          </a>
          <div className="loginBtns">
            <a href="/JoinUs" id="Join">
              Join Us
            </a>
            <a href="#CONTACT" id="Contact">
              Contact
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
