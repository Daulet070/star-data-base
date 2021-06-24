import React, { Component } from 'react';

import { StarshipDetails, StarshipList } from '../sw-components';
import Row from '../row';
// import ErrorBoubdry from '../error-bowndry';

import './people-page.css';

class StarshipPage extends Component {

    state = {
        selectedItem: null
    }
    
    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem });
    };

    render() {
        const { selectedItem } = this.state;
        return (
            <Row 
              left={<StarshipList onItemSelected={this.onItemSelected} />}
              right={<StarshipDetails itemId={ selectedItem } />}
            />
        );
    }
}

export default StarshipPage;