import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    email: {
      required: true,
      unique: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
      minlength: 4,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const UserModel = mongoose.models.User || model("User", userSchema);

export default UserModel;
