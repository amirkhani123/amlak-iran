import { model, models, Schema } from "mongoose";

const schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "USER",
  },
  createAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});
const modelUser = models.modelUser || model("modelUser", schema);
export default modelUser;
