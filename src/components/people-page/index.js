import React, { Component } from 'react';

import './people-page.css';

import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ErrorBoubdry from '../error-bowndry';
import { Record } from '../record';


class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedItem: 3,
        hasError: false
    }
    
    onPersonSelected = (selectedItem) => {
        this.setState({
          selectedItem
        });
    };

    // componentDidCatch() {
    //     this.setState({
    //         hasError: true
    //     })
    // }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }
        const { getPerson,
                getStarship,
                getPersonImage,
                getStarshipImage } = this.swapiService;

        const itemList = (
            <ItemList 
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople} 
            >                
                {( i ) => `${i.name} (${i.birthYear})`}
            </ItemList>
        );
        
        const itemDetails = (
            <ErrorBoubdry>
                <ItemDetails 
                    itemId={this.state.selectedItem}
                    getData={getPerson}
                    getImgUrl={getPersonImage}
                > 
                    <Record field="gender" label="Gender" />
                    <Record field="eyeColor" label="Eye Color" />
                </ItemDetails>
            </ErrorBoubdry>
        );
        
        return (
            <Row left={itemList} right={itemDetails} />
        );
    }
}

export default PeoplePage;