import React from 'react';

function DetailModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {product.name} {product.onSale && <span className="badge bg-warning text-dark ms-2">Sale</span>}
            </h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body text-center">
            <div className="bg-light p-4 rounded mb-3 text-secondary fs-4 border">
              280 x 280
            </div>
            <p className="lead">{product.description}</p>
            <div className="d-flex justify-content-center align-items-center gap-3">
              <span className="text-muted text-decoration-line-through">Giá gốc: {product.originalPrice}</span>
              <span className="fw-bold fs-5 text-warning" style={{ color: '#ff8c00' }}>Giá bán: {product.salePrice}</span>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailModal;
