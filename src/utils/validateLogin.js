const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': 'Some required fields are missing',
    'string.empty': 'Some required fields are missing',
  }),
  password: Joi.string().required().min(5).messages({
    'any.required': 'Some required fields are missing',
    'string.empty': 'Some required fields are missing',
  }),
});

const validateLogin = (body) => {
  const { error } = loginSchema.validate(body);
  if (error) return error.details[0].message;
};

module.exports = validateLogin;
