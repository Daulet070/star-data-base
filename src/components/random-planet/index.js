import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';

import './random-planet.css';

class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        id: null,
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null
    };
    constructor() {
        super();
        this.updatePlanet()
    }
    updatePlanet() {
        const id = Math.floor(Math.random() *25) + 2;
        this.swapiService
            .getPlanet(id)
            .then(planet => {
                this.setState({
                    id,
                    name: planet.name,
                    population: planet.population,
                    rotationPeriod: planet.rotation_period,
                    diameter: planet.diameter
                });
            });
    }

    render() {

        const { id, name, population, rotationPeriod, diameter } = this.state;

        return (
            <div className="random-planet jumbotron">
                <img className="random-planet__image" 
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet" />
                <div className="random-planet__info info">
                    <h2 className="info__title">{name}</h2>
                    <ul className="info__list">
                        <li className="info__list-item">
                            <span className="term">Population </span>
                            <span>{population}</span>
                        </li>
                        <li className="info__list-item">
                            <span className="term">Rotation period </span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className="info__list-item">
                            <span className="term">Diameter </span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default RandomPlanet;