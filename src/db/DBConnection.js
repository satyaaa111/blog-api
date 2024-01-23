const mongoose = require("mongoose");
require("dotenv").config();


const connectToDB = async () => {

  // console.log(process.env.MONGODBSECRET)
  
  try {
    console.log("trying to connect to mongodb...");
    await mongoose.connect(process.env.MONGODBSECRET);
    console.log("MongoDb database connected");
  } catch (error) {
    console.error(
      `Establishing connection to Database encountered some error: ${error}`
    );
  }
};

module.exports = {connectToDB};