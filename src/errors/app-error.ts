import { IError } from './abstract-error';

export type IAppError = IError;

class AppError extends Error implements IAppError {
  public readonly message: string;

  public readonly statusCode: number;

  constructor(message: string, statusCode = 400) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;
