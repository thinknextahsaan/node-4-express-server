const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
    },
    filename: (req, file, cb) => {
        let prefix =
            Math.floor(Math.random() * 1000000) + "-" + Date.now() + "-";
        let filename = encodeURI(file.originalname).split(" ").join("-");
        cb(null, prefix + filename);
    },
});

const upload = multer({
    storage: storage,
});

module.exports = upload;
