import React, { Component } from 'react';
import Header from '../header'
import RandomPlanet  from '../random-planet'
import ItemList from '../item-list'
import PersonDetails from '../person-details'
import './App.css';
// import Header from '../header'
class App extends Component {

  state = {
    showRandomPlanet: true,
    selectedPerson: null
  };
  // toggleRandomPlanet = () => {};
  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
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
        <div className="details">
          <ItemList onItemSelected={this.onPersonSelected} />
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    )
  };
}

export default App;
