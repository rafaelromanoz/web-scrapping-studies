import { NextFunction, Request, Response } from 'express';

const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error.statusCode) {
    const { statusCode, message } = error;
    return res.status(statusCode).json({ message });
  }
  return res.status(500).json({ message: 'Server error' });
};

export default errorHandler;
