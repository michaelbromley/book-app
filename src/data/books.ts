export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  rating: number;
  publishedYear: number;
}

export const books: Book[] = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    rating: 4.5,
    publishedYear: 1925
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    genre: "Science Fiction",
    rating: 4.8,
    publishedYear: 1949
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    rating: 4.7,
    publishedYear: 1813
  }
];