import React, { useState } from 'react';
import Counter from './components/Counter';
import ControlledInput from './components/ControlledInput';
import ToggleVisibility from './components/ToggleVisibility';
import TodoList from './components/TodoList';
import ColorSwitcher from './components/ColorSwitcher';
import SearchFilter from './components/SearchFilter';
import DragAndDropList from './components/DragAndDropList';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Exercises' },
    { id: 'ex1', label: '1. Counter' },
    { id: 'ex2', label: '2. Controlled Input' },
    { id: 'ex3', label: '3. Toggle Visibility' },
    { id: 'ex4', label: '4. Todo List' },
    { id: 'ex5', label: '5. Color Switcher' },
    { id: 'ex6', label: '6. Search Filter' },
    { id: 'ex7', label: '7. Drag & Drop' }
  ];

  return (
    <div className="bg-light min-vh-100 py-4">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="fw-bold text-primary display-5">Exercise 12: React Hook (useState)</h1>
          <p className="lead text-secondary">
            Demonstrating state management in functional React components
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
            {(activeTab === 'all' || activeTab === 'ex1') && <Counter />}
            {(activeTab === 'all' || activeTab === 'ex2') && <ControlledInput />}
            {(activeTab === 'all' || activeTab === 'ex3') && <ToggleVisibility />}
            {(activeTab === 'all' || activeTab === 'ex4') && <TodoList />}
            {(activeTab === 'all' || activeTab === 'ex5') && <ColorSwitcher />}
            {(activeTab === 'all' || activeTab === 'ex6') && <SearchFilter />}
            {(activeTab === 'all' || activeTab === 'ex7') && <DragAndDropList />}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-muted mt-5 pt-3 border-top">
          <small>FER202 - Exercise 12: React useState Hook Solutions</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
