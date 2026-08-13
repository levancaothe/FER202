import React, { useState } from 'react';

function FlightBookingForm() {
  const [fullname, setFullname] = useState('');
  const [address, setAddress] = useState('');
  const [fromCity, setFromCity] = useState('Hà nội');
  const [toCity, setToCity] = useState('Hà nội');
  const [isDi, setIsDi] = useState(false);
  const [isVe, setIsVe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Đặt vé thành công!\nHọ tên: ${fullname}\nĐịa chỉ: ${address}\nĐi từ: ${fromCity} - Đến: ${toCity}\nChiều: ${isDi ? 'Đi ' : ''}${isVe ? 'Về' : ''}`);
  };

  return (
    <div className="container py-3" style={{ maxWidth: '650px' }}>
      <h1 className="display-5 mb-4 text-dark font-weight-normal">Form đặt vé máy bay</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label text-secondary mb-1">Họ tên</label>
          <div className="input-group">
            <span className="input-group-text bg-light text-secondary">
              <i className="fa-regular fa-user"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Họ tên"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
            <span className="input-group-text bg-light text-secondary">vnđ</span>
          </div>
          <div className="form-text text-muted fs-7 mt-1">Phải nhập 5 ký tự, in hoa....</div>
        </div>

        <div className="mb-3">
          <label className="form-label text-secondary mb-1">Địa chỉ</label>
          <input
            type="text"
            className="form-control"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <div className="form-text text-muted fs-7 mt-1">Phải nhập 5 ký tự, in hoa....</div>
        </div>

        <div className="row g-3 mb-3">
          <div className="col-6">
            <label className="form-label text-secondary mb-1">Đi từ</label>
            <select
              className="form-select"
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
            >
              <option value="Hà nội">Hà nội</option>
              <option value="Hồ Chí Minh">Hồ Chí Minh</option>
              <option value="Đà Nẵng">Đà Nẵng</option>
              <option value="Nha Trang">Nha Trang</option>
            </select>
          </div>

          <div className="col-6">
            <label className="form-label text-secondary mb-1">Đến</label>
            <select
              className="form-select"
              value={toCity}
              onChange={(e) => setToCity(e.target.value)}
            >
              <option value="Hà nội">Hà nội</option>
              <option value="Hồ Chí Minh">Hồ Chí Minh</option>
              <option value="Đà Nẵng">Đà Nẵng</option>
              <option value="Nha Trang">Nha Trang</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="form-label text-secondary mb-2">Chọn chiều đi (Khứ hồi)</label>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              id="chiouDi"
              checked={isDi}
              onChange={(e) => setIsDi(e.target.checked)}
            />
            <label className="form-check-label text-secondary" htmlFor="chiouDi">
              Đi
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="chiouVe"
              checked={isVe}
              onChange={(e) => setIsVe(e.target.checked)}
            />
            <label className="form-check-label text-secondary" htmlFor="chiouVe">
              Về
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-100 py-2 fs-5">
          Đặt vé
        </button>
      </form>
    </div>
  );
}

export default FlightBookingForm;
