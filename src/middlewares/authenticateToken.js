const jwt = require('jsonwebtoken');

const { JWT_SECRET: secret } = process.env;

const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  try {
    const user = jwt.verify(authorization, secret);
    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = authMiddleware;
