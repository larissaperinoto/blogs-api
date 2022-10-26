const jwt = require('jsonwebtoken');

const createToken = (body) => {
  const { JWT_SECRET } = process.env;
  const payload = { ...body, admin: true };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h', algorithm: 'HS256' });
  return token;
};

module.exports = createToken;