import React from 'react';

import './row.css';

function Row({left, right}) {
    return (
        <div className="details">
            { left }
            { right }
        </div>
    );
}

export default Row;