import Movie from '../models/Movie.js';

// Get all movies
const getMovies = async (req, res) => {
  try {
    const movies = await Movie?.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Add a movie (Admin only)
const addMovie = async (req, res) => {
  const { name, description, rating, releaseDate, duration } = req.body;

  try {
    const movie = new Movie({
      name,
      description,
      rating,
      releaseDate,
      duration,
    });

    await movie.save();
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ message: 'Error adding movie' });
  }
};

// Update a movie (Admin only)
const updateMovie = async (req, res) => {
  const { id } = req.params;
  const { name, description, rating, releaseDate, duration } = req.body;

  try {
    const movie = await Movie.findById(id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });

    movie.name = name || movie.name;
    movie.description = description || movie.description;
    movie.rating = rating || movie.rating;
    movie.releaseDate = releaseDate || movie.releaseDate;
    movie.duration = duration || movie.duration;

    await movie.save();
    res.json(movie);
  } catch (error) {
    res.status(500).json({ message: 'Error updating movie' });
  }
};

// Delete a movie (Admin only)
const deleteMovie = async (req, res) => {
  const { id } = req.params;

  try {
    const movie = await Movie.findById(id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });

    await movie.remove();
    res.json({ message: 'Movie deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting movie' });
  }
};

export { getMovies, addMovie, updateMovie, deleteMovie };
