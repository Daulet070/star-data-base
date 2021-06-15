import React from "react";
import ItemDetails from "../item-details";

import { Record } from "../record";
import { withSwapiService } from "../hoc-helpers";

const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props}> 
            <Record field="model" label="Model" />
            <Record field="length" label="Length" />
            <Record field="costInCredits" label="Cost" />
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarships,
        getImageUrl: swapiService.getStarshipImage
    }
};

export default withSwapiService(StarshipDetails, mapMethodsToProps);