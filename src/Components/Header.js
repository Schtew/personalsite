import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaEnvelopeOpen, FaBars, FaTimes } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: 'white',
        position: 'relative',
        zIndex: 1000,
        height: '64px', // Fixed height for header
    },
    logoSection: {
        width: '25%',
        display: 'flex',
        alignItems: 'center',
        padding: '0 1rem',
        '@media (max-width: 768px)': {
            width: 'auto'
        }
    },
    navigationSection: {
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        '@media (max-width: 768px)': {
            display: 'none'
        }
    },
    socialSection: {
        width: '25%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '0 1rem',
        '@media (max-width: 768px)': {
            width: 'auto'
        }
    },
    navList: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: '100%',
        height: '100%'
    },
    navItem: {
        margin: '0 1rem',
        display: 'flex',
        alignItems: 'center'
    },
    link: {
        textDecoration: 'none',
        color: 'black'
    },
    hamburgerButton: {
        display: 'none',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '1rem',
        '@media (max-width: 768px)': {
            display: 'block'
        }
    },
    mobileMenu: {
        display: 'none',
        '@media (max-width: 768px)': {
            display: 'block',
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'white',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            transform: 'translateY(-100%)',
            transition: 'transform 0.3s ease-in-out',
            '&.open': {
                transform: 'translateY(0)'
            }
        }
    },
    mobileNavList: {
        listStyle: 'none',
        padding: '0',
        margin: '0',
    },
    mobileNavItem: {
        padding: '1rem',
        borderBottom: '1px solid #eee',
        textAlign: 'center'
    },
    mobileProfileSection: {
        padding: '1rem',
        borderBottom: '1px solid #eee',
        textAlign: 'center'
    },
    mobileSocialIcons: {
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        padding: '1rem'
    },
    socialIcon: {
        margin: '0 0.5rem',
        display: 'flex',
        alignItems: 'center',
        '@media (max-width: 768px)': {
            display: 'none'
        }
    }
}));

const Header = () => {
    const classes = useStyles();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/hackathons', label: 'Hackathons' },
        { path: '/research', label: 'Research' },
        { path: '/professional', label: 'Professional' }
    ];

    return (
        <>
            <div className={classes.header}>
                {/* Desktop View */}
                <div className={classes.logoSection}>
                    <span>Aiden Melone</span>
                </div>

                <div className={classes.navigationSection}>
                    <nav style={{ width: '100%' }}>
                        <ul className={classes.navList}>
                            {navItems.map((item, index) => (
                                <React.Fragment key={item.path}>
                                    <li className={classes.navItem}>
                                        <Link to={item.path} className={classes.link}>
                                            {item.label}
                                        </Link>
                                    </li>
                                    {index < navItems.length - 1 && (
                                        <li className={classes.navItem}>|</li>
                                    )}
                                </React.Fragment>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className={classes.socialSection}>
                    <button
                        className={classes.hamburgerButton}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                    {/* Desktop social icons */}
                    <div className={classes.socialIcon}>
                        <a href="https://www.linkedin.com/in/aiden-melone/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={24} style={{ color: 'black' }} />
                        </a>
                    </div>
                    <div className={classes.socialIcon}>
                        <a href="mailto:aidenm37@gmail.com" className={classes.link}>
                            <FaEnvelopeOpen size={24} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${classes.mobileMenu} ${isMenuOpen ? 'open' : ''}`}>
                {/* Navigation Links */}
                <nav>
                    <ul className={classes.mobileNavList}>
                        {navItems.map((item) => (
                            <li key={item.path} className={classes.mobileNavItem}>
                                <Link 
                                    to={item.path} 
                                    className={classes.link}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                                {/* Profile Section */}
                <div className={classes.mobileProfileSection}>
                    <div className={classes.mobileSocialIcons}>
                        <a href="https://www.linkedin.com/in/aiden-melone/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={24} style={{ color: 'black' }} />
                        </a>
                        <a href="mailto:aidenm37@gmail.com" className={classes.link}>
                            <FaEnvelopeOpen size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;