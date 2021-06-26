import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import './header.css'

function header(props) {
    const { onServiceChange } = props;
    return (
        <header className="header">
            <h1 className="header__title">
                <Link to="/" className="header__link">Star DB</Link>
            </h1>
            <Menu {...props} right >
                <ul className="header__list list">
                    <li className="list__item">
                        <Link to="/people/" className="list__item-link">People</Link>
                    </li>
                    <li className="list__item">
                        <Link to="/planets/" className="list__item-link">Planets</Link>
                    </li>
                    <li className="list__item">
                        <Link to="/starships/" className="list__item-link">Starships</Link>
                    </li>
                    <li className="list__item">
                        <Link to="/login" className="list__item-link">Login</Link>
                    </li>
                    <li className="list__item">
                        <Link to="/admin" className="list__item-link">Admin</Link>
                    </li>
                </ul>
            </Menu>
            <button 
                onClick={onServiceChange}
                className="header-btn">
                Change Service
            </button>
        </header>
    );
}

export default header;