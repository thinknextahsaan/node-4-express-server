require("dotenv").config();
const config = {
    database_url: process.env.MONGO_URL,
    port: process.env.PORT,
};

module.exports = Object.freeze(config);
