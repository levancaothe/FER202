import React from 'react';
import PizzaNavbar from './components/PizzaNavbar';
import PizzaCarousel from './components/PizzaCarousel';
import PizzaMenu from './components/PizzaMenu';
import BookingForm from './components/BookingForm';
import './App.css';

function App() {
  return (
    <div className="bg-dark text-white min-vh-100">
      <PizzaNavbar />
      <PizzaCarousel />
      <PizzaMenu />
      <BookingForm />
    </div>
  );
}

export default App;
