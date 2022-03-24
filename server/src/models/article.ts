import { findOneUser } from "./../services/user.service";
import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

autoIncrement.initialize(mongoose.connection);
interface IArticle {
  articleNumber: number;
  title: string;
  content: string;
  anonymous: boolean;
  vote: string[];
  comment: string[];
  user: string[];
  createdAt: Date;
  updatedAt: Date;
}

interface IArticleDocument extends IArticle, mongoose.Document {}

interface IArticleModel extends mongoose.Model<IArticleDocument> {
  findByArticleNumber: (
    articleNumber: string | number
  ) => Promise<IArticleDocument>;
}

const articleSchema = new mongoose.Schema({
  articleNumber: {
    type: Number,
  },
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
  // const article = this;
});

articleSchema.statics.findByArticleNumber = async function (
  articleNumber: string | number
) {
  return await this.findOne({ articleNumber });
};

articleSchema.plugin(autoIncrement.plugin, {
  model: "Station",
  field: "articleNumber",
  startAt: 1,
  incrementBy: 1,
});

export default mongoose.model<IArticleDocument, IArticleModel>(
  "Article",
  articleSchema
);
