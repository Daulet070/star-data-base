import React from "react";
import ItemDetails from "../item-details";

import { Record } from "../record";
import { withSwapiService } from "../hoc-helpers";

const PlanetDetails = ({ itemId, swapiService }) => {
    const { getPlanet, getPlanetImage } = swapiService;
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
};

export default withSwapiService(PlanetDetails);