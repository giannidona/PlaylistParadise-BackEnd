import mongoose from "mongoose";

const postCollection = "posts";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  post_image: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const postModel = mongoose.model(postCollection, postSchema);

export default postModel;
