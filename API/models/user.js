import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 50 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: {
    type: String,
    default: "https://www.jbrhomes.com/wp-content/uploads/blank-avatar.png",
  },
  admin: { type: Boolean, default: false },
});

export default mongoose.model("User", userSchema);
