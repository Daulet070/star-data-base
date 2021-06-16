import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

import Header from '../header';
import RandomPlanet  from '../random-planet';
import PeoplePage from '../people-page';
import ErrorIndicator from '../error-indicator';
import ErrorBoubdry from '../error-bowndry';
import ItemDetails from '../item-details';
import { Record } from '../record';

import { SwapiServiceProvider } from '../swapi-service-context';

import {
  PersonDetails,
  StarshipDetails,
  PlanetDetails,
  PersonList,
  StarshipList,
  PlanetList
} from '../sw-components';

import './App.css';

class App extends Component {

  

  state = {
    showRandomPlanet: true,
    swapiService: new DummySwapiService(),
    hasError: false
  };

  onServiceChange = () => {
    this.setState(({swapiService}) => {

      const Service = swapiService instanceof SwapiService ? 
        DummySwapiService : SwapiService;
        
        return {
          swapiService: new Service()
        };
    });
  };
  
  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  // onPersonSelected = (id) => {
  //   this.setState({
  //     selectedPerson: id
  //   });
  // };

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    // const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    
    return (
      <ErrorBoubdry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="container">
            <Header onServiceChange={this.onServiceChange} />
            {/* { planet } */}
            {/* <RandomPlanet /> */}
            {/* <button className='btn'
                    onClick={this.toggleRandomPlanet}>
                    toggle Random Planet
                  </button> */}
            {/* <PeoplePage /> */}
            <PersonDetails itemId={11} />
            <PersonList />
            <StarshipDetails itemId={9} />
            <StarshipList />
            <PlanetDetails itemId={5} />
            <PlanetList />
            {/* <PlanetsPage />
            <StarshipPage /> */}
          </div>
        </SwapiServiceProvider>
      </ErrorBoubdry>
    )
  };
}

export default App;
