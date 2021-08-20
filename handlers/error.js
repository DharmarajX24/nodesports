export default class NSError {
  code = 500;
  message = "Internal Server Error";

  constructor(code, error, internalError) {
    this.code = code;
    this.error =
      process.env.NODE_ENV === "DEVELOPMENT" ? internalError ?? error : error;
  }
}
