import { NextFunction, Request, Response } from 'express';
import { getProductByCategoryService } from '../services/registerService';
import { registerProductModel } from '../models/registerModel';

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

const getProductByCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { category } = req.query;
    const products = await getProductByCategoryService(category);
    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

export { getProductByCategoryController, registerProductController };
