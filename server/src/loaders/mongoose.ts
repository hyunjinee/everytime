import mongoose from "mongoose";

export default async (): Promise<void> => {
  await mongoose.connect("mongodb://127.0.0.1:27017/everytime", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  });
};
