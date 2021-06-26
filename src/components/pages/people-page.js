import React from 'react';
import Row from '../row';
import { withRouter } from 'react-router-dom';
import { PersonDetails, PersonList } from '../sw-components';
// import ErrorBoubdry from '../error-bowndry';

const PeoplePage = ({ history, match }) => {
    const { id } = match.params;
    return (
        <Row 
          left={<PersonList onItemSelected={(id) => history.push(id)} />}
          right={<PersonDetails itemId={ id } />}
        />
    );
    
}

export default withRouter(PeoplePage);