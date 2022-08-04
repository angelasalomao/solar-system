import React from 'react';
import Title from '../Title/Title';
import planets from '../../data/planets';
import PlanetCard from '../PlanetCard/PlanetCard';
import './SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    const planetList = planets.map((planet, index) => (
      <PlanetCard
        planetName={ planet.name }
        planetImage={ planet.image }
        key={ index }
      />
    ));
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas"/>
        <div className="planets">
          {planetList}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
