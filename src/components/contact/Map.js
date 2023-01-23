import React from "react";

function Map() {
  return (
    <div>
      <div className="google-map-code">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.8070947052884!2d76.73294851426824!3d30.751919681630444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedfda019c549%3A0x937f67b320cc45c5!2sh%2C%20Flat%20No.%205322-5328%2C%205320%2C%20Sector%2038%20West%2C%20Sector%2038%2C%20Chandigarh%2C%20160014!5e0!3m2!1sen!2sin!4v1674405304767!5m2!1sen!2sin"
          width="400"
          height="400"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
