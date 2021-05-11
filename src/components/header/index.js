import React from 'react';
// import PropTypes from 'prop-types';
import './header.css'
// index.propTypes = {
    
// };

function header(props) {
    return (
        <header className="header">
            <h1 className="header__title">
                <a href="#" className="header__link">Star DB</a>
            </h1>
            <ul className="header__list list">
                <li className="list__item">
                    <a href="#" className="list__item-link">People</a>
                </li>
                <li className="list__item">
                    <a href="#" className="list__item-link">Planets</a>
                </li>
                <li className="list__item">
                    <a href="#" className="list__item-link">Starships</a>
                </li>
            </ul>
        </header>
    );
}

export default header;