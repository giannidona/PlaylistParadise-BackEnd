import mongoose from "mongoose";

const postCollection = "posts";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    requied: true,
  },
  description: {
    type: String,
    requied: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  post_image: {
    type: String,
    require: true,
  },
  user: {
    tpye: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});

const postModel = (postCollection, postSchema);

export default postModel;
