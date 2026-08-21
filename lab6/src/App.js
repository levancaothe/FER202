import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Subject from "./components/Subject";
import Question from "./components/Question";

function App() {
  return (
    <div>
      <div className="">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/subjects" element={<Subject />} />
            <Route path="/question/:id" element={<Question />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
