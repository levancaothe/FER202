import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState([]);
  useEffect(() => {
    axios
      .get(" http://localhost:9000/courses")
      .then((res) => setCourse(res.data));
  }, []);
  //   useEffect(() => {
  //     axios
  //       .get(" http://localhost:9000/courses/" + id)
  //       .then((res) => setCourse(res.data));
  //   }, []);
  return (
    <div className="mx-5">
      <div className="mt-2"
        style={{
          display: "flex",
        }}
      >
        <button
          className="btn btn-success btn-sm me-3"
          onClick={() => navigate("/")}
        >
          ← Back
        </button>
        <button className="btn btn-danger btn-sm me-3">Delete Question</button>
        <button className="btn btn-primary btn-sm me-3">OPEN</button>
      </div>
      {course?.map((c) => (
        <div>
          <p>My Course {c.nameVi}</p>
          <h2>{c.nameVi}</h2>

          <p>
            <strong>
              {c.code} - {c.classes.name}
            </strong>
          </p>
        </div>
      ))}

      <Row>
        <Col md={4}>abc</Col>
        <Col md={8}>abc</Col>
      </Row>
    </div>
  );
}

export default CourseDetail;
