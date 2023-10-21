import mongoose from "mongoose";

const userColletion = "users";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
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

const userModel = mongoose.model(userColletion, userSchema);

export default userModel;
