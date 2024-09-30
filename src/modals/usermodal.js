import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    bio: {
        type: String
    },
    password: {
        type: String,
        required: true  // Add this if password is mandatory
    },
    avatar: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s"
    }
}, { timestamps: true });

// Check if the User model already exists, reuse it if it does
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
