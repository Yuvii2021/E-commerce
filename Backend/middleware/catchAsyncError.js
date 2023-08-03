module.exports = (theFunc) => (req, res, next) => {
    Promise.resolve(theFunc(req, res, next)).catch(next);
  };

//   The catch block does not generate the error itself. Instead, it acts as a handler for any errors that may occur within the theFunc function. If an error occurs within theFunc, the catch block will be triggered, and it will call the next function with the error as an argument.

// The purpose of passing the error to the next function is to propagate the error to the next middleware function in the chain. By calling next(error), the Express.js framework understands that an error has occurred and will skip any remaining middleware functions in the current chain and move to the error handling middleware (if it's defined).

// In summary, the catch block ensures that any errors thrown within theFunc are caught and passed to the next function, which allows the error to be propagated to the next middleware or error handler.
