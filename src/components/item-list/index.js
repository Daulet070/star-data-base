import React, { Component } from 'react';

import './item-list.css'

class ItemList extends Component {

    render() {
        return (
            <ul className="item-list list-group">
                <li className="list-group-item">
                    R2-D2
                </li>
                <li className="list-group-item">
                    R2-D2
                </li>
                <li className="list-group-item">
                    R2-D2
                </li>
            </ul>
        );
    }
}

export default ItemList;