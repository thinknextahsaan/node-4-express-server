const mongoose = require("mongoose");
const config = require("./config");

async function connectDB() {
    try {
        mongoose.connection.on("open", () => {
            console.log("Connected to database");
        });
        mongoose.connection.on("error", (err) => {
            console.log(err);
        });

        await mongoose.connect(config.database_url);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;
