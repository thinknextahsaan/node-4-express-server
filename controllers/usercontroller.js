const { validationResult } = require("express-validator");
const requestValidator = require("../helpers/requestvalidator");
const User = require("../models/usermodel");

const getAllUsers = (req, res) => {
    res.status(200).json({
        message: "users found",
    });
};

const registerUser = async (req, res) => {
    try {
        let error = requestValidator(req);

        if (error) {
            res.status(400).json({
                error: error[0],
                success: false,
            });
        }

        let data = req.body;

        let existingUser = await User.findOne({
            $or: [{ username: data.username }, { email: data.email }],
        });

        if (existingUser) {
            return res.status(400).json({
                error: "Username or Email already in use. Please try with a different email or username.",
            });
        }

        let newuser = await User.create(data);

        res.json({
            message: "Registered Successfully",
            success: true,
            user: newuser,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
            success: false,
        });
    }
};

module.exports = {
    getAllUsers,
    registerUser,
};
