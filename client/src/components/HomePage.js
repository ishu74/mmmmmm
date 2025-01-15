import React, { useState, useEffect } from 'react';
import apiClient from '../api';
import MovieCard from './MovieCard';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    apiClient?.get('/movies')
      .then(response => setMovies(response.data))
      .catch(error => console.error(error));
  }, []);

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      fontSize: '32px',
      color: '#333',
      marginBottom: '20px',
    },
    movieList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center',
    },
    noMoviesMessage: {
      fontSize: '18px',
      color: '#777',
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}></h1>
      {movies.length > 0 ? (
        <div style={styles.movieList}>
          {movies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      ) : (
        <p style={styles.noMoviesMessage}>No movies available</p>
      )}
    </div>
  );
};

export default HomePage;
