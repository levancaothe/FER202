import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:9000/courses/${id}`)
      .then((res) => {
        setCourse(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSelectClass = (cls) => {
    setSelectedClass(cls);
    if (cls.slots && cls.slots.length > 0) {
      setSelectedSlot(cls.slots[0]);
    } else {
      setSelectedSlot(null);
    }
  };

  if (!course) return <div className="container mt-4">Loading...</div>;

  return (
    <div className="mx-5 my-4">
      <p>
        <span onClick={() => navigate("/")}>My Courses</span>
        &gt; {course.nameEn}_{course.nameVi}
      </p>

      <div className="d-flex mb-3">
        <button
          className="btn btn-success btn-sm me-2"
          onClick={() => navigate("/")}
        >
          ← Back
        </button>
        <button className="btn btn-danger btn-sm me-2">Delete question</button>
        <button className="btn btn-primary btn-sm me-2">OPEN</button>
      </div>

      <div className="mb-4">
        <h2>
          {course.nameEn}_{course.nameVi}
        </h2>
        <p className="text-muted fw-bold">
          {course.code} {selectedClass?.name}
        </p>
      </div>

      <Row>
        <Col md={4}>
          <div className="mb-4">
            <h5>Classes</h5>
            <div className="list-group">
              {course.classes?.map((cls) => (
                <button
                  key={cls.classId || cls.name}
                  className={`list-group-item list-group-item-action ${
                    selectedClass?.name === cls.name ? "active" : ""
                  }`}
                  onClick={() => handleSelectClass(cls)}
                >
                  {cls.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h5>Slots</h5>
            <div className="list-group">
              {selectedClass?.slots && selectedClass.slots.length > 0 ? (
                selectedClass.slots.map((slot) => (
                  <button
                    key={slot.slotNumber}
                    className={`list-group-item list-group-item d-flex align-items-center ${
                      selectedSlot?.slotNumber === slot.slotNumber
                        ? "bg-light border-primary"
                        : ""
                    }`}
                    onClick={() => setSelectedSlot(slot)}
                  >
                    <span className="badge bg-dark me-3 p-2">
                      {slot.slotNumber}
                    </span>
                    <div>
                      <div>{slot.date}</div>
                      <small className="text-muted">{slot.time}</small>
                    </div>
                  </button>
                ))
              ) : (
                <p className="text-muted">No slots</p>
              )}
            </div>
          </div>
        </Col>

        <Col md={8}>
          <h5>Class sessions</h5>
        </Col>
      </Row>
    </div>
  );
}

export default CourseDetail;
