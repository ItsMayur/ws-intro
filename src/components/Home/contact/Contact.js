import React from "react";
import "../../../css/contact.css";
import Map from "./Map";

function Contact() {
  return (
    <div className="contactBox" id="CONTACT">
      <div className="contactHeading">
        <h1>CONTACT US</h1>
      </div>
      <div className="contact rightBar">
        <div className="map">
          <Map />
        </div>
        <div className="mainContentDiv">
          <div className="contactDiv">
            <div className="contactIcons">
              <i class="fa-solid fa-2x fa-location-crosshairs"></i>
            </div>
            <div className="infoBox">
              <h3>WS CONSULTING PRIVATE LIMITED</h3>
              <p>H.NO-5320B, Sector 38, West Chandigarh,India</p>
            </div>
          </div>
          <div className="contactDiv">
            <i class="fa-solid fa-2x fa-envelope"></i>
            <div className="infoBox">
              <h3>Email</h3>
              <p>winnix.seekers@outlook.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
