import React, { Component } from 'react';

import './person-details.css';

class PersonDetails extends Component {

    render() {
        return (
            <div className="person-details card">
                <img className="person-image" 
                    src="https://starwars-visualguide.com/assets/img/characters/3.jpg" alt="planet" />
                <div className="card-body">
                    <h2 className="info__title">R2-D2</h2>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">
                                Gender
                            </span>
                            <span> male</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">
                                Birth Year
                            </span>
                            <span> 43</span>
                        </li>
                        <li className="list-group-item">
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