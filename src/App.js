// import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Contact from "./components/contact/Contact";
import Directors from "./components/Directors";
import Tagline from "./components/Tagline";
import JoinUs from "./components/JoinUs";
import Loginform from "./components/loginform/Loginform";
import WorkWeDo from "./components/WorkWeDo";
import Map from "./components/contact/Map.js";

function App() {
  return (
    // <JoinUs />
    // <Loginform />
    <div className="project">
      <div className="container">
        <Sidebar />
        <div className="sections">
          <Tagline />
          {/* <WorkWeDo /> */}
          <Directors />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
