import React from "react";
import "../css/joinUs.css";

function JoinUs() {
  return (
    <div className="joinUs">
      <div className="joinHeading">
        <h1>JOIN US</h1>
      </div>
      <div className="main">
        <div className="departmentsToJoin">
          <div className="department1 departments"></div>
          <div className="department2 departments"></div>
          <div className="department3 departments"></div>
          <div className="department4 departments"></div>
          <div className="department5 departments"></div>
        </div>
        <div className="departmentContent">
          <div className="video"></div>
          <div className="data">
            <h1>Digital Communication & Media</h1>
            <p>
              <strong>Digital Communications (DC):</strong> The digital team
              works with the vision to define digital electioneering by
              leveraging technology & spearheading innovation by using new age
              media to reach the masses. It engages digitally equipped audiences
              to set narratives and create a citizen-centric agenda. It
              amplifies campaigns, narratives, messages, etc to ensure that
              political parties are able to communicate with their audiences
              better. It consists of multiple subunits like Content, Network,
              Propagation and creative units like Design, Video.
            </p>
            <p>
              <strong>Media:</strong> The Media Team is the pillar on which the
              communication of political parties, leaders and campaigns rest. It
              is that pivot which coordinates with journalists, conducts
              research and sets the party/campaign narrative at the state and
              national level.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
