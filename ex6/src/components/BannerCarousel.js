import React from 'react';

function BannerCarousel() {
  return (
    <div
      id="heroCarousel"
      className="carousel slide mb-4"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <div
            className="carousel-slide-placeholder d-flex align-items-center justify-content-center"
            style={{
              height: '420px',
              backgroundColor: '#cccccc',
              color: '#888888',
              fontSize: '4.5rem',
              fontWeight: '300',
              userSelect: 'none'
            }}
          >
            1920 x 530
          </div>
        </div>

        <div className="carousel-item">
          <div
            className="carousel-slide-placeholder d-flex align-items-center justify-content-center"
            style={{
              height: '420px',
              backgroundColor: '#b8b8b8',
              color: '#666666',
              fontSize: '4.5rem',
              fontWeight: '300',
              userSelect: 'none'
            }}
          >
            1920 x 530 (Slide 2)
          </div>
        </div>

        <div className="carousel-item">
          <div
            className="carousel-slide-placeholder d-flex align-items-center justify-content-center"
            style={{
              height: '420px',
              backgroundColor: '#d8d8d8',
              color: '#777777',
              fontSize: '4.5rem',
              fontWeight: '300',
              userSelect: 'none'
            }}
          >
            1920 x 530 (Slide 3)
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default BannerCarousel;
