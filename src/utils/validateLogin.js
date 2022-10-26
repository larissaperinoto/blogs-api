const Joi = require('joi');

const fildsRequisred = 'Some required fields are missing';

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.required': fildsRequisred,
    'string.empty': fildsRequisred,
  }),
  password: Joi.string().required().min(5).messages({
    'string.required': fildsRequisred,
    'string.empty': fildsRequisred,
  }),
});

const validateLogin = (body) => {
  const { error } = loginSchema.validate(body);
  if (error) return error.details[0].message;
};

module.exports = validateLogin;
