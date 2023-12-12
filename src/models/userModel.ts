import mongoose, { Schema, model } from "mongoose";

export enum UserType {
  employee = "employee",
  employer = "employer",
}

const userSchema = new Schema(
  {
    firstName: String,
    lastName: {
      type: String,
      required: true,
    },
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
    userType: {
      required: true,
      type: String,
      enum: ["employee", "employer"],
      default: "employee",
    },
  },
  {
    timestamps: true,
  },
);

const UserModel = mongoose.models.User || model("User", userSchema);

export default UserModel;
