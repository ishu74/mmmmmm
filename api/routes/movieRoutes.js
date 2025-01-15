import express from 'express';
import { protect, isAdmin } from '../middleware/authMiddleware.js';
import { getMovies, addMovie, updateMovie, deleteMovie } from '../controllers/movieController.js';

const router = express.Router();

router.get('/', getMovies); // Public access
router.post('/', protect, isAdmin, addMovie); // Admin only
router.put('/:id', protect, isAdmin, updateMovie); // Admin only
router.delete('/:id', protect, isAdmin, deleteMovie); // Admin only

export default router;
