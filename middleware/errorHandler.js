// Catches errors thrown/rejected inside async route handlers (via asyncWrap) or passed to next(err).
function errorHandler(err, req, res, next) {
  console.error('[error]', err);

  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message });
  }
  if (err.code === 11000) {
    return res.status(409).json({ error: 'Duplicate value', details: err.keyValue });
  }

  res.status(err.status || 500).json({ error: err.message || 'Internal server error' });
}

// Wraps an async controller so thrown errors / rejected promises reach errorHandler
// instead of crashing the process.
function asyncWrap(fn) {
  return (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
}

// Wraps every function on a controller module with asyncWrap, so route files
// can just `const { foo, bar } = wrapAll(require('../controllers/x'))`.
function wrapAll(controller) {
  const wrapped = {};
  for (const key of Object.keys(controller)) {
    wrapped[key] = asyncWrap(controller[key]);
  }
  return wrapped;
}

module.exports = { errorHandler, asyncWrap, wrapAll };
