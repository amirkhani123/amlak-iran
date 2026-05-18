import { connect, connections } from "mongoose";

export default async function connectDB() {
  if (connections[0].readyState) return;
  try {
    await connect(process.env.MONGO_URI);
    console.log("connect to DB :)");
  } catch {
    console.log("can not connect to DB :(");
  }
}
