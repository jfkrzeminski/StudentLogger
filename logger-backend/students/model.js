import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("StudentsModel", schema);
export default model;