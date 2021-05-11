import React, { Component } from 'react';

import './person-details.css';

class PersonDetails extends Component {

    render() {
        return (
            <div className="person-details">
                <img className="person-details__image" 
                    src="https://starwars-visualguide.com/assets/img/characters/3.jpg" alt="planet" />
                <div className="person-details__info info">
                    <h2 className="info__title">R2-D2</h2>
                    <ul className="info__list">
                        <li className="info__list-item">
                            <span className="term">
                                Gender
                            </span>
                            <span> male</span>
                        </li>
                        <li className="info__list-item">
                            <span className="term">
                                Birth Year
                            </span>
                            <span> 43</span>
                        </li>
                        <li className="info__list-item">
                            <span className="term">
                                Eye Colot
                            </span>
                            <span> red</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default PersonDetails;