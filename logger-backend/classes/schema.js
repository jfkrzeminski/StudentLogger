import mongoose from "mongoose";

const classesSchema = new mongoose.Schema({
    letters: [String],
    period: Number,
    roster: [String],
    teacher: String,
    room: String,
    zone: String,
    semester: {type: String, enum: ["Fall", "Spring", "Summer"], default: "Fall"},
    fullyear: {type: Boolean, default: true}
  },
  { collection: "classes" });
export default classesSchema;