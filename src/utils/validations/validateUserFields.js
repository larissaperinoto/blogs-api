const Joi = require('joi');

const fieldsRequired = 'Some required fields are missing';

const newUserSchema = Joi.object({
  displayName: Joi.string().min(8).required().messages({
    'string.empty': fieldsRequired,
    'string.min': '"displayName" length must be at least 8 characters long',
  }),
  email: Joi.string().required().email().messages({
    'string.empty': fieldsRequired,
    'string.email': '"email" must be a valid email',
  }),
  password: Joi.string().required().min(6).messages({
    'string.empty': fieldsRequired,
    'string.min': '"password" length must be at least 6 characters long',
  }),
  image: Joi.string().required().messages({
    'string.empty': '"image" is not allowed',
  }),
});

const validateUserFields = (body) => {
  const { error } = newUserSchema.validate(body);
  if (error) return error.details[0].message;
};

module.exports = validateUserFields;