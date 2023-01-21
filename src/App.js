import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import WS from "./components/WS";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Directors from "./components/Directors";

function App() {
  return (
    <div className="project">
      <div className="container">
        <Sidebar />
        <div className="sections">
          <WS />
          <Directors />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
