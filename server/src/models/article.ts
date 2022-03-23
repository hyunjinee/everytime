import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please write a title"],
  },
  content: {
    type: String,
    required: [true, "Please write a content"],
  },
  anonymous: {
    type: Boolean,
  },
  vote: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  comment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
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

articleSchema.pre("findOneAndDelete", function (next) {
  const article = this;
});

export default mongoose.model("Article", articleSchema);
