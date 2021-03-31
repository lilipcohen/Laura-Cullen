import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

function Nav() {
  return (
    <>
      <div className="nav">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link
              to="/home"
              className={
                window.location.pathname === '/home'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={
                window.location.pathname === '/about'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/gallery"
              className={
                window.location.pathname === '/gallery'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Art Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/subscribers"
              className={
                window.location.pathname === '/subscribers'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Subscribers
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
