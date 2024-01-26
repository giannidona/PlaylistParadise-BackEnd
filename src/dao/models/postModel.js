import mongoose from "mongoose";

const postCollection = "posts";

const postSchema = new mongoose.Schema({
  playlistLink: {
    type: String,
    required: true,
  },
  likesCounter: {
    type: String,
  },
  dateCreated: {
    type: Date,
  },
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});

const postModel = mongoose.model(postCollection, postSchema);
export { postModel };
