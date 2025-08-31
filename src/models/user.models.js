import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
    },
    fullName: {
      ttype: String,
    },
    email: {
      type: String,
      requiered: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
   avatar:{
    type:String
   },
    banner: {
      type: string,
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "video",
      },
    ],
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
