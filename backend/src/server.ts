import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import registerRouter from './routes/registerRouter';
import errorHandler from './middlewares/errorHandler';
dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/register', registerRouter);
app.get('/', (req, res) => {
  return res.status(400).json({ message: 'deu certo' });
});
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}! 🏆`);
});
