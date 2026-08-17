import React from 'react';
import data from './data';
import AnimalCard from './components/AnimalCard/AnimalCard';
import './App.css';

function App() {
  const showAdditionalData = (additional) => {
    const alertInformation = Object.entries(additional)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');
    alert(alertInformation);
  };

  return (
    <div className="wrapper" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Animals</h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {data.map((animal) => (
          <AnimalCard
            key={animal.name}
            name={animal.name}
            scientificName={animal.scientificName}
            size={animal.size}
            diet={animal.diet}
            additional={animal.additional}
            showAdditional={showAdditionalData}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
