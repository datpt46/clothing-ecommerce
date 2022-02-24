export interface ResponseGenerator<T> {
  data: T;
  status: number;
  message?: string;
  config?: any;
  headers?: any;
  request?: any;
  statusText?: string;
}

export interface ErrorGenerator<T> {
  message: string;
  response: ResponseGenerator<T>;
}

export interface ResponseSagaCallGenerator<T> {
  response: ResponseGenerator<T>;
  error: ErrorGenerator<T>;
}
