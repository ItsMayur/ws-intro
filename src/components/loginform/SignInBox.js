import React from "react";
import { useState } from "react";
import axios from "axios";

const SignInBox = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div id="SignIn">
      <div className="signInHeading">
        <h2>SIGN IN</h2>
      </div>
      <div className="inputs">
        <div className="inputFeilds">
          <i class="fa-solid fa-envelope"></i>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <p> ENTER YOUR EMAIL</p>
        </div>
        <div className="inputFeilds">
          <i class="fa-solid fa-lock"></i>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <p> ENTER YOUR PASSWORD</p>
        </div>
        <div className="signInBtn">SIGN IN</div>
      </div>
    </div>
  );
};

export default SignInBox;
