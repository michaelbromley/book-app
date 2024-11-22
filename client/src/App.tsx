import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Book } from '../../src/data/books';

let globalBooks: Book[] = [];

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  const [publishedYear, setPublishedYear] = useState('');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3000/api/books');
    setBooks(response.data);
    globalBooks = response.data;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newBook = {
      title,
      author,
      genre,
      rating: Number(rating),
      publishedYear: Number(publishedYear),
    };

    await axios.post('http://localhost:3000/api/books', newBook);
    setTitle('');
    setAuthor('');
    setGenre('');
    setRating('');
    setPublishedYear('');
    fetchBooks();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Book Library</h1>

      <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          placeholder="Genre"
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          placeholder="Rating"
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="number"
          value={publishedYear}
          onChange={(e) => setPublishedYear(e.target.value)}
          placeholder="Published Year"
          className="w-full mb-4 p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Book
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div key={book.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">{book.title}</h2>
            <p className="text-gray-600 mb-1">Author: {book.author}</p>
            <p className="text-gray-600 mb-1">Genre: {book.genre}</p>
            <p className="text-gray-600 mb-1">Rating: {book.rating}</p>
            <p className="text-gray-600">Published: {book.publishedYear}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;