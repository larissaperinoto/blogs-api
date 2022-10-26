const Joi = require('joi');

const fildsRequisred = 'Some required fields are missing';

const newUserSchema = Joi.object({
  displayName: Joi.string().min(8).required().messages({
    'sting.required': fildsRequisred,
    'string.empty': fildsRequisred,
    'string.min': '"displayName" length must be at least 8 characters long',
  }),
  email: Joi.string().required().email().messages({
    'any.required': fildsRequisred,
    'string.empty': fildsRequisred,
    'string.email': '"email" must be a valid email',
  }),
  password: Joi.string().required().min(6).messages({
    'any.required': fildsRequisred,
    'string.empty': fildsRequisred,
    'string.min': '"password" length must be at least 6 characters long',
  }),
  image: Joi.string().required().messages({
    'any.required': '"image" is not allowed',
    'string.empty': '"image" is not allowed',
  }),
});

const validateNewUser = (body) => {
  const { error } = newUserSchema.validate(body);
  if (error) return error.details[0].message;
};

module.exports = validateNewUser;