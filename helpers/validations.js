const { body } = require("express-validator");

// body, params, headers, query, cookie
// ""
const registerValidations = [
    body("username")
        .trim()
        .notEmpty()
        .withMessage("Username must not be empty")
        .isLength({ min: 6, max: 40 })
        .withMessage("Username must be within 6 to 40 Characters long!"),
    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email must not be empty")
        .isEmail()
        .withMessage("Must be a valid email."),
    body("password")
        .trim()
        .notEmpty()
        .withMessage("Password must not be empty"),
];

module.exports = {
    registerValidations,
};
