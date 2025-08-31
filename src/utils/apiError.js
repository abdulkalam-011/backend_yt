class apiError extends Error {
  constructor(
    statusCode,
    errors = [],
    stack = "",
    message = "something went wong"
  ){
    super(message); // Call the parent class constructor
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;
    this.errors = errors;
    this.data = null;
    this.message = message;
    this.success = false;
    if (stack) {
      this.stack = stack;
    }else{
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { apiError };
