export interface IError {
  message: string;
  statusCode: number;
}

abstract class Error implements IError {
  public abstract readonly message: string;

  public abstract readonly statusCode: number;
}

export default Error;
