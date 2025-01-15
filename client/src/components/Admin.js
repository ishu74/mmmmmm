import React, { useState, useEffect } from 'react';
import apiClient from '../api';
import MovieCard from './MovieCard';

const AdminPage = () => {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({
    name: '',
    description: '',
    rating: '',
    releaseDate: '',
    duration: '',
  });

  useEffect(() => {
    apiClient?.get('/movies')
      .then(response => setMovies(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleAddMovie = () => {
    apiClient?.post('/movies', newMovie, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
      .then(response => {
        setMovies([...movies, response.data]);
        setNewMovie({
          name: '',
          description: '',
          rating: '',
          releaseDate: '',
          duration: '',
        });
      })
      .catch(error => console.error(error));
  };

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      textAlign: 'center',
      fontSize: '28px',
      marginBottom: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      maxWidth: '500px',
      margin: '0 auto',
    },
    inputField: {
      padding: '12px',
      fontSize: '14px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    textareaField: {
      padding: '12px',
      fontSize: '14px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      height: '100px',
      resize: 'none',
    },
    button: {
      padding: '12px 20px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#45a049',
    },
    movieList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center',
      marginTop: '40px',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Admin Page</h2>
      <div style={styles.form}>
        <input
          type="text"
          placeholder="Movie Name"
          value={newMovie.name}
          onChange={(e) => setNewMovie({ ...newMovie, name: e.target.value })}
          style={styles.inputField}
        />
        <textarea
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
          style={styles.textareaField}
        />
        <input
          type="number"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
          style={styles.inputField}
        />
        <input
          type="date"
          value={newMovie.releaseDate}
          onChange={(e) => setNewMovie({ ...newMovie, releaseDate: e.target.value })}
          style={styles.inputField}
        />
        <input
          type="text"
          placeholder="Duration"
          value={newMovie.duration}
          onChange={(e) => setNewMovie({ ...newMovie, duration: e.target.value })}
          style={styles.inputField}
        />
        <button
          onClick={handleAddMovie}
          style={styles.button}
          onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
        >
          Add Movie
        </button>
      </div>
      <div style={styles.movieList}>
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
