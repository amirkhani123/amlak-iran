const { Schema, models, model, SchemaTypes } = require("mongoose");

const profileSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    realState: {
      type: String,
      required: true,
    },
    constructionDate: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["villa", "apartment", "store", "office"],
    },
    rules: {
      type: [String],
      default: [],
    },
    amenities: {
      type: [String],
      default: [],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "modelUser",
    },
    published: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const modelProfile =
  models.modelProfile || model("modelProfile", profileSchema);

export default modelProfile;
