import React, { useState } from "react";
import { Col, FormGroup, FormSelect, Row } from "react-bootstrap";
import { initialAttendances } from "../data";

function ClassList() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [bstatus, setBStatus] = useState("PRESENT");

  const st = Array.from(new Set(initialAttendances.map((c) => c.status)));

  const filtered = initialAttendances.filter(
    (p) =>
      (status === "" || p.status === status) &&
      p.name.toLowerCase().includes(search.toLowerCase()),
  );

  function formatDateToDDMMYYYY(dateStr) {
    if (!dateStr) return "N/A";

    const date = new Date(dateStr);
    if (isNaN(date)) return "Invalid date";

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${day}/${month}/${year}`;
  }

  return (
    <div className="mx-2">
      <Row>
        <Col md={6}>
          <h2>Hệ Thống Quản Lý Điểm Danh Lớp Học</h2>
        </Col>
        <Col md={6} className="text-end">
          <button
            className="btn btn-primary mb-3"
            //   onClick={() => navigate("/classes")}
          >
            Change Theme
          </button>
        </Col>
      </Row>

      <div
        style={{
          display: "flex",
        }}
      >
        <input
          type="text"
          placeholder="Tìm kiếm theo tên sinh viên"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "30%",
            marginRight: 10,
          }}
        />
        <div
          style={{
            width: "30%",
            marginRight: 10,
          }}
        >
          <FormGroup>
            <FormSelect
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
              }}
            >
              <option value="">Tất cả trạng thái</option>
              {st.map((s) => (
                <option key={s} value={s}>
                  {s === "PRESENT" ? "Có mặt (PRESENT)" : "Vắng mặt (ABSENT)"}
                </option>
              ))}
            </FormSelect>
          </FormGroup>
        </div>
        <button
          className="btn btn-danger mb-3"
          //   onClick={() => navigate("/classes")}
        >
          Reset Bộ Lọc
        </button>
      </div>

      <p>
        Tổng số bản ghi: <strong>{filtered.length}</strong>
        Có mặt:<strong>
          {initialAttendances.status === "PRESENT".length}
        </strong>{" "}
        Vắng mặt:{" "}
        <strong>{initialAttendances.status === "ABSENT".length}</strong> Tỷ lệ
        đi học:{" "}
        <strong>
          {(initialAttendances.status === "PRESENT".length) / filtered.length}
        </strong>
      </p>

      <table className="table table-striped border">
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã Lớp</th>
            <th>Tên Sinh Viên</th>
            <th>Ngày</th>
            <th>Trạng Thái</th>
            <th>Thao Tác</th>
          </tr>
        </thead>
        <tbody>
          {filtered?.map((init) => (
            <tr key={init.id}>
              <td>{init.id}</td>
              <td>{init.classId}</td>
              <td>{init.name}</td>
              <td>{formatDateToDDMMYYYY(init.date)}</td>
              <td>
                <button
                  className="btn btn-primary mb-3"
                  // onClick={() => setBStatus}
                  style={{
                    backgroundColor: init.status === "PRESENT" ? "blue" : "red",
                  }}
                >
                  {init.status === "PRESENT" ? "PRESENT" : "ABSENT"}
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger mb-3"
                  //   onClick={() => navigate("/classes")}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClassList;
