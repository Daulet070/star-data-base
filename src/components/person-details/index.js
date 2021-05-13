import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import './person-details.css';

class PersonDetails extends Component {

    swapiService = new SwapiService();

    state = {
        person: null
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    updatePerson() {
        const { personId } = this.props;
        console.log(" ~ this.props", this.props)
        if (!personId) return;
        this.swapiService
            .getPerson(personId)
            .then((person) => {
                console.log(" .then ~ person", person)
                this.setState({ person })
            })
    }

    render() {
        if (!this.state.person) {
            return <span>Select person from a list</span>
        }
        console.log("🚀 ~ file: index.js ~ line 29 ~ PersonDetails ~ render ~ this.state.person", this.state.person)
        const { id, name, gender, birthYear, eyeColor } = this.state.person;

        return (
            <div className="person-details">
                <img className="person-details__image" 
                    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt={` ${name} `} />
                <div className="person-details__info info">
                    <h2 className="info__title">
                        { name }
                    </h2>
                    <ul className="info__list">
                        <li className="info__list-item">
                            <span className="term">
                                Gender
                            </span>
                            <span> 
                                { gender }
                            </span>
                        </li>
                        <li className="info__list-item">
                            <span className="term">
                                Birth Year
                            </span>
                            <span>
                                {birthYear}
                            </span>
                        </li>
                        <li className="info__list-item">
                            <span className="term">
                                Eye Color
                            </span>
                            <span> 
                                {eyeColor}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default PersonDetails;