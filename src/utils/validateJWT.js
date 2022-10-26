const jwt = require('jsonwebtoken');

const { UserService } = require('../services');

const { JWT_SECRET: secret } = process.env;

const validateJWT = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Token não encontrado' });
  }

    const decoded = jwt.verify(token, secret);

    const user = await UserService.getByUserId(decoded.data.userId);

    if (!user) {
      return res.status(401).json({ message: 'Erro ao procurar usuário do token.' });
    }

    req.user = user;

    next();
    return res.status(401).json({ message: '' });
};

module.exports = validateJWT;