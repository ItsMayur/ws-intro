import React from "react";
import "../css/sidebar.css";
import Logo from "../img/logo.jpg";

import ReactDOM from "react-dom";
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
  return (
    <div className="SideBox">
      <ul>
        <a className="sideIcons">
          <li>
            <img src={Logo} alt="" id="Logo" />
          </li>
        </a>
        <a className="sideIcons" href="">
          <li>
            {RankingStar}
            <p>Driving Force</p>
          </li>
        </a>
        <a className="sideIcons" href="">
          <li>
            {PeopleGroup}
            <p>About us</p>
          </li>
        </a>
        <a className="sideIcons" href="">
          <li>
            {Briefcase}
            <p>Our work</p>
          </li>
        </a>
        <a className="sideIcons" href="">
          <li>
            {DiceD20}
            <p>Impact</p>
          </li>
        </a>
        <a className="sideIcons" href="">
          <li>
            {SatelliteDish}
            <p>Media</p>
          </li>
        </a>
        <div className="loginBtns">
          <a href="" id="Join">
            Join Us
          </a>
          <a href="" id="Contact">
            Contact
          </a>
        </div>
      </ul>
    </div>
  );
}

export default Sidebar;
