import React from 'react';
import { Link } from 'react-router-dom'; // assuming you're using react-router for navigation
import Test from '../test';
import '../index.css';

const Header = () => {
  return (
    <div>
      <Test />
      <header>
        <nav>
          <ul style={{ display: 'flex', justifyContent: 'center', listStyle: 'none', alignItems: 'center', height: '100%' }}>
            <li style={{ margin: '0 1rem', display: 'flex', alignItems: 'center' }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
            </li>
            <li style={{ margin: '0 1rem', display: 'flex', alignItems: 'center' }}>|</li>
            <li style={{ margin: '0 1rem', display: 'flex', alignItems: 'center' }}>
              <Link to="/hackathons" style={{ textDecoration: 'none', color: 'black' }}>Hackathons</Link>
            </li>
            <li style={{ margin: '0 1rem', display: 'flex', alignItems: 'center' }}>|</li>
            <li style={{ margin: '0 1rem', display: 'flex', alignItems: 'center' }}>
              <Link to="/research" style={{ textDecoration: 'none', color: 'black' }}>Research</Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </nav>
      </header>
    </div>
  );
};


export default Header;