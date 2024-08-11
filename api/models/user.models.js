import mongoose from "mongoose";

const useSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    avatar: {
      type: String,
      default: "https://pixabay.com/vectors/blank-profile-data:image/png",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", useSchema);

export default User;
