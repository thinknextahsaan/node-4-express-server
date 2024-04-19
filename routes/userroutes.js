const express = require("express");
const { getAllUsers, registerUser } = require("../controllers/usercontroller");
const { registerValidations } = require("../helpers/validations");
const upload = require("../helpers/upload");

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post(
    "/create",
    upload.fields([
        {
            name: "profilePicture",
            maxCount: 1,
        },
        {
            name: "coverPhoto",
            maxCount: 1,
        },
    ]),
    registerValidations,
    registerUser
);

module.exports = userRouter;
