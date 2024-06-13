import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("CalendarModel", schema);
export default model;