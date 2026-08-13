import React, { useState } from "react";

import smallLogo from "../assets/logo.jpg";
import banner from "../assets/hero.jpg";

import student1 from "../assets/student1.jpg";
import student2 from "../assets/student2.jpg";
import student3 from "../assets/student3.jpg";
import student4 from "../assets/student4.jpg";

const students = [
  {
    id: "DE160182",
    name: "Nguyễn Hữu Quốc Khánh",
    city: "DaNang",
    image: student1,
  },
  {
    id: "DE160377",
    name: "Choy Vĩnh Thiện",
    city: "QuangNam",
    image: student2,
  },
  {
    id: "DE160547",
    name: "Đỗ Nguyên Phúc",
    city: "QuangNam",
    image: student3,
  },
  {
    id: "DE170049",
    name: "Lê Hoàng Minh",
    city: "DaNang",
    image: student4,
  },
];

function StudentCard({ student }) {
  const [status, setStatus] = useState("");

  const handleSubmit = () => {
    if (!status) {
      alert(`Please select Absent or Present for ${student.id}`);
      return;
    }
    alert(`${student.id}: ${status}`);
  };

  return (
    <div className="card student-card h-100">
      <img
        src={student.image}
        className="card-img-top student-image"
        alt={student.name}
      />
      <div className="card-body text-center d-flex flex-column align-items-center">
        <p className="student-id fw-bold mb-2">{student.studentId || student.id}</p>

        <div className="student-info w-100 d-flex justify-content-between px-3 mb-2">
          <span>{student.name}</span>
          <span>{student.city}</span>
        </div>

        <div className="attendance-row w-100 d-flex justify-content-around px-4 my-2">
          <label className="d-flex align-items-center gap-1 cursor-pointer">
            <input
              type="radio"
              name={`attendance-${student.id}`}
              checked={status === "Absent"}
              onChange={() => setStatus("Absent")}
            />
            <span>Absent</span>
          </label>
          <label className="d-flex align-items-center gap-1 cursor-pointer">
            <input
              type="radio"
              name={`attendance-${student.id}`}
              checked={status === "Present"}
              onChange={() => setStatus("Present")}
            />
            <span>Present</span>
          </label>
        </div>

        <button
          className="btn btn-warning submit-btn mt-2 px-4 text-white font-weight-bold"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

function Exercise5() {
  return (
    <div className="students-page">
      <header className="students-header">
        <div className="students-header-inner">
          <div className="brand-block">
            <img src={smallLogo} alt="FPT Education" />
          </div>

          <nav className="students-nav">
            <a href="#home">
              <i className="fa-solid fa-house me-1"></i> Trang chủ
            </a>
            <a href="#academics">
              <i className="fa-solid fa-circle-info me-1"></i> Ngành học
            </a>
            <a href="#admission">
              <i className="fa-solid fa-id-card me-1"></i> Tuyển sinh
            </a>
            <a href="#students">
              <i className="fa-solid fa-list me-1"></i> Sinh viên
            </a>
          </nav>

          <div className="search-box">
            <label htmlFor="search" className="me-2 fw-normal">
              Search:
            </label>
            <input id="search" type="text" className="form-control form-control-sm d-inline-block" style={{ width: '180px' }} />
          </div>
        </div>

        <div className="banner-wrap">
          <img
            src={banner}
            alt="FPT students"
            className="students-banner"
          />
        </div>
      </header>

      <main className="container students-content my-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb students-breadcrumb">
            <li className="breadcrumb-item">
              <a href="#home">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Students
            </li>
          </ol>
        </nav>

        <h2 className="students-title text-center mb-4">Students Detail</h2>

        <div className="row g-4 students-grid">
          {students.map((student) => (
            <div className="col-md-6" key={student.id}>
              <StudentCard student={student} />
            </div>
          ))}
        </div>
      </main>

      <footer className="students-footer">
        <div className="container footer-inner d-flex justify-content-between align-items-center py-3">
          <div className="address-block">
            <h4 className="fw-bold mb-2">Our Address</h4>
            <p className="mb-1">Khu đô thị FPT Đà Nẵng</p>
            <p className="mb-1">
              <i className="fa-solid fa-phone me-2"></i>+84023111111
            </p>
            <p className="mb-1">
              <i className="fa-solid fa-fax me-2"></i>+852 8765 4321
            </p>
            <p className="mb-1">
              <i className="fa-solid fa-envelope me-2"></i>fptudn@fpt.edu.vn
            </p>
          </div>

          <div className="social-icons fs-3">
            <a href="#google" className="text-dark me-3"><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#facebook" className="text-dark me-3"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#linkedin" className="text-dark me-3"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#twitter" className="text-dark me-3"><i className="fa-brands fa-twitter"></i></a>
            <a href="#youtube" className="text-dark me-3"><i className="fa-brands fa-youtube"></i></a>
            <a href="#mail" className="text-dark"><i className="fa-solid fa-envelope"></i></a>
          </div>
        </div>

        <div className="copyright text-center py-2 border-top border-secondary-subtle fs-6">
          © Copyright 2023
        </div>
      </footer>
    </div>
  );
}

export default Exercise5;