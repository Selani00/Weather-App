
// to create the custome errors and handle them in the middleware
export const errorHandler = (statusCode, message) => {
    const error = new Error();
    error.statusCode = statusCode;
    error.message = message;
    return error;

}