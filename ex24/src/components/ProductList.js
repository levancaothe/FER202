import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductList = () => {
  const products = useSelector((state) => state.cartState.products);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 style={{ borderBottom: '2px solid #0d6efd', paddingBottom: '10px' }}>Product List</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map((product) => (
          <div 
            key={product.id} 
            style={{ 
              border: '1px solid #ddd', 
              borderRadius: '8px', 
              padding: '15px', 
              width: '280px',
              backgroundColor: '#ffffff',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <h3 style={{ margin: '0 0 8px 0', color: '#333' }}>{product.name}</h3>
              <p style={{ color: '#6c757d', fontSize: '13px', margin: '0 0 8px 0' }}>ID: {product.id}</p>
              <p style={{ fontSize: '14px', margin: '0 0 10px 0' }}>{product.description}</p>
              <p style={{ fontWeight: 'bold', color: '#198754', fontSize: '16px', margin: '0 0 10px 0' }}>
                ${product.price}
              </p>
              <div style={{ marginBottom: '15px' }}>
                <span style={{ fontSize: '12px', color: '#666', fontWeight: 'bold' }}>Catalogs: </span>
                {product.catalogs.map((cat, idx) => (
                  <span 
                    key={idx} 
                    style={{ 
                      backgroundColor: '#e9ecef', 
                      fontSize: '12px', 
                      padding: '2px 6px', 
                      borderRadius: '4px', 
                      marginRight: '5px' 
                    }}
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={() => dispatch(addToCart(product))}
              style={{
                backgroundColor: '#0d6efd',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold',
                width: '100%'
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
