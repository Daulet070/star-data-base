import React from 'react';
import './spinner.css';

const Spinner = (props) => {
    return (
        <div id="loader">
            <div class="outer">
                <div class="inner"></div>
            </div>
        </div>
    );
}

export default Spinner;