import mongoose from "mongoose";

const postCollection = "posts";

const postSchema = new mongoose.Schema({
  playlistLink: {
    type: String,
    required: true,
  },
  likesCounter: {
    type: Number,
    default: 0,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});

const postModel = mongoose.model(postCollection, postSchema);
export { postModel };
