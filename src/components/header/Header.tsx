/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Header.css';
import 'bootstrap';

export const Header: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light header">
      <div className="container-fluid">
        <a href="#" className="navbar-brand">
            <img src="./logo.png" alt="logo" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav left-header">
            <li className="nav-item">
              <a href="#" className="nav-link nav-a">Products</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link nav-a">Resources</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link nav-a">Buy Instantly</a>
            </li>
          </ul>

          <ul className="navbar-nav right-header">
            <li className="nav-item">
              <a href="#" className="nav-link nav-a navigation-links">Log In</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link nav-a navigation-links last">Sign up<i className="fa fa-angle-right"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}