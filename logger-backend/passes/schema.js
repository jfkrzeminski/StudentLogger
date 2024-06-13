import mongoose from "mongoose";

const passesSchema = new mongoose.Schema({
    id_student: String,
    id_issuer: String,
    origin: String,
    destination: String,
    zone: String,
    time: Date
  },
  { collection: "passes" });
export default passesSchema;