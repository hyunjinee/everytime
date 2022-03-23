import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  article: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Article",
  },
  content: {
    type: String,
    required: [true, "Please write a content"],
  },
  anonymous: {
    type: Boolean,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("Comment", commentSchema);
