import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import { Record } from '../record';

import './item-details.css';

class ItemDetails extends Component {
    
    swapiService = new SwapiService();

    state = {
        item: {},
        image: null
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getData, getImgUrl } = this.props;

        if (!itemId) {
            return
        };
        
        getData(itemId)
            .then((item) => {
                // console.log("then ~ item", item)
                this.setState({ 
                    item,
                    image: getImgUrl(item)
                });
            });
    }

    render() {
        const { item, image } = this.state;
        console.log("render ~ this.state", this.state)
        console.log("render ~ item", item)

        if (!item) {
            return <span>Select person from a list</span>
        }
        
        const { id, name, gender, birthYear, eyeColor } = item;

        return (
            <div className="item-details">
                <img className="item-details__image" 
                    src={ image } alt={ name } />
                <div className="item-details__info info">
                    <h2 className="info__title">
                        { name }
                    </h2>
                    <ul className="info__list">
                        { 
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, { item });
                            } )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default ItemDetails;