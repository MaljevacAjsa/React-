import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./AppCas.css";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Workouts from "./Workouts";

const AppCas = () => {
  return (
    <BrowserRouter>
      {/* Mora da bude jedini wraper svemu i divu */}
      <div className="main_container">
        <div className="header">
          <div className="logo_div">
            <Link to="/">
              <h3>Apex</h3>
            </Link>
            <img src="src/assets/logo za vezbanje.png" alt="" />
          </div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/workouts">Workouts</Link>
            {/* <Link to="/workoutDetails">Workout Details</Link> */}
          </nav>
        </div>
        <div className="container"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/workouts" element={<Workouts />} />
          {/* <Route path="/workoutDetails" element={<WorkoutDetails />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default AppCas;
