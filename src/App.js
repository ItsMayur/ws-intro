import "./App.css";
import Department1 from "./components/JoinUs/Department1";
import Loginform from "./components/loginform/Loginform";
import WorkWeDo from "./components/Home/WorkWeDo";
import Map from "./components/Home/contact/Map.js";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound.js/NotFound";

import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import JoinUs from "./components/JoinUs/JoinUs";

function App() {
  return (
    <BrowserRouter>
      <div className="app"></div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/JoinUs" element={<JoinUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
