import { Request, Response, NextFunction } from 'express';
import { ParsedQs } from 'qs';
import { registerProductsBuscapeService } from '../services/registerProductsBuscapeService';

const registerProductsBuscapeController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {
      category,
    }: ParsedQs | string | undefined | ParsedQs[] | string[] | undefined | any =
      req.query;
    const products = await registerProductsBuscapeService(category);
    return res.status(200).json(products);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export { registerProductsBuscapeController };
