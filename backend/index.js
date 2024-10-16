import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/FoodRoute.js";
import userRouter from "./routes/UserRoute.js";
import "dotenv/config.js";
import cartRoute from "./routes/CartRoute.js";
import orderRouter from "./routes/orderRoute.js";

//app config
const app = express();
const port = 5002;

//middleware
app.use(express.json());
app.use(cors());

//Db connection
connectDB();

// api end points
app.use("/api/food", foodRouter);
app.use("/image", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRouter);

// Test route to check if the API is working
app.get("/", (req, res) => {
  res.send("API is working");
});

// Start server
app.listen(port, () => {
  console.log(`Server is up at ${port}`);
});
