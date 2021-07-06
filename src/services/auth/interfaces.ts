export interface IRequest {
  credentials?: RequestCredentials;
  endpoint: string;
  config?: RequestInit;
}

export class RequestError extends Error {
  public message: string;
  public status?: number;
  constructor(message: string) {
    super();
    this.message = message;
  }
}
