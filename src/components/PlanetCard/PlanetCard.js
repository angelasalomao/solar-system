import PropTypes from 'prop-types';
import React from 'react';
import './PlanetCard.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;

    return (
      <div data-testid="planet-card" className="card-planet">
        <img 
          src={ planetImage } 
          alt={ `Planeta ${planetName}` } 
          className={planetName} 
        />
        <p data-testid="planet-name" className="planetName">
          { planetName }
        </p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
