import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {type: String, enum: ["Teacher", "Administrator", "Hall monitor"]}
  },
  { collection: "users" });
export default usersSchema;