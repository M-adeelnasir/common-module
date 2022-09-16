import { NextFunction, Response, Request } from 'express';
import { RequestValidationError } from '../errors/reqValidation-error';
import { validationResult } from 'express-validator';
export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
  }
  next();
};
