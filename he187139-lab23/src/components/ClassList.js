import React, { useState, useReducer, useMemo, useEffect } from "react";
import { Col, FormGroup, FormSelect, Row } from "react-bootstrap";
import { initialAttendances } from "../data";

const attendanceReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_STATUS":
      return state.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              status: item.status === "PRESENT" ? "ABSENT" : "PRESENT",
            }
          : item
      );
    case "DELETE_ATTENDANCE":
      return state.filter((item) => item.id !== action.payload);
    case "RESET":
      return initialAttendances;
    default:
      return state;
  }
};

function ClassList() {
  const [attendances, dispatch] = useReducer(
    attendanceReducer,
    initialAttendances,
    (initial) => {
      try {
        const item = window.localStorage.getItem("attendances");
        return item ? JSON.parse(item) : initial;
      } catch (error) {
        return initial;
      }
    }
  );

  useEffect(() => {
    try {
      window.localStorage.setItem("attendances", JSON.stringify(attendances));
    } catch (error) {
      console.error("Error saving attendances to localStorage:", error);
    }
  }, [attendances]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const st = useMemo(() => {
    return Array.from(new Set(attendances.map((c) => c.status)));
  }, [attendances]);

  const filtered = useMemo(() => {
    return attendances.filter(
      (p) =>
        (status === "" || p.status === status) &&
        p.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [attendances, status, search]);

  const presentCount = useMemo(() => {
    return filtered.filter((item) => item.status === "PRESENT").length;
  }, [filtered]);

  const absentCount = useMemo(() => {
    return filtered.filter((item) => item.status === "ABSENT").length;
  }, [filtered]);

  const attendanceRate = useMemo(() => {
    if (filtered.length === 0) return 0;
    return Number(((presentCount / filtered.length) * 100).toFixed(2));
  }, [presentCount, filtered.length]);

  function formatDateToDDMMYYYY(dateStr) {
    if (!dateStr) return "N/A";

    const date = new Date(dateStr);
    if (isNaN(date)) return "Invalid date";

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${day}/${month}/${year}`;
  }

  const handleResetFilter = () => {
    setSearch("");
    setStatus("");
  };

  return (
    <div className="mx-2">
      <Row>
        <Col md={6}>
          <h2>Hệ Thống Quản Lý Điểm Danh Lớp Học</h2>
        </Col>
        <Col md={6} className="text-end">
          <button
            className="btn btn-primary mb-3"
            // onClick={() => navigate("/classes")}
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
          onClick={handleResetFilter}
        >
          Reset Bộ Lọc
        </button>
      </div>

      <p>
        Tổng số bản ghi: <strong>{filtered.length}</strong> Có mặt:
        <strong>{presentCount}</strong> Vắng mặt:{" "}
        <strong>{absentCount}</strong> Tỷ lệ đi học:{" "}
        <strong>{attendanceRate}%</strong>
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
                  onClick={() =>
                    dispatch({ type: "TOGGLE_STATUS", payload: init.id })
                  }
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
                  onClick={() =>
                    dispatch({ type: "DELETE_ATTENDANCE", payload: init.id })
                  }
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
