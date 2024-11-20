import express from 'express';
import cors from 'cors';
import { bookRouter } from './routes/books';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/api/books', bookRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});