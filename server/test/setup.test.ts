import mongoose from "mongoose";

beforeAll(async () => {
  const mongoUri = "mongodb://localhost/bang";
  mongoose.connect(mongoUri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoose.connection.close();
});
