import React from 'react';
import PropTypes from 'prop-types';
import './AnimalCard.css';

export default function AnimalCard({
  additional,
  diet,
  name,
  scientificName,
  showAdditional,
  size
}) {
  return (
    <div className="animal-wrapper">
      <h2>{name}</h2>
      <h3>{scientificName}</h3>
      <h4>{size} kg</h4>
      <div>Diet: {diet.join(', ')}.</div>
      <button onClick={() => showAdditional(additional)}>More Info</button>
    </div>
  );
}

AnimalCard.propTypes = {
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string
  }),
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  showAdditional: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
};

AnimalCard.defaultProps = {
  additional: {
    notes: 'No Additional Information'
  }
};
