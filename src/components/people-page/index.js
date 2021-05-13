import React, { Component } from 'react';

import './people-page.css';

import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from '../../services/swapi-service';

class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 3,
        hasError: false
    }
    
    onPersonSelected = (selectedPerson) => {
        this.setState({
          selectedPerson
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
            <div className="details">
                <ItemList 
                    onItemSelected={this.onPersonSelected}
                    getData={this.swapiService.getAllPeople}
                    renderItem={({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})`}
                 />
                <PersonDetails personId={this.state.selectedPerson} />
            </div>
        );
    }
}

export default PeoplePage;