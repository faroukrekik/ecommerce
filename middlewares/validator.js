const { check, validationResult } = require("express-validator");

exports.registerRules = () => [
  check("name", "this field is required").notEmpty(),
  check("email", "this field is required").notEmpty(),
  check("email", "this field should be a valid email").isEmail(),
  check("password", "this field should at least 6 caracters").isLength({
    min: 6,
  }),
];

exports.Validatorr = (req, res, next) => {
  const errors = validationResult(req);

  errors.isEmpty() ? next() : res.status(406).json({ errors: errors.array() });
};
