import React from 'react';

function Image({ url }) {
  return (
    <div
      className="d-flex align-items-center justify-content-center h-100"
      style={{
        backgroundColor: '#fef3c7',
        border: '2px solid #eab308',
        minWidth: '150px',
        minHeight: '130px',
        color: '#ca8a04',
        fontSize: '2.5rem',
        fontFamily: 'serif'
      }}
    >
      {url ? <img src={url} alt="Card" style={{ maxWidth: '100%', maxHeight: '100%' }} /> : 'IMG'}
    </div>
  );
}

function Title({ text }) {
  return (
    <div
      className="p-2 mb-1"
      style={{
        border: '1px solid #ea580c',
        color: '#ea580c',
        fontSize: '2.2rem',
        fontFamily: 'serif'
      }}
    >
      {text || 'A Title'}
    </div>
  );
}

function Description({ text }) {
  return (
    <div
      className="p-3"
      style={{
        border: '1px solid #9ca3af',
        color: '#4b5563',
        fontSize: '1.4rem',
        fontFamily: 'serif',
        minHeight: '80px'
      }}
    >
      {text || 'The description goes here.'}
    </div>
  );
}

function SimpleCard({ item }) {
  const cardItem = item || {
    title: 'A Title',
    description: 'The description goes here.',
    imageUrl: ''
  };

  return (
    <div
      className="mx-auto my-4 p-1 bg-white shadow-sm"
      style={{
        border: '3px solid #2563eb',
        maxWidth: '600px'
      }}
    >
      <div className="d-flex gap-1 align-items-stretch">
        <div>
          <Image url={cardItem.imageUrl} />
        </div>
        <div className="flex-grow-1 d-flex flex-column">
          <Title text={cardItem.title} />
          <Description text={cardItem.description} />
        </div>
      </div>
    </div>
  );
}

export default SimpleCard;
