require("dotenv").config();
const express = require("express");
// const morgan = require("morgan");
const app = express();

const PORT = process.env.port || 3000;

const userRoutes = require("./routes/UserRoutes");
const {connectToDB} = require("./db/DBConnection.js");
const { redirect } = require("./middlewares/Redirect");

app.use(express.json());

connectToDB();

app.use(redirect);
app.use("/blog/api", userRoutes);


app.listen(PORT, ()=>{
    console.log("Server is running on port :",PORT);
})

module.exports = app;