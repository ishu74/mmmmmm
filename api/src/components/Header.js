import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const styles = {
    header: {
      backgroundColor: '#333',
      padding: '10px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    nav: {
      display: 'flex',
      gap: '20px',
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '18px',
      fontWeight: '500',
      transition: 'color 0.3s ease',
    },
    linkHover: {
      color: '#4CAF50',
    },
    logo: {
      color: 'white',
      fontSize: '24px',
      fontWeight: 'bold',
      textDecoration: 'none',
    }
  };

  return (
    <header style={styles.header}>
      <Link to="/" style={styles.logo}>My</Link>
      <nav style={styles.nav}>
        <Link to="/login" style={styles.link} onMouseOver={(e) => e.target.style.color = styles.linkHover.color} onMouseOut={(e) => e.target.style.color = 'white'}>Login</Link>
        <Link to="/" style={styles.link} onMouseOver={(e) => e.target.style.color = styles.linkHover.color} onMouseOut={(e) => e.target.style.color = 'white'}>Home</Link>
        <Link to="/admin" style={styles.link} onMouseOver={(e) => e.target.style.color = styles.linkHover.color} onMouseOut={(e) => e.target.style.color = 'white'}>Admin</Link>
      </nav>
    </header>
  );
};

export default Header;
