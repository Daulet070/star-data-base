import React, { Component } from 'react';

import './item-details.css';

class ItemDetails extends Component {

    state = {
        item: {},
        image: null
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId ||
            this.props.getData !== prevProps.getData ||
            this.props.getImageUrl !== prevProps.getImageUrl) {
            this.updateItem();
          }
    }

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;

        if (!itemId) {
            return;
        };
        
        getData(itemId)
            .then((item) => {
                this.setState({ 
                    item,
                    image: getImageUrl(item)
                });
            });
    }

    render() {
        const { item, image } = this.state;

        if (!item) {
            return <span>Select person from a list</span>
        }
        
        const { name } = item;

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