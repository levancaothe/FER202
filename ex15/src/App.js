import React, { useState } from 'react';
import Counter from './components/Counter';
import QuestionBank from './components/QuestionBank';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Exercises' },
    { id: 'ex1', label: '1. Simple Counter' },
    { id: 'ex2', label: '2. Question Bank Quiz' }
  ];

  return (
    <div className="bg-light min-vh-100 py-4">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="fw-bold text-primary display-5">Exercise 15: React Hook (useReducer)</h1>
          <p className="lead text-secondary">
            Managing complex state and state transitions in functional React components
          </p>
        </div>

        {/* Navigation Tabs */}
        <ul className="nav nav-pills nav-fill mb-4 bg-white p-2 rounded shadow-sm">
          {tabs.map((tab) => (
            <li className="nav-item" key={tab.id}>
              <button
                className={`nav-link fw-semibold ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Components Display */}
        <div className="row justify-content-center">
          <div className="col-lg-9">
            {(activeTab === 'all' || activeTab === 'ex1') && <Counter />}
            {(activeTab === 'all' || activeTab === 'ex2') && <QuestionBank />}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-muted mt-5 pt-3 border-top">
          <small>FER202 - Exercise 15: React useReducer Hook Solutions</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
