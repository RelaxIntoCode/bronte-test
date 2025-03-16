import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
  throw new Error("Please define MONGODB variable");
}

export async function dbConnect() {
  try {
    // connect to mongodb and check   111
    if (mongoose.connection.readyState === 1) {
      console.log("DB Already Connected");
      return;
    } else {
      console.log("DB Connecting");
      await mongoose.connect(MONGO_URL);
      console.log("DB Connected");
    }
  } catch (error) {
    console.error("Mongodb Error", error);
    throw new Error("Failed to Connect to DB");
  }
}
