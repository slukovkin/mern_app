import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    length: { min: 10 },
  },
  description: {
    type: String,
    required: true,
    length: { min: 10 },
  },
  user: {
    type: String,
  },
});

export default mongoose.model("Post", PostSchema);
