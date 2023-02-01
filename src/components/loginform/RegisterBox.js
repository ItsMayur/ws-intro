import React from "react";
import { useState } from "react";

const RegisterBox = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("a");
  // const [password, setPassword] = useState("a");
  // const [rePassword, setRePassword] = useState("a");

  // async function registerUser(event) {
  //   event.preventDefault();
  //   const response = await fetch("http://localhost:1337/api/register", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name,
  //       email,
  //       password,
  //     }),
  //   });

  //   const data = await response.json();
  //   console.log(data);
  // }

  return (
    <div id="SignIn">
      <div className="signInHeading">
        <h2>SIGN UP</h2>
      </div>
      <form
        action="Submit" //</div>onSubmit={registerUser }
        className="inputs"
      >
        <div className="inputFeilds">
          <i class="fa-solid fa-envelope"></i>
          <input
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            placeholder="Name"
          />
          <p> ENTER YOUR NAME</p>
        </div>
        <div className="inputFeilds">
          <i class="fa-solid fa-envelope"></i>
          <input
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Email"
          />
          <p> ENTER YOUR EMAIL</p>
        </div>

        <div className="inputFeilds">
          <i class="fa-solid fa-lock"></i>
          <input
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Password"
          />
          <p> ENTER YOUR PASSWORD</p>
        </div>
        <div className="inputFeilds">
          <i class="fa-solid fa-lock"></i>
          <input
            // value={rePassword}
            // onChange={(e) => setRePassword(e.target.value)}
            type="password"
            placeholder="ReEnter Password"
          />
          <p> ENTER YOUR PASSWORD AGAIN</p>
        </div>
        <div className="signInBtn">
          <input type="submit">SIGN UP</input>
        </div>
      </form>
    </div>
  );
};

export default RegisterBox;
