import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../api';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    apiClient?.post('/auth/register', { name, email, password })
      .then((response) => {
        navigate('/login');  // Redirect to login after successful registration
      })
      .catch((error) => {
        setError('Error registering user');
        console.error(error);
      });
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
    registerButton: {
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
    registerButtonHover: {
      backgroundColor: '#45a049',
    },
    errorMessage: {
      color: 'red',
      fontSize: '14px',
      textAlign: 'center',
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
      <h2 style={styles.heading}>Register</h2>
      {error && <p style={styles.errorMessage}>{error}</p>}
      <div style={styles.inputGroup}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.inputField}
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={styles.inputField}
        />
      </div>
      <button 
        onClick={handleRegister} 
        style={styles.registerButton} 
        onMouseOver={(e) => e.target.style.backgroundColor = styles.registerButtonHover.backgroundColor} 
        onMouseOut={(e) => e.target.style.backgroundColor = styles.registerButton.backgroundColor}
      >
        Register
      </button>
      <p style={styles.loginLink}>
        Already have an account? <a href="/login" style={styles.loginLinkAnchor}>Login here</a>
      </p>
    </div>
  );
};

export default RegisterPage;
