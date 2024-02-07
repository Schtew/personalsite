import React from 'react';
import { Link } from 'react-router-dom'; // assuming you're using react-router for navigation

const Header = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'center', listStyle: 'none' }}>
          <li style={{ margin: '0 10px' }}>
            <Link to="/">Home</Link>
          </li>
          <li className='list'>
            <Link to="/hackathon">Hackathons</Link>
          </li>
          <li className='list'>
            <Link to="/research">Research</Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;