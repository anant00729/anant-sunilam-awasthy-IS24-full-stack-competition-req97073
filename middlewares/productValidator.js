const { body, param } = require('express-validator');

const validateProductFields = [
  body('productId')
    .exists().withMessage('productId is required')
    .isString().withMessage('productId must be a string'),
  body('productName')
    .exists().withMessage('productName is required')
    .isString().withMessage('productName must be a string'),
  body('productOwnerName')
    .exists().withMessage('productOwnerName is required')
    .isString().withMessage('productOwnerName must be a string'),
  body('developers')
    .isArray().withMessage('developers must be an array')
    .notEmpty().withMessage('developers cannot be empty')
    .custom(developers => developers.every(d => typeof d === 'string'))
    .withMessage('developers must be an array of strings'),
  body('scrumMasterName')
    .exists().withMessage('scrumMasterName is required')
    .isString().withMessage('scrumMasterName must be a string'),
  body('startDate')
    .exists().withMessage('startDate is required')
    .isISO8601().withMessage('startDate must be a valid ISO 8601 date'),
  body('methodology')
    .exists().withMessage('methodology is required')
    .isString().withMessage('methodology must be a string'),
];

const validateProductId = [
  param('productId')
  .exists().withMessage('productId is required')
  .isString().withMessage('productId must be a string')
  .matches(/^[0-9a-fA-F]{8}$/).withMessage('productId must be a valid hexadecimal string with 8 characters')
]

const validateSearch = [
  body('query')
    .notEmpty()
    .withMessage('Query cannot be empty'),
  body('searchType')
    .isIn(['SM', 'D'])
    .withMessage('Search type should be either "SM" or "D"')
]

module.exports = { validateProductFields, validateProductId, validateSearch };