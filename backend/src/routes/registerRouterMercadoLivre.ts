import express from 'express';
import {
  getProductByCategoryController,
  registerProductController,
} from '../controllers/registerProductsMercadoLivreController';

const registerRouter = express.Router();

registerRouter.post('/', registerProductController);
registerRouter.get('/', getProductByCategoryController);

export default registerRouter;
