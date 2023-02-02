import React from "react";
import "../../css/joinUs.css";
import leaders from "../../img/leaders.jpg";

function JoinUs() {
  return (
    <div className="joinUs">
      <div className="main">
        <div className="departmentsToJoin">
          <a href="/JoinUs" className="department1 departments">
            <div className="departmentCircle1">
              <i class="fa-sharp fa-2x fa-solid fa-bullhorn"></i>{" "}
            </div>
            <p>Campaign & Field Operations</p>
          </a>

          <a
            href="/JoinUs/Research&Insights"
            className="department2 departments"
          >
            <div className="departmentCircle2">
              <i class="fa-solid fa-2x fa-book-open-reader"></i>{" "}
            </div>
            <p>Research & Insights</p>
          </a>
          <a href="/JoinUs/DataAnalystics" className="department3 departments">
            <div className="departmentCircle3">
              <i class="fa-sharp 2x fa-solid fa-database"></i>
            </div>
            <p>Data Analytics & Technology</p>
          </a>
          <a
            href="/JoinUs/DataCommunication"
            className="department4 departments"
          >
            <div className="departmentCircle4">
              <i class="fa-solid fa-2x fa-share-nodes"></i>
            </div>
            <p>Digital Communication & Media</p>
          </a>
          <a href="/JoinUs/Functional" className="department5 departments">
            <div className="departmentCircle5">
              <i class="fa-solid fa-2x fa-user-tie"></i>
            </div>
            <p>Functional (HR, Admin, Finance & Legal)</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
