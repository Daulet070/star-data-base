import React, { Component } from 'react';

import './App.css';

import Header from '../header';
import RandomPlanet  from '../random-planet';
import PeoplePage from '../people-page';
import ErrorIndicator from '../error-indicator';


class App extends Component {

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
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    return (
      <div className="container">
        <Header />
        {/* { planet } */}
        <RandomPlanet />
        {/* <button className='btn'
                onClick={this.toggleRandomPlanet}>
          toggle Random Planet
        </button> */}
        <PeoplePage />
      </div>
    )
  };
}

export default App;
