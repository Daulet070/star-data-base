import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator'

import './random-planet.css';

class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    };

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false
        });
    };
    
    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 17) + 2;
        this.swapiService
        .getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError);
    };

    render() {

        const { planet, loading, error } = this.state;

        const hasData = !(loading || error);

        const ErrorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <PlanetView planet={ planet } /> : null;

        return (
            <div className="random-planet">
                { ErrorMessage }
                { spinner }
                { content }
            </div>
        );
    };
};

export default RandomPlanet;

const PlanetView = ({ planet }) => {
    const { id, name, population, rotationPeriod, diameter } = planet;
    return (
        <>
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
        </>
    )
}