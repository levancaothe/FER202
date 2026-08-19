import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Col, FormGroup, FormSelect, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Course() {
  const [course, setCourse] = useState([]);
  const [search, setSearch] = useState("");
  const [semester, setSemester] = useState("");

  const result = [...new Set(course.map((item) => item.semester))];
  const handleFilter = (e) => {
    setCourse(e.target.value);
  };

  const handleRefresh = () => {
    setSearch("");
    setSemester("");
    axios
      .get(" http://localhost:9000/courses")
      .then((res) => setCourse(res.data));
  };

  const filtered = course.filter(
    (p) =>
      (semester === "" || p.semester === course) &&
      (p.code.toLowerCase().includes(search.toLowerCase()) ||
        p.nameEn.toLowerCase().includes(search.toLowerCase()) ||
        p.nameVi.toLowerCase().includes(search.toLowerCase())),
  );

  useEffect(() => {
    axios
      .get(" http://localhost:9000/courses")
      .then((res) => setCourse(res.data));
  }, []);

  return (
    <div className="mx-5">
      <div
        className="card"
        style={{
          borderRadius: 30,
          width: "26%",
        }}
      >
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="/">
                  Courses
                </a>
                <a className="nav-link" href="#">
                  Projects
                </a>
                <a className="nav-link" href="#">
                  Review
                </a>
                <a className="nav-link">tittle Confirmation</a>
                <a className="nav-link">Reference</a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <Row>
        <Col md={6}>
          <p>Wellcome back Lecturer</p>
          <h1>My Courses</h1>
          <input
            type="text"
            placeholder="Search Courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "20%",
              padding: "8px",
              marginBottom: "15px",
            }}
          />
        </Col>
        <Col
          style={{
            marginLeft: "20%",
          }}
        >
          <p>Semester</p>
          <div className="d-flex align-items-center gap-2">
            <FormGroup
              style={{
                width: "40%",
              }}
            >
              <FormSelect value={course} onChange={handleFilter}>
                {/* <option value=""></option> */}
                {result.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b}
                  </option>
                ))}
              </FormSelect>
            </FormGroup>
            <Button variant="outline-secondary" onClick={handleRefresh}>
              Refresh
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        {filtered?.map((c) => (
          <Col md={3}>
            <Card className="card shadow-sm mb-3">
              <Card.Body>
                <div>
                  <Row>
                    <Col md={6}>
                      <div
                        className="card text-center"
                        style={{
                          width: 40,
                        }}
                      >
                        {c.badge}
                      </div>
                    </Col>
                    <Col md={6} className="text-end">
                      <p>{c.category}</p>
                    </Col>
                  </Row>
                  <p>{c.code}</p>
                  <p>
                    <strong>{c.nameEn}</strong>
                  </p>
                  <p>{c.nameVi}</p>
                  <hr />
                  <Row>
                    <Col md={6}>
                      <Link to={`/detail/${c.id}`} className="btn">
                        → Get stated
                      </Link>
                    </Col>
                    <Col md={6} className="text-end">
                      <Link to={`/detail/${c.id}`} className="btn">
                        →
                      </Link>
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Course;
