import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';

class ErrorBoubdry extends Component {
    state = {
        hasError: false
    }
    
    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }
    
    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }
        
        return this.props.children;
    }
}

export default ErrorBoubdry;