import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/about";
import ForClinic from "./pages/forClinic";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path="/about" element={<AboutUs />}></Route>
      </Routes>
      <Routes>
        <Route path="/forclinic" element={<ForClinic />}></Route>
      </Routes>
    </div>
  );
}

export default App;
