import React, { useState } from 'react';
import ProfileCard from './components/ProfileCard';
import HelloWorld from './components/HelloWorld';
import CounterApp from './components/CounterApp';
import SimpleCard from './components/SimpleCard';
import SimpleWebsite from './components/SimpleWebsite';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('profile');

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileCard />;
      case 'hello':
        return <HelloWorld />;
      case 'counter':
        return <CounterApp />;
      case 'card':
        return <SimpleCard />;
      case 'website':
        return <SimpleWebsite />;
      default:
        return <ProfileCard />;
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      <nav className="navbar navbar-dark bg-dark px-3 py-2 shadow-sm">
        <span className="navbar-brand fw-bold">Exercise 9 - React Component</span>
        <div className="d-flex gap-2 flex-wrap">
          <button
            className={`btn btn-sm ${activeTab === 'profile' ? 'btn-warning' : 'btn-outline-light'}`}
            onClick={() => setActiveTab('profile')}
          >
            Profile Card
          </button>
          <button
            className={`btn btn-sm ${activeTab === 'hello' ? 'btn-warning' : 'btn-outline-light'}`}
            onClick={() => setActiveTab('hello')}
          >
            Hello World
          </button>
          <button
            className={`btn btn-sm ${activeTab === 'counter' ? 'btn-warning' : 'btn-outline-light'}`}
            onClick={() => setActiveTab('counter')}
          >
            Counter App
          </button>
          <button
            className={`btn btn-sm ${activeTab === 'card' ? 'btn-warning' : 'btn-outline-light'}`}
            onClick={() => setActiveTab('card')}
          >
            Simple Card
          </button>
          <button
            className={`btn btn-sm ${activeTab === 'website' ? 'btn-warning' : 'btn-outline-light'}`}
            onClick={() => setActiveTab('website')}
          >
            Simple Website
          </button>
        </div>
      </nav>

      <div className="flex-grow-1 p-3">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
