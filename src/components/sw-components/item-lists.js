import React from "react";
import { withData } from "../hoc-helpers";
import ItemList from "../item-list";

import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapiService;

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
};

const renderName = ({name}) => <span>{name}</span>;
const renderModelAndName = ({model ,name}) => <span>{name} ({model})</span>;

const PersonList = withData(
    withChildFunction(ItemList, renderName),
    getAllPeople);

const StarshipList = withData(
    withChildFunction(ItemList, renderModelAndName),
    getAllStarships);

const PlanetList = withData(
    withChildFunction(ItemList, renderName),
    getAllPlanets);

export {
    PersonList,
    StarshipList,
    PlanetList
};