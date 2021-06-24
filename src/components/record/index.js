import React from 'react';

const Record = ({ item, field, label }) => {
    return (
        <li className="info__list-item">
            <span className="term"> { label } </span>
            <span> { item[field] } </span>
        </li>
    );
};

export { Record };