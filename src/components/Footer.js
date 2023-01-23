import React from "react";
import "../css/footer.css";

function Footer(promps) {
  return (
    <footer className="rightBar" id="Width100">
      <p id="Copyright">Copyright © 2023 WS CONSULTING PRIVATE LIMITED</p>
      <div className="socialMedia">
        <a href="" className="socialIcons facebook">
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="" className="socialIcons twitter">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="" className="socialIcons insta">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="" className="socialIcons youtube">
          <i class="fa-brands fa-youtube"></i>
        </a>
        <a href="" className="socialIcons linkedin">
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
