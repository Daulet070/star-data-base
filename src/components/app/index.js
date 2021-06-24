import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

import Header from '../header';
import RandomPlanet  from '../random-planet';
import ErrorIndicator from '../error-indicator';
import ErrorBoubdry from '../error-bowndry';
import { PeoplePage, PlanetPage, StarshipPage } from '../pages';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { SwapiServiceProvider } from '../swapi-service-context';

import './App.css';

class App extends Component {

  state = {
    swapiService: new SwapiService()
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

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }
    
    return (
      <ErrorBoubdry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="container">
              <Header onServiceChange={this.onServiceChange} />
              {/* <RandomPlanet /> */}
              <Route path="/" component={RandomPlanet} />
              <Route path="/people" component={PeoplePage} />
              <Route path="/planets" component={PlanetPage} />
              <Route path="/starships" component={StarshipPage} />
              {/* <PeoplePage />
              <PlanetPage />
              <StarshipPage /> */}
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoubdry>
    )
  };
}

export default App;
