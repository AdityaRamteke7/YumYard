import userModel from "../models/UserModels.js";

// add item to user cart
const addtoCart = async (req, res) => {
  try {
    const userData = await userModel.findOne({ _id: req.body.userId }); // Find user by ID
    let cartData = await userData.cartData; // Access cartData or initialize an empty object

    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1; // Initialize quantity for new item
    } else {
      cartData[req.body.itemId] += 1; // Increment quantity for existing item
    }

    await userModel.findByIdAndUpdate(req.body.userId, { cartData });

    res.json({ success: true, message: "Added to cart" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error" });
  }
};

// remove from the user cart
const removeCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Remove from cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error " });
  }
};
// fetch user cart data
const getCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error " });
  }
};

export { addtoCart, removeCart, getCart };
