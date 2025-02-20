import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ["TO-DO", "IN-PROGRESS", "DONE"], default: "TO-DO" },
  archived: { type: Boolean, default: false },
});

export default mongoose.model("Task", taskSchema);
