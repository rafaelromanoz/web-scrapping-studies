import express from 'express';

const registerRouter = express.Router();

registerRouter.post('/', registerController);

export default registerRouter;
