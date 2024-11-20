import express from 'express';
import { Book, books } from '../data/books';

export const bookRouter = express.Router();

// GET /api/books
bookRouter.get('/', (req, res) => {
  // TODO: Implement filtering by genre and sorting by rating
  res.json(books);
});

// GET /api/books/:id
bookRouter.get('/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  res.json(book);
});

// POST /api/books
bookRouter.post('/', (req, res) => {
  // TODO: Add input validation
  const book: Book = {
    id: books.length + 1,
    ...req.body
  };
  books.push(book);
  res.status(201).json(book);
});

// PUT /api/books/:id
bookRouter.put('/:id', (req, res) => {
  // TODO: Add input validation and proper error handling
  const index = books.findIndex(b => b.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }

  books[index] = { ...books[index], ...req.body };
  res.json(books[index]);
});