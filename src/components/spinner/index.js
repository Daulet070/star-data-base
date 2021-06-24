import React from 'react';
import './spinner.css';

const Spinner = (props) => {
    return (
        <div id="loader">
            <div className="outer">
                <div className="inner"></div>
            </div>
        </div>
    );
}

export default Spinner;