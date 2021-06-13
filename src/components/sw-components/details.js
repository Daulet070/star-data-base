import React from "react";

import ItemDetails from "../item-details";
import { Record } from "../record";
// import SwapiService from "../../services/swapi-service";
import { SwapiServiceConsumer } from "../swapi-service-context";

// const swapiService = new SwapiService();

// const {
//     getPlanet,
//     getStarships,
//     getPlanetImage,
//     getStarshipImage,
// } = swapiService;

const PersonDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {
                ({ getPerson, getPersonImage }) => {
                    return (
                        <ItemDetails 
                            itemId={itemId}
                            getData={getPerson}
                            getImgUrl={getPersonImage}
                        > 
                            <Record field="gender" label="Gender" />
                            <Record field="eyeColor" label="Eye Color" />
                        </ItemDetails>
                    );
                }
            }
        </SwapiServiceConsumer>
    );
};

const StarshipDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {
                ({ getStarships, getStarshipImage }) => {
                    return (
                        <ItemDetails 
                            itemId={itemId}
                            getData={getStarships}
                            getImgUrl={getStarshipImage}
                        > 
                            <Record field="model" label="Model" />
                            <Record field="length" label="Length" />
                            <Record field="costInCredits" label="Cost" />
                        </ItemDetails>
                    );
                }
            }
        </SwapiServiceConsumer>
    );
};

const PlanetDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {
                ({ getPlanet, getPlanetImage }) => {
                    return (
                        <ItemDetails 
                            itemId={itemId}
                            getData={getPlanet}
                            getImgUrl={getPlanetImage}
                        > 
                            <Record field="population" label="Population" />
                            <Record field="rotationPeriod" label="Rotation Period" />
                            <Record field="diameter" label="Diameter" />
                        </ItemDetails>
                    );
                }
            }
        </SwapiServiceConsumer>
    );
};

export {
    PersonDetails,
    StarshipDetails,
    PlanetDetails
};