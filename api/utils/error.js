export const errorHandler = (statusCode, message) => {
    // JS has Error contructor, which create custom error
    const error = new Error();
    error.statusCode = statusCode;
    error.message = message;
    return error;
};