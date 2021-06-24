import React from 'react';
import PropTypes from 'prop-types';

import './row.css';

function Row({left, right}) {
    return (
        <div className="details">
            { left }
            { right }
        </div>
    );
}
Row.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node
};
export default Row;