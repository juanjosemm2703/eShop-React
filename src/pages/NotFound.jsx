import React from 'react';
import '@styles/NotFound.scss';
import EmailLogo from '@logos/undraw_page_not_foundz.svg';

const NotFound = () => {
    return (
    <div className='error'>
        <div className="error-container">
            <img src={EmailLogo} alt="logo" className="logo"/>
            <h1 className='title'> Not Found, error 404.</h1>
            <button className="primary-button login-button">Go back</button>
        </div>
    </div>
    )
}

export default NotFound;
