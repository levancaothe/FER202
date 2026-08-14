import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { CartProvider, useCart } from './context/CartContext';
import ThemeComponent from './components/ThemeComponent';
import DishesList from './components/DishesList';
import Cart from './components/Cart';
import './App.css';

// Main App Content wrapped inside Providers
const AppContent = () => {
  const { theme } = useTheme();
  const { cartCount, totalValue } = useCart();

  return (
    <div
      className="min-vh-100 py-4 transition-bg"
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}
    >
      <div className="container">
        {/* Header Navbar */}
        <header className="d-flex justify-content-between align-items-center mb-4 p-3 rounded shadow-sm bg-white text-dark">
          <div>
            <h2 className="fw-bold text-primary mb-0">Exercise 14: useContext Hook</h2>
            <small className="text-muted">Global State Management with Theme & Shopping Cart</small>
          </div>
          <div className="d-flex align-items-center gap-3">
            <div className="badge bg-primary fs-6 p-2">
              🛒 Cart: <strong>{cartCount}</strong> items (${totalValue.toFixed(2)})
            </div>
          </div>
        </header>

        {/* Exercise 1: Theme Switcher */}
        <ThemeComponent />

        {/* Exercise 2 & 3: Dishes Menu & Shopping Cart */}
        <DishesList />
        <Cart />

        {/* Footer */}
        <footer className="text-center mt-5 pt-3 border-top opacity-75">
          <small>FER202 - Exercise 14: React useContext Hook Solutions</small>
        </footer>
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
