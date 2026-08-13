import React, { useState } from 'react';
import HeaderNavbar from './components/HeaderNavbar';
import BannerCarousel from './components/BannerCarousel';
import ProductSection from './components/ProductSection';
import DetailModal from './components/DetailModal';
import './App.css';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelectDetail = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
      <HeaderNavbar />
      <BannerCarousel />
      <main className="flex-grow-1">
        <ProductSection onSelectDetail={handleSelectDetail} />
      </main>
      <DetailModal product={selectedProduct} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
