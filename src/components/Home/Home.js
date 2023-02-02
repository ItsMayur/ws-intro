import React from "react";
import Contact from "./contact/Contact";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Tagline from "./Tagline";
import Directors from "./Directors";
import About from "./About/About";
import WorkWeDo from "./WorkWeDo";

function Home() {
  return (
    <div className="project">
      <div className="container">
        <Sidebar />
        <div className="sections">
          <section>
            {" "}
            <Tagline />
          </section>
          <section>
            {" "}
            <About />
          </section>
          <section>
            {" "}
            <WorkWeDo />
          </section>
          <section>
            {" "}
            <Directors />
          </section>
          <section>
            {" "}
            <Contact />
          </section>
          <section>
            {" "}
            <Footer />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
