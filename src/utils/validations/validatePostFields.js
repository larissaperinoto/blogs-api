const Joi = require('joi');

const fieldsRequired = 'Some required fields are missing';

const postSchema = Joi.object({
  title: Joi.string().required().messages({
    'string.empty': fieldsRequired,
  }),
  content: Joi.string().required().messages({
    'string.empty': fieldsRequired,
  }),
  categoryIds: Joi.array().items(Joi.number().min(1).required()).required().messages({
    'array.empty': fieldsRequired,
    'string.empty': fieldsRequired,
  }),
});

const validatePost = (body) => {
  const { error } = postSchema.validate(body);
  if (error) return error.details[0].message;
};

module.exports = validatePost;