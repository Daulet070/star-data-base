import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

import Header from '../header';
import RandomPlanet  from '../random-planet';
import ErrorIndicator from '../error-indicator';
import ErrorBoubdry from '../error-bowndry';
import { StarshipDetails } from '../sw-components';

import { 
  PeoplePage, 
  PlanetPage, 
  StarshipPage,
  LoginPage,
  AdminPage } from '../pages';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { SwapiServiceProvider } from '../swapi-service-context';

import './App.css';

class App extends Component {

  state = {
    swapiService: new SwapiService(),
    hasError: false,
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    });
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

    const { isLoggedIn } = this.state;
    
    return (
      <div id="app" className="container">
        <ErrorBoubdry>
          <SwapiServiceProvider value={this.state.swapiService}>
            <Router>
                <Header onServiceChange={this.onServiceChange} pageWrapId={"page-wrap"} outerContainerId={"container"} />
                <div id="page-wrap">
                  <RandomPlanet />
                  <Switch>
                    <Route path="/" render={() => <h2>Welcone to Star DB</h2>} exact />
                    <Route path="/people/:id?" component={PeoplePage} />
                    <Route path="/planets" component={PlanetPage} />
                    <Route path="/starships" exact component={StarshipPage} />
                    <Route path="/starships/:id" 
                            render={({ match }) => {
                              const { id } = match.params;
                              return <StarshipDetails itemId={id} />
                            }} />
                    <Route 
                      path="/login" 
                      render={() => (
                        <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />
                      )} 
                    />
                    <Route path="/admin" render={() => <AdminPage isLoggedIn={isLoggedIn} />} />
                    <Route render={() => <h2>Page not found</h2>}/>
                  </Switch>
                </div>
            </Router>
          </SwapiServiceProvider>
        </ErrorBoubdry>
      </div>
    )
  };
}

export default App;
