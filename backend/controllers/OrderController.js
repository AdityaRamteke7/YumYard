import orderModel from "../models/orderModel.js";
import userModel from "../models/UserModels.js";

import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
//Placing user order from frontend
const placeOrder = async (req, res) => {
  const frontendurl = "http:loaclhost:5173";

  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });
    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });
    const line_Item = req.body.items.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price,
      },
      quantity: item.quantity,
    }));
    line_Item.push({
      price_data: {
        currency: "inr",
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: 20,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      line_items: line_Item,
      mode: "payment",
      success_url: `${frontendurl}/verify?success=true&orderId ${newOrder._id}`,
      cancel_url: `${frontendurl}/verify?success=false&orderId ${newOrder._id}`,
    });
    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { placeOrder };
