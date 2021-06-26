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
    
    const content = isLoggedIn ? <Redirect to="/" /> : loginContent;

    return content;
}

export default loginPage;