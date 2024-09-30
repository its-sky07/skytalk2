import mongoose from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log("database connected")
        
        
    } catch (error) {
        console.log("MongoDB not connected",error.message);
        
    }
}