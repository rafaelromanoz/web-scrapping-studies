import { NextFunction, Request, Response } from 'express';
import registerProductModel from '../models/registerModel';

const registerProductController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const product = await registerProductModel(req.body);
    return res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

export default registerProductController;
