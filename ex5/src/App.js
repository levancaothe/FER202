import React, { useState } from "react";
import Exercise1 from "./components/Exercise1";
import Exercise2 from "./components/Exercise2";
import Exercise3 from "./components/Exercise3";
import Exercise4 from "./components/Exercise4";
import Exercise5 from "./components/Exercise5";

function App() {
  const [exercise, setExercise] = useState(1);

  const renderExercise = () => {
    switch (exercise) {
      case 1:
        return <Exercise1 />;
      case 2:
        return <Exercise2 />;
      case 3:
        return <Exercise3 />;
      case 4:
        return <Exercise4 />;
      case 5:
        return <Exercise5 />;
      default:
        return <Exercise1 />;
    }
  };

  return (
    <>
      <nav className="exercise-menu navbar navbar-dark bg-dark px-3">
        <span className="navbar-brand mb-0 h1">
          Exercise 5 - Bootstrap 5
        </span>

        <div className="d-flex gap-2 flex-wrap">
          {[1, 2, 3, 4, 5].map((item) => (
            <button
              key={item}
              type="button"
              className={`btn btn-sm ${
                exercise === item
                  ? "btn-warning"
                  : "btn-outline-light"
              }`}
              onClick={() => setExercise(item)}
            >
              Exercise {item}
            </button>
          ))}
        </div>
      </nav>

      {renderExercise()}
    </>
  );
}

export default App;