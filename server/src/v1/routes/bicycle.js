const router = require('express').Router();
const { body, param } = require('express-validator');
const validation = require('../handlers/validation');
const bicycleController = require('../controllers/bicycle');

const strings_min_value = 5;

router.get('/', bicycleController.getAll);

router.post(
  '/',
  body('name')
    .isLength({ min: strings_min_value })
    .notEmpty()
    .withMessage(`name must be at least ${strings_min_value} characters`),
  body('type')
    .isLength({ min: strings_min_value })
    .notEmpty()
    .withMessage(`type must be at least ${strings_min_value} characters`),
  body('color')
    .isLength({ min: strings_min_value })
    .notEmpty()
    .withMessage(`color must be at least ${strings_min_value} characters`),
  body('description')
    .isLength({ min: strings_min_value })
    .notEmpty()
    .withMessage(`description must be at least ${strings_min_value} characters`),
  body('wheel_size').isNumeric().notEmpty(),
  body('price').isNumeric().notEmpty(),
  validation.validate,
  bicycleController.create,
);

router.delete(
  '/:bicycleId',
  param('bicycleId').custom((value) => {
    if (!validation.isObjectId(value)) return Promise.reject('invalid id');
    else return Promise.resolve();
  }),
  validation.validate,
  bicycleController.delete,
);

router.patch(
  '/:bicycleId',
  param('bicycleId').custom((value) => {
    if (!validation.isObjectId(value)) return Promise.reject('invalid id');
    else return Promise.resolve();
  }),
  body('status')
    .isLength({ min: 4 })
    .notEmpty()
    .withMessage(`status must be at least ${4} characters`),
  validation.validate,
  bicycleController.update,
);

module.exports = router;
