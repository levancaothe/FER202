import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row, Table } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";

function Question() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [subject, setSubject] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [formData, setFormData] = useState({
    content: "",
    options: ["", "", "", ""],
    correctAnswer: "",
  });

  const fetchData = async () => {
    const storedUser = JSON.parse(localStorage.getItem("examUser") || "null");
    if (!storedUser) {
      navigate("/login");
      return;
    }

    try {
      const [subjectRes, questionRes] = await Promise.all([
        axios.get(`http://localhost:9000/subjects/${id}`),
        axios.get(`http://localhost:9000/questions`),
      ]);

      setSubject(subjectRes.data);
      setQuestions(
        questionRes.data.filter((question) => question.subjectId === id),
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id, navigate]);

  const handleOpenCreateModal = () => {
    setEditingQuestion(null);
    setFormData({
      content: "",
      options: ["", "", "", ""],
      correctAnswer: "",
    });
    setShowModal(true);
  };

  const handleOpenEditModal = (question) => {
    setEditingQuestion(question);
    setFormData({
      content: question.content,
      options: question.options,
      correctAnswer: question.correctAnswer,
    });
    setShowModal(true);
  };

  const handleInputChange = (index, value) => {
    const newOptions = [...formData.options];
    newOptions[index] = value;
    setFormData({ ...formData, options: newOptions });
  };

  const handleSubmit = async () => {
    const payload = {
      subjectId: id,
      content: formData.content,
      options: formData.options,
      correctAnswer: formData.correctAnswer,
    };

    try {
      if (editingQuestion) {
        await axios.put(
          `http://localhost:9000/questions/${editingQuestion.id}`,
          payload,
        );
      } else {
        await axios.post("http://localhost:9000/questions", payload);
      }

      setShowModal(false);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (questionId) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa câu hỏi này?")) return;

    try {
      await axios.delete(`http://localhost:9000/questions/${questionId}`);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  if (!subject) {
    return <div className="container mt-4">Loading...</div>;
  }

  return (
    <div className="mx-5 my-4">
      <h1>
        Bộ câu hỏi môn: {subject.name} ({subject.id})
      </h1>

      <Row className="align-items-center my-3">
        <Col md={6}>
          <p className="mb-0">Tổng số câu hỏi: {questions.length}</p>
        </Col>
        <Col md={6} className="text-end">
          <Button variant="success" onClick={handleOpenCreateModal} className="me-2">
            + Thêm câu hỏi mới
          </Button>
          <Link to="/subjects" className="btn btn-warning">
            Quay lại danh sách môn
          </Link>
        </Col>
      </Row>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nội dung câu hỏi</th>
            <th>Các đáp án</th>
            <th>Đáp án đúng</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question, index) => (
            <tr key={question.id}>
              <td>{index + 1}</td>
              <td>{question.content}</td>
              <td>{question.options?.join(", ")}</td>
              <td>{question.correctAnswer}</td>
              <td>
                <div className="d-flex gap-2">
                  <Button size="sm" variant="warning" onClick={() => handleOpenEditModal(question)}>
                    Sửa
                  </Button>
                  <Button size="sm" variant="danger" onClick={() => handleDelete(question.id)}>
                    Xóa
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {editingQuestion ? "Chỉnh sửa câu hỏi" : "Thêm câu hỏi mới"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nội dung câu hỏi</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
              />
            </Form.Group>

            {[0, 1, 2, 3].map((index) => (
              <Form.Group className="mb-2" key={index}>
                <Form.Label>Đáp án {index + 1}</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.options[index] || ""}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
              </Form.Group>
            ))}

            <Form.Group className="mb-3">
              <Form.Label>Đáp án đúng</Form.Label>
              <Form.Control
                type="text"
                value={formData.correctAnswer}
                onChange={(e) =>
                  setFormData({ ...formData, correctAnswer: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Hủy
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            {editingQuestion ? "Lưu thay đổi" : "Thêm mới"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Question;
