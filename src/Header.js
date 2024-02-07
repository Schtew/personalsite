import React from 'react';
import { Link } from 'react-router-dom'; // assuming you're using react-router for navigation

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hackathon">Hackathons</Link>
          </li>
          <li>
            <Link to="/research">Research</Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;