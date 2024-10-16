import express from "express";
import {
  addtoCart,
  removeCart,
  getCart,
} from "../controllers/CartController.js";

import authMiddleware from "../middlerware/auth.js";

const cartRoute = express.Router();

cartRoute.post("/add", authMiddleware, addtoCart);

cartRoute.post("/remove", authMiddleware, removeCart);

cartRoute.post("/get", authMiddleware, getCart);

export default cartRoute;
