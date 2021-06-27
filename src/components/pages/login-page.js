import React from 'react';
import { Redirect } from 'react-router-dom';

function loginPage({ isLoggedIn, onLogin }) {

    const loginContent = 
        <div>
            <p>Login as administrator</p>
            <button
                className="header-btn"
                onClick={onLogin}
            >
                Login
            </button>
        </div>;
    
    const content = isLoggedIn ? <Redirect to="/star-wars-db" /> : loginContent;

    return content;
}

export default loginPage;