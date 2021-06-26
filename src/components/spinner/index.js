import React from 'react';
import './spinner.css';

const Spinner = () => {
    return (
        <div id="loader">
            <div className="outer">
                <div className="inner"></div>
            </div>
        </div>
    );
}

export default Spinner;