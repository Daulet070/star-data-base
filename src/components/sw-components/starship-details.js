import React from "react";
import ItemDetails from "../item-details";

import { Record } from "../record";
import { withSwapiService } from "../hoc-helpers";

const StarshipDetails = ({ itemId, swapiService }) => {
    const { getStarships, getStarshipImage } = swapiService;
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
};

export default withSwapiService(StarshipDetails);