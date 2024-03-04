import React from 'react';
import { Link } from 'react-router-dom'; // assuming you're using react-router for navigation
import Test from '../test';
import '../index.css';
import { FaLinkedin, FaEnvelopeOpen } from 'react-icons/fa';

const Header = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      <div style={{ width: '25%', textAlign: 'left', alignItems: 'center', margin: '1rem' }}>
      <li style={{ margin: '0 1rem', display: 'flex', alignItems: 'center' }}> Aiden Melone </li>
      </div>
      <div style={{ width: '50%' }}>
          <header>
              <nav>
                  <ul style={{ display: 'flex', justifyContent: 'center', listStyle: 'none', alignItems: 'center', height: '100%'}}>
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
                      <li style={{ margin: '0 1rem', display: 'flex', alignItems: 'center' }}>|</li>
                      <li style={{ margin: '0 1rem', display: 'flex', alignItems: 'center' }}>
                          <Link to="/professional" style={{ textDecoration: 'none', color: 'black' }}>Professional</Link>
                      </li>
                  </ul>
              </nav>
          </header>
      </div>
      <div style={{ width: '25%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <li style={{ margin: '0 .5rem', display: 'flex', alignItems: 'center' }}>
              <a href="https://www.linkedin.com/in/aiden-melone/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24} style={{ color: 'black' }} />
              </a>
          </li>
          <li style={{ margin: '0 1rem', display: 'flex', alignItems: 'center' }}>
              <a href="mailto:aidenm37@gmail.com" style={{ textDecoration: 'none', color: 'black' }}>
                  <FaEnvelopeOpen size={24} />
              </a>
          </li>
      </div>
    </div>
  );
};


export default Header;