import mongoose, { Schema, models } from "mongoose";
import { postSchema } from "./post";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    posts: [postSchema],
    postCount: {
      type: Number,
      default: 0,
    },
    bio: {
      type: String,
      default: "Add Bio.",
    },
    followerCount: {
      type: Number,
      default: 0,
    },
    followingCount: {
      type: Number,
      default: 0,
    },
    followingCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;
