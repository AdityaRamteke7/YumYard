import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://YumYard:gTE46eryWp4bvOs9@cluster0.younxjh.mongodb.net/yum-yard").then(()=>console.log("Database is connneted"))
}
 