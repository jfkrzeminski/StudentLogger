import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("PassesModel", schema);
export default model;