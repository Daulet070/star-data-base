import React, { Component } from 'react';

import { PersonDetails, PersonList } from '../sw-components';
import Row from '../row';
// import ErrorBoubdry from '../error-bowndry';

import './people-page.css';

class PeoplePage extends Component {

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
              left={<PersonList onItemSelected={this.onItemSelected} />}
              right={<PersonDetails itemId={ selectedItem } />}
            />
        );
    }
}

export default PeoplePage;