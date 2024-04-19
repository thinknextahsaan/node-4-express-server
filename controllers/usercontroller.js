const brcyptjs = require("bcryptjs");
const requestValidator = require("../helpers/requestvalidator");
const User = require("../models/usermodel");
const cloudinary = require("../config/cloudinary");

const getAllUsers = (req, res) => {
    res.status(200).json({
        message: "users found",
    });
};

const registerUser = async (req, res) => {
    try {
        let error = requestValidator(req);

        if (error) {
            return res.status(400).json({
                error: error[0],
                success: false,
            });
        }

        let data = req.body;
        let file = req.file;

        let res = await cloudinary.uploader.upload(req.file.path);
        // secure_url, public_id

        let existingUser = await User.findOne({
            $or: [{ username: data.username }, { email: data.email }],
        });

        if (existingUser) {
            return res.status(400).json({
                error: "Username or Email already in use. Please try with a different email or username.",
            });
        }
        let hashedPassword = await brcyptjs.hash(data.password, 10);

        let newuser = await User.create({
            ...data,
            password: hashedPassword,
            profilePicture: file.filename,
        });

        newuser = newuser.toObject();

        delete newuser.password;

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
