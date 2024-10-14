import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://adityazeus1:MVGqFFZTZJrieZGG@yumyardcluster.uaz7z.mongodb.net/?retryWrites=true&w=majority&appName=YumYardCluster"
    )
    .then(() => console.log("Database is connneted"));
};
