/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Header.css';

export const Header: React.FC = () => {
    return (
        <div className="header">
            <div  className="left-header">
                <img src="./logo.png" alt="logo" className="logo" />
                <a href="#" className="navigation-links">Products</a>
                <a href="#" className="navigation-links">Resources</a>
                <a href="#" className="navigation-links">Buy Instantly</a>
            </div>
            <div className="right-header">
                <a href="#" className="navigation-links">Login</a>
                <a href="#" className="navigation-links">Sign up</a>
            </div>
        </div>
    );
}