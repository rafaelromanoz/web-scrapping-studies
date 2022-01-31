import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import registerRouter from './routes/registerRouter';
import errorHandler from './middlewares/errorHandler';

dotenv.config();

const PORT = process.env.PORT || 3010;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/register', registerRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}! 🏆`);
});
