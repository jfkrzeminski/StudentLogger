import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("PasslogModel", schema);
export default model;