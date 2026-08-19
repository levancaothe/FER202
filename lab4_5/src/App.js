import { Routes, Route, Navigate } from "react-router-dom";
import Course from "./components/Course";
import CourseDetail from "./components/CourseDetail";

function App() {
  return (
    <div>
      {/* <nav className="navbar navbar-dark bg-dark mb-4">
        <div className="container justify-content-start">
          <Link className="navbar-brand me-3" to="/classes">Attendance System</Link>
          <Link className="btn btn-secondary btn-sm" to="/classes">Classes</Link>
        </div>
      </nav> */}

      <div>
        <Routes>
          <Route path="/courses" element={<Course />} />
          <Route path="/detail/:id" element={<CourseDetail />} />

          {/* auto điều hướng đến /classes (thay thế router mặc định = /classes)*/}
        <Route path="/" element={<Navigate to="/courses" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
