import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import registerRouterMercadoLivre from './routes/registerRouterMercadoLivre';
import errorHandler from './middlewares/errorHandler';
import registerRouterBuscape from './routes/registerRouterBuscape';

dotenv.config();

const PORT = process.env.PORT || 3010;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/register/mercadoLivre', registerRouterMercadoLivre);
app.use('/register/buscape', registerRouterBuscape);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}! 🏆`);
});
