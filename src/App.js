import React from 'react';
import Header from './components/Header/Header';
import SolarSystem from './components/SolarSystem/SolarSystem';
import Missions from './components/Missions/Missions';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <SolarSystem />
        <Missions />
      </section>
    );
  }
}

export default App;
