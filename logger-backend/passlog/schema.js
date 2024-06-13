import mongoose from "mongoose";

const passlogSchema = new mongoose.Schema({
    id_student: String,
    id_issuer: String,
    origin: String,
    destination: String,
    time_start: Date,
    time_end: Date
  },
  { collection: "passlog" });
export default passlogSchema;