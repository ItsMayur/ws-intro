import React from "react";
import Footer from "../Home/Footer";
import LoginNav from "./LoginNav";
import RegisterBox from "./RegisterBox";
import SignInBox from "./SignInBox";

function Loginform() {
  return (
    <div>
      <LoginNav />
      <div className="loginContent">
        <RegisterBox />
        {/* <SignInBox /> */}
      </div>
      <Footer mode="Width100" />
    </div>
  );
}

export default Loginform;
