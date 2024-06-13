import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("ClassesModel", schema);
export default model;