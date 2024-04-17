const { validationResult } = require("express-validator");

const requestValidator = (req) => {
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
        return errors.array().map((err) => {
            return err.msg;
        });
    }
};

module.exports = requestValidator;
