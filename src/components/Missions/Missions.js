import React from 'react';
import Title from '../Title/Title';
import missions from '../../data/missions';
import MissionCard from '../MissionCard/MissionCard';
import './Missions.css';

class Missions extends React.Component {
  render() {
    const missionsList = missions.map((mission, index) => (
      <MissionCard
        name={ mission.name }
        year={ mission.year }
        country={ mission.country }
        destination={ mission.destination }
        key={ index }
      />
    ));
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="list-missions">
          {missionsList}
        </div>
      </div>
    );
  }
}

export default Missions;
