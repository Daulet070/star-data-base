import React from 'react';
import SwapiService from '../../services/swapi-service';
import { SwapiServiceConsumer } from '../swapi-service-context';

const withSwapiService = (Wrapped) => {
    return (props) => {
        return (
            <SwapiServiceConsumer>
                {
                    (swapiService) => {
                        return (
                            <Wrapped {...props} swapiService={swapiService} />
                        )
                    }
                }
            </SwapiServiceConsumer>
        );
    }
};

export default withSwapiService;