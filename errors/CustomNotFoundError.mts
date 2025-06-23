class CustomNotFoundError extends Error {
  name: string;
  statusCode: number;

  constructor(errorMessage: string) {
    super(errorMessage);
    this.statusCode = 404;
    this.name = "NotFoundError";
  }
}

export default CustomNotFoundError;
