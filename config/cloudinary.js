const { v2: cloudinary } = require("cloudinary");

cloudinary.config({
    cloud_name: "",
    api_secret: "",
    api_key: "",
});

module.exports = cloudinary;
