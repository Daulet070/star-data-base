import React from 'react';
import { Redirect } from 'react-router-dom';

function adminPage({isLoggedIn}) {

    const adminContent = <div><h2>Hi Admin!</h2></div>;

    const content = isLoggedIn ? adminContent : <Redirect to="/login" />
    
    return content;
}

export default adminPage;