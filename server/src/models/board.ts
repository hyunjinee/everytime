import mongoose from "mongoose";

import { IUser } from "./user";

interface IBoard {
  title: String;
  content: String;
  writer: String;
  user: IUser;
}

interface BoardDocument extends IBoard, mongoose.Document {}

// export interface BoardDoc extends mongoose.Document {
//   title: string;
//   content: string;
//   writer: string;
// }

// interface BoardModel extends mongoose.Model<BoardDoc> {}

const boardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  writer: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Board = mongoose.model<BoardDocument>("Board", boardSchema);
