import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';

import Header from '../header';
import RandomPlanet  from '../random-planet';
import PeoplePage from '../people-page';
import ErrorIndicator from '../error-indicator';
import ItemDetails from '../item-details';
import { Record } from '../record';

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

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false
  };
  // toggleRandomPlanet = () => {};
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
    // const { getPerson,
    //         getStarship,
    //         getPersonImage,
    //         getStarshipImage } = this.swapiService;
            // console.log(getPerson);

    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    // const personDetails = (
    //   <ItemDetails 
    //       itemId={11}
    //       getData={getPerson}
    //       getImgUrl={getPersonImage}
    //   > 
    //     <Record field="gender" label="Gender" />
    //     <Record field="eyeColor" label="Eye Color" />
    //   </ItemDetails>
    // );
    // const starshipDetails = (
    //   <ItemDetails 
    //       itemId={11}
    //       getData={getStarship}
    //       getImgUrl={getStarshipImage}
    //   > 
    //     <Record field="model" label="Model" />
    //     <Record field="length" label="Length" />
    //     <Record field="costInCredits" label="Cost" />
    //   </ItemDetails>
    // );
    
    return (
      <div className="container">
        <Header />
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
    )
  };
}

export default App;
