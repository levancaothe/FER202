import React from 'react';

function ProductCard({ product, onSelectDetail }) {
  return (
    <div className="card h-100 product-card border position-relative overflow-hidden shadow-sm">
      {product.onSale && (
        <div className="sale-ribbon-wrapper">
          <div className="sale-ribbon">Sale</div>
        </div>
      )}

      <div className="product-image-container d-flex align-items-center justify-content-center bg-light border-bottom">
        <span className="product-image-placeholder text-secondary fs-4 fw-light">
          280 x 280
        </span>
      </div>

      <div className="card-body d-flex flex-column justify-content-between p-3">
        <div>
          <h5 className="card-title text-secondary fs-6 mb-2 fw-normal">
            {product.name || 'Product'}
          </h5>

          <div className="d-flex align-items-center justify-content-between mb-3">
            <span className="text-muted text-decoration-line-through fs-7 me-2">
              {product.originalPrice || '100.000 vnd'}
            </span>
            <span className="text-warning fw-bold fs-7" style={{ color: '#ff8c00' }}>
              {product.salePrice || '80.000 vnd'}
            </span>
          </div>
        </div>

        <div className="d-flex align-items-center gap-2">
          <button
            className="btn btn-primary cart-btn d-flex align-items-center justify-content-center"
            title="Add to cart"
            style={{ backgroundColor: '#1e5288', borderColor: '#1e5288', padding: '6px 14px' }}
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </button>

          <button
            className="btn btn-outline-secondary detail-btn flex-grow-1"
            onClick={() => onSelectDetail(product)}
            style={{ fontSize: '0.85rem', padding: '6px 12px' }}
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
