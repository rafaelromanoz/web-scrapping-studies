import express from 'express';
import registerProductController from '../controllers/registerController';

const registerRouter = express.Router();

registerRouter.post('/', registerProductController);

export default registerRouter;
