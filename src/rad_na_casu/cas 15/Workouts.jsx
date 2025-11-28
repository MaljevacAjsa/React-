import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "./exercises.json";
import "./Workouts.css";

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setWorkouts(data.exercises);
    setLoading(false);
  }, []);

  if (loading) return <p>Loading workouts...</p>;

  return (
    <div className="workouts_page">
      <h1>Workouts</h1>

      <div className="workout_cards_div">
        {workouts.map((item, index) => (
          <Link
            to="/workoutDetails"
            state={{ exercise: item }}
            key={index}
            className="workout_card_link"
          >
            <div className="workout_card">
              <h3>{item.name}</h3>
              <p>
                <strong>Kategorija:</strong> {item.category || "N/A"}
              </p>
              <p>
                <strong>Primarni mišići:</strong>{" "}
                {item.primary_muscles?.join(", ") || "N/A"}
              </p>
              <p>
                <strong>Oprema:</strong> {item.equipment?.join(", ") || "N/A"}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Workouts;
