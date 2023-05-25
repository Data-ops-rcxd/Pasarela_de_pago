import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: [true] },
    password: { type: String, required: [true] },
    email: { type: String, required: [true], unique: [true] },
    CDI: { type: Number, required: [true], unique: [true] },
    address: { type: String, required: [true] },
    phone: { type: String, required: [true], unique: [true] },
    isproccesed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);
