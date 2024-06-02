import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: String,
    id: Number,
    status: String,
    location: String,
    time: String,
    image: String,
  },
  { collection: "students" });
export default studentSchema;