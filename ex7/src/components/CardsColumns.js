import React from 'react';
import carImage from '../assets/car.png';

function CardsColumns() {
  const cardsData = [
    {
      id: 1,
      bgClass: 'card-blue',
      text: 'Some text inside the first card'
    },
    {
      id: 2,
      bgClass: 'card-yellow',
      text: 'Some text inside the first card'
    },
    {
      id: 3,
      bgClass: 'card-red',
      text: 'Some text inside the first card'
    }
  ];

  return (
    <div className="container-fluid px-4 py-3">
      <h1 className="display-6 fw-normal mb-3 text-dark">Cards Columns</h1>

      <div className="row g-4">
        {cardsData.map((card) => (
          <div key={card.id} className="col-12 col-md-4">
            <div className={`card custom-colored-card ${card.bgClass} p-3 h-100 border-0`}>
              <div className="card-image-box bg-white p-2 d-flex align-items-center justify-content-center mb-2 overflow-hidden">
                <div className="car-crop-wrapper">
                  <img src={carImage} alt="Car" className="car-cropped-img" />
                </div>
              </div>
              <div className="text-center py-1">
                <span className="card-text-custom">{card.text}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsColumns;
