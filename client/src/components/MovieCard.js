import React from 'react';

const MovieCard = ({ movie }) => {
  const styles = {
    card: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      marginBottom: '20px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      maxWidth: '300px',
      textAlign: 'center',
      transition: 'transform 0.3s ease-in-out',
    },
    cardHover: {
      transform: 'scale(1.05)',
    },
    title: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '10px',
    },
    description: {
      fontSize: '14px',
      color: '#555',
      marginBottom: '10px',
      height: '60px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    rating: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#4CAF50',
      marginBottom: '10px',
    },
    releaseDate: {
      fontSize: '14px',
      color: '#777',
      marginBottom: '5px',
    },
    duration: {
      fontSize: '14px',
      color: '#777',
    },
  };

  return (
    <div 
      style={styles.card}
      onMouseEnter={(e) => e.currentTarget.style.transform = styles.cardHover.transform}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <h3 style={styles.title}>{movie.name}</h3>
      <p style={styles.description}>{movie.description}</p>
      <p style={styles.rating}>Rating: {movie.rating}</p>
      <p style={styles.releaseDate}>Release Date: {movie.releaseDate}</p>
      <p style={styles.duration}>Duration: {movie.duration}</p>
    </div>
  );
};

export default MovieCard;
