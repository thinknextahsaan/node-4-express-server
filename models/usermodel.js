const mongoose = require("mongoose");

// create a schema for user
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    fullName: {
        type: String,
        trim: true,
        default: "",
    },
    address: {
        type: {
            city: { type: String, required: true },
            zip: { type: String, required: true },
        },
        default: {
            city: "NA",
            zip: "NA",
        },
    },
});
// connect to database
const User = mongoose.model("User", userSchema);

module.exports = User;

// use the schema to interact with your database
