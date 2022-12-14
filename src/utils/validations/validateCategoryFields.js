const Joi = require('joi');

const nameSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': '"name" is required',
  }),
});

const validateCategoryFields = (body) => {
  const { error } = nameSchema.validate(body);
  if (error) return error.details[0].message;
};

module.exports = validateCategoryFields;