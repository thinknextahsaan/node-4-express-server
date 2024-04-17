const express = require("express");
const { getAllUsers, registerUser } = require("../controllers/usercontroller");
const { registerValidations } = require("../helpers/validations");

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/create", registerValidations, registerUser);

module.exports = userRouter;
