import "./App.css";
import Loginform from "./components/loginform/Loginform";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound.js/NotFound";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Department1 from "./components/JoinUs/Department1";
import Department2 from "./components/JoinUs/Department2";
import Department3 from "./components/JoinUs/Department3";
import Department4 from "./components/JoinUs/Department4";
import Department5 from "./components/JoinUs/Department5";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/JoinUs" element={<Department1 />} />
        <Route
          exact
          path="/JoinUs/Research&Insights"
          element={<Department2 />}
        />
        <Route exact path="/JoinUs/DataAnalystics" element={<Department3 />} />
        <Route
          exact
          path="/JoinUs/DataCommunication"
          element={<Department4 />}
        />
        <Route exact path="/JoinUs/Functional" element={<Department5 />} />
        <Route exact path="/LoginForm" element={<Loginform />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
