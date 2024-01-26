import mongoose from "mongoose";

const userCollection = "users";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile_image: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model(userCollection, userSchema);
export { userModel };
