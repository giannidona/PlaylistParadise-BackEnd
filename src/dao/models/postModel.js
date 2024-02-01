import mongoose from "mongoose";

const postCollection = "posts";

const postSchema = new mongoose.Schema({
  playlistLink: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const postModel = mongoose.model(postCollection, postSchema);
export { postModel };
