import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import DishList from './components/DishList';
import DishDetail from './components/DishDetail';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="/dishes" element={<DishList />} />
          <Route path="/dishes/:id" element={<DishDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
