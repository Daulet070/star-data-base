import React, { Component } from 'react';

import './people-page.css';

import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from '../../services/swapi-service';
import Row from '../row';

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
        const itemList = (<ItemList 
                        onItemSelected={this.onPersonSelected}
                        getData={this.swapiService.getAllPeople}
                        renderItem={({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})`}
                    />);
        const personDetails = (<PersonDetails personId={this.state.selectedPerson} />);

        return (
            <Row left={itemList} right={personDetails} />
        );
    }
}

export default PeoplePage;