const express = require("express");
const config = require("./config/config");
const connectDB = require("./config/db");
const userRouter = require("./routes/userroutes");
const cors = require("cors")

const app = express();

app.use(express.json());
app.use(cors())

app.use("/api/v1/user", userRouter);

connectDB().then(() => {
    app.listen(config.port, () =>
        console.log(`Server listening on port ${config.port}`)
    );
});