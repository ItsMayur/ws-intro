import React from "react";
import "./NotFound.css";
import NotFoundImg from "../../img/NotFound.svg";

function NotFound() {
  return (
    <div className="notFoundPage">
      <h1>
        You are at the end of universe.
        <a href="/" id="Heading404">
          Click here to go back to Home
        </a>
      </h1>
      <div className="Img404">
        <img src={NotFoundImg} alt="" />
      </div>
    </div>
  );
}

export default NotFound;
