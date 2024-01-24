const mongoose = require('mongoose');
// import User from './users';
// import {Schema} from "mongoose";

//User schema as for what type of content there is to put
const blogSchema = {

  user :{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  title : {
     type: String,
     required: true
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
}

//to create a collection
const Blog = mongoose.model("blog", blogSchema);

module.exports = Blog