import React from 'react';



function ErrorIndicator(props) {
    return (
        <div className="error-indicator">
            <span className="bomm">BOOM! </span>            
            <span> Something has gona terribly wrong </span>            
            <span> (but we already sent droids to fix it)</span>            
        </div>
    );
}

export default ErrorIndicator;