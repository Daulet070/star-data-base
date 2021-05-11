import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './item-list.css'

class ItemList extends Component {

    swapiService = new SwapiService();

    state = {
        peopleList: []
    };

    componentDidMount() {
        this.swapiService
        .getAllPeople()
        .then((peopleList) => {
            this.setState({
                peopleList
            });
        });
    };
    
    renderItems(arr) {
        console.log("arr", arr)
        return arr.map(({id, name}) => {
            return (
                <li key={id}
                className="info__list-item"
                onClick={() => this.props.onItemSelected(id)}>
                    {name}
                </li>
            );
        });
    };
    
    render() {
        const { peopleList } = this.state;
        console.log("peopleList", peopleList)
        const items = this.renderItems(peopleList);

        if (!peopleList) {
            return <Spinner />
        }

        return (
            <ul className="info__list">
                { items }        
            </ul>
        );
    }
}

export default ItemList;