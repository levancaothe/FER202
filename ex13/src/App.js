import React, { useState, useCallback } from 'react';
import UserPosts from './components/UserPosts';
import CountdownTimer from './components/CountdownTimer';
import WindowSize from './components/WindowSize';
import ValidatedInput from './components/ValidatedInput';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [userId, setUserId] = useState(1);

  // Validation function for Exercise 4
  const minLengthValidation = useCallback((val) => {
    return val.trim().length >= 6;
  }, []);

  const tabs = [
    { id: 'all', label: 'All Exercises' },
    { id: 'ex1', label: '1. User Posts' },
    { id: 'ex2', label: '2. Countdown Timer' },
    { id: 'ex3', label: '3. Window Size' },
    { id: 'ex4', label: '4. Input Validation' }
  ];

  return (
    <div className="bg-light min-vh-100 py-4">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="fw-bold text-primary display-5">Exercise 13: React Hook (useEffect)</h1>
          <p className="lead text-secondary">
            Demonstrating side effects management in functional React components
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
          <div className="col-lg-10">
            {(activeTab === 'all' || activeTab === 'ex1') && (
              <div>
                <div className="card shadow-sm p-3 mb-3 bg-white">
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                    <label htmlFor="userSelect" className="fw-bold mb-0 text-dark">
                      Select User ID (Triggers useEffect refetch):
                    </label>
                    <select
                      id="userSelect"
                      className="form-select w-auto"
                      value={userId}
                      onChange={(e) => setUserId(Number(e.target.value))}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
                        <option key={id} value={id}>
                          User ID {id}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <UserPosts userId={userId} />
              </div>
            )}

            {(activeTab === 'all' || activeTab === 'ex2') && <CountdownTimer initialValue={15} />}
            {(activeTab === 'all' || activeTab === 'ex3') && <WindowSize />}
            {(activeTab === 'all' || activeTab === 'ex4') && (
              <ValidatedInput
                validationFunction={minLengthValidation}
                errorMessage="Input must be at least 6 characters long."
              />
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-muted mt-5 pt-3 border-top">
          <small>FER202 - Exercise 13: React useEffect Hook Solutions</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
