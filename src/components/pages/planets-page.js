import React, { Component } from 'react';

import { PlanetDetails, PlanetList } from '../sw-components';
import Row from '../row';
// import ErrorBoubdry from '../error-bowndry';

class PlanetPage extends Component {

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
              left={<PlanetList onItemSelected={this.onItemSelected} />}
              right={<PlanetDetails itemId={ selectedItem } />}
            />
        );
    }
}

export default PlanetPage;