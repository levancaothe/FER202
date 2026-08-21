import React, { useEffect, useState } from "react";
import { Button, Card, Form, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("fullnamesv@fpt.edu.vn");
  const [password, setPassword] = useState("123");
  const [error, setError] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("examUser");
    if (user) {
      navigate("/subjects");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.get("http://localhost:9000/accounts");
      const account = response.data.find(
        (item) =>
          item.email.toLowerCase() === email.toLowerCase() &&
          String(item.password) === String(password),
      );

      if (!account) {
        setError("Email hoặc mật khẩu không đúng.");
        return;
      }

      if (account.status?.toLowerCase() !== "active") {
        setError("Tài khoản của bạn đang không hoạt động.");
        return;
      }

      localStorage.setItem("examUser", JSON.stringify(account));
      navigate("/subjects");
    } catch (err) {
      setError("Không thể kết nối tới server. Vui lòng thử lại.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <Card style={{ width: "420px" }} className="shadow-sm">
        <Card.Body>
          <Card.Title className="text-center mb-4">
            <strong>Sign In</strong>
          </Card.Title>

          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button type="submit" className="w-100" variant="secondary">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
