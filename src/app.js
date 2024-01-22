require("dotenv").config();
const express = require("express");
// const morgan = require("morgan");
const app = express();

const userRoutes = require("./routes/UserRoutes");
const connectToDB = require("./db/DbConnection");
const { redirect } = require("./middlewares/Redirect");

app.use(express.json());
// app.use(morgan("combined"));

connectToDB();

app.use(redirect);
app.use("/blog/api", userRoutes);

module.exports = app;