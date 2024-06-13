import mongoose from "mongoose";

const calendarSchema = new mongoose.Schema({
    date: Date,
    letter: {type: String, enum: ["A", "B", "C", "D"]},
    half_day: {type: Boolean, default: false},
    vacation: {type: Boolean, default: false}
  },
  { collection: "calendar" });
export default calendarSchema;