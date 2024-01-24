const mongoose = require('mongoose');
// import {Schema} from "mongoose";


//Blogs schema as for what type of description there is to put
const userSchema = {
  name : {
     type: String,
     required: true
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  isVerified:{
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now
  }

}

//to create a collection
const User = mongoose.model("user", userSchema);

module.exports = User;