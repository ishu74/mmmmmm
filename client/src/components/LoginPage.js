import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../api';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    apiClient?.post('/auth/login', { email, password })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        navigate('/');
      })
      .catch((error) => console.error(error));
  };

  const styles = {
    container: {
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f7f7f7',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      marginBottom: '20px',
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    inputField: {
      padding: '12px',
      fontSize: '14px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      width: '100%',
    },
    inputFocus: {
      outlineColor: '#4CAF50',
      borderColor: '#4CAF50',
    },
    loginButton: {
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      padding: '15px',
      fontSize: '16px',
      width: '100%',
      cursor: 'pointer',
      borderRadius: '4px',
      marginTop: '20px',
    },
    loginButtonHover: {
      backgroundColor: '#45a049',
    },
    loginLink: {
      textAlign: 'center',
      marginTop: '10px',
    },
    loginLinkAnchor: {
      color: '#4CAF50',
      textDecoration: 'none',
    },
    loginLinkAnchorHover: {
      textDecoration: 'underline',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      <div style={styles.inputGroup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.inputField}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.inputField}
        />
      </div>
      <button 
        onClick={handleLogin} 
        style={styles.loginButton} 
        onMouseOver={(e) => e.target.style.backgroundColor = styles.loginButtonHover.backgroundColor} 
        onMouseOut={(e) => e.target.style.backgroundColor = styles.loginButton.backgroundColor}
      >
        Login
      </button>
      <p style={styles.loginLink}>
        Don't have an account? <a href="/register" style={styles.loginLinkAnchor}>Register here</a>
      </p>
    </div>
  );
};

export default LoginPage;
