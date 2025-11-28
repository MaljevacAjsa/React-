import { useLocation, Link } from "react-router-dom";
import "./WorkoutDetails.css";

const WorkoutDetails = () => {
  const location = useLocation();
  const exercise = location.state?.exercise;

  if (!exercise) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <p>No information found about the exercise.</p>
        <Link to="/workouts" className="workout_card_link">
          Back To Exercises
        </Link>
      </div>
    );
  }

  return (
    <div
      className="workout_details"
      style={{ padding: "20px", textAlign: "center" }}
    >
      <Link to="/workouts" className="workout_card_link">
        <button>Go back</button>
      </Link>
      <div className="workouts_sub_container">
        <div className="workout_text">
          <h2 style={{ marginTop: "20px" }}>{exercise.name}</h2>
          <p>
            <strong>Category: </strong> {exercise.category || "N/A"}
          </p>
          <p>
            <strong>Primary muscle: </strong>{" "}
            {exercise.primary_muscles?.length > 0
              ? exercise.primary_muscles.join(", ")
              : "Primary muscle not found"}
          </p>
          <p>
            <strong>Secondary muscle: </strong>{" "}
            {exercise.secondary_muscles?.length > 0
              ? exercise.secondary_muscles.join(", ")
              : "Secondary muscle not found"}
          </p>
          <p>
            <strong>Equipment: </strong>{" "}
            {exercise.equipment?.length > 0
              ? exercise.equipment.join(", ")
              : "Exercise equipment not found"}
          </p>
          <p style={{ marginTop: "20px" }}>
            <strong>Description: </strong>{" "}
            {exercise.description || "Exercise description not found"}
          </p>
        </div>
        {exercise.instructions && (
          <div className="workout_instructions">
            <strong>Instructions: </strong>
            <ol>
              {exercise.instructions.map((step, index) => (
                <li key={index} style={{ marginTop: "5px" }}>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>

      {exercise.video && (
        <div className="workout_video">
          <iframe
            width="560"
            height="315"
            src={exercise.video.replace("watch?v=", "embed/")}
            title={exercise.name}
            frameBorder="0"
            allowFullScreen
            style={{ borderRadius: "16px" }}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default WorkoutDetails;
