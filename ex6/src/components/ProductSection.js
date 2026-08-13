import React from 'react';
import ProductCard from './ProductCard';

const sampleProducts = [
  {
    id: 1,
    name: 'Product',
    originalPrice: '100.000 vnd',
    salePrice: '80.000 vnd',
    onSale: false,
    description: 'Chi tiết sản phẩm 1.'
  },
  {
    id: 2,
    name: 'Product',
    originalPrice: '100.000 vnd',
    salePrice: '80.000 vnd',
    onSale: false,
    description: 'Chi tiết sản phẩm 2.'
  },
  {
    id: 3,
    name: 'Product',
    originalPrice: '100.000 vnd',
    salePrice: '80.000 vnd',
    onSale: false,
    description: 'Chi tiết sản phẩm 3.'
  },
  {
    id: 4,
    name: 'Product',
    originalPrice: '100.000 vnd',
    salePrice: '80.000 vnd',
    onSale: true,
    description: 'Chi tiết sản phẩm 4.'
  }
];

function ProductSection({ onSelectDetail }) {
  return (
    <section className="container my-5">
      <div className="mb-4">
        <h2 className="text-secondary fw-normal tracking-wide text-uppercase mb-1" style={{ letterSpacing: '1px' }}>
          NEW PRODUCT
        </h2>
        <p className="text-muted fs-7 mb-0">List product description</p>
      </div>

      <div className="row g-4">
        {sampleProducts.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-3">
            <ProductCard
              product={product}
              onSelectDetail={onSelectDetail}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
