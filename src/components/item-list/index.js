import React, { Component } from 'react';
import Spinner from '../spinner';

import SwapiService from '../../services/swapi-service';

import './item-list.css'

const ItemList = (props) => {

    const { data, onItemSelected, children: renderLabel } = props;
    
    const items = data.map((item) => {
        const { id } = item;
        const label = renderLabel(item);

        return (
            <li key={id}
                className="info__list-item"
                onClick={() => onItemSelected(id)}>
                { label }
            </li>
        );
    });

    return (
        <ul className="info__list">
            { items }        
        </ul>
    );
    
};

const withData = (View, getData) => {
    return class extends Component {
        
        state = {
            data: []
        };
    
        componentDidMount() {
            
            getData()
            .then((data) => {
                this.setState({
                    data
                });
            });
        };
        render() {
            const { data } = this.state;
        
            if (!data) {
                return <Spinner />
            }

            return <View {...this.props} data={data} />
        }
    }
};

const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);