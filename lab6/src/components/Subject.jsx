import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Subject() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("examUser") || "null");
    if (!storedUser) {
      navigate("/login");
      return;
    }

    setUser(storedUser);

    axios
      .get("http://localhost:9000/subjects")
      .then((response) => setSubjects(response.data))
      .catch((err) => console.log(err));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("examUser");
    navigate("/login");
  };

  const filtered = subjects.filter(
    (subject) =>
      subject.id.toLowerCase().includes(search.toLowerCase()) ||
      subject.name.toLowerCase().includes(search.toLowerCase()),
  );

  if (!user) return null;

  return (
    <div className="mx-5 my-4">
      <Card className="mb-3 ms-2 p-3">
        <h3>Hello {user.email}</h3>
      </Card>

      <Row className="align-items-center mb-3">
        <Col md={6}>
          <h3>Danh sách môn học</h3>
        </Col>
        <Col md={6} className="text-end">
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        </Col>
      </Row>

      <input
        type="text"
        placeholder="Tìm kiếm môn học..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "30%",
          padding: "8px",
          marginBottom: "15px",
        }}
      />

      <table border={1} className="table table-striped">
        <thead>
          <tr>
            <th>Mã môn</th>
            <th>Tên môn học</th>
            <th>Số lượng câu hỏi</th>
            <th>Tools</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((subject) => (
            <tr key={subject.id}>
              <td>{subject.id}</td>
              <td>{subject.name}</td>
              <td>{subject.questionsCount}</td>
              <td>
                <div className="d-flex gap-2">
                  <Link to={`/question/${subject.id}`} className="btn btn-primary">
                    Truy cập bộ câu hỏi
                  </Link>
                  <Button variant="secondary">Thông tin</Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Subject;
