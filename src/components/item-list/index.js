import React, { Component } from 'react';
import Spinner from '../spinner';

import './item-list.css'

class ItemList extends Component {

    state = {
        itemList: []
    };

    componentDidMount() {
        const { getData } = this.props;
        
        getData()
        .then((itemList) => {
            this.setState({
                itemList
            });
        });
    };
    
    renderItems(arr) {
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
        const { itemList } = this.state;
        
        const items = this.renderItems(itemList);

        if (!itemList) {
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