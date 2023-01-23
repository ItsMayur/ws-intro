import React from "react";
import Footer from "../Footer";
import LoginNav from "./LoginNav";
import SignInBox from "./SignInBox";

function Loginform() {
  return (
    <div>
      <LoginNav />
      <div className="loginContent">
        <SignInBox />
      </div>
      <Footer mode="Width100" />
    </div>
  );
}

export default Loginform;
