import React from "react";
import Logo from "../../img/logo.jpg";
import "../../css/loginform.css";

function LoginNav() {
  return (
    <div className="LoginNav">
      <div>
        <img src={Logo} alt="" srcset="" id="logo" />
      </div>
      <div>
        <ul className="loginFormBtns">
          <li>
            <a href="">Jobs</a>
          </li>
          <li>
            <a href="" id="Active">
              Sign In
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LoginNav;
