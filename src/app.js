require("dotenv").config();
const express = require("express");
// const morgan = require("morgan");
const app = express();

const PORT = process.env.port || 3000;

const userRoutes = require("./routes/UserRoutes");
const connectToDB = require("./db/DbConnection");
const { redirect } = require("./middlewares/Redirect");

app.use(express.json());
// app.use(morgan("combined"));

connectToDB();

app.use(redirect);
app.use("/blog/api", userRoutes);


app.listen(PORT, ()=>{
    console.log("Server is running on port :",PORT);
})

module.exports = app;