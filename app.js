const express = require("express");
const logger = require("morgan");

const app = express();

const userRouter = require("./routes/user/userRouter");

app.use(logger("dev"));

app.use(express.json());
//parsing form data/incoming data
app.use(express.urlencoded({ extended: false }));

app.use("/api/user", userRouter);

module.exports = app;


// app.use lets us create our paths

// exporting the app allows it to be imported on other pages