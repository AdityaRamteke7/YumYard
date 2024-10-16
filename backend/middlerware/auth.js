// import jwt from "jsonwebtoken";

// const authMiddleware = async (req, res, next) => {
//   const token = req.headers; // Extract token from the 'Authorization' header

//   if (!token) {
//     return res.status(401).json({
//       success: false,
//       message: "Not authorized, please log in again",
//     });
//   }

//   try {
//     const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
//     req.body.userId = decodedToken.id; // Extract only the 'id' field, assuming it's present in the token
//     next();
//   } catch (error) {
//     console.log(error);
//     return res.status(401).json({
//       success: false,
//       message: "Invalid or expired token, please log in again",
//     });
//   }
// };

// export default authMiddleware;

import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({
      success: false,
      message: "Not authorized login again",
    });
  }

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export default authMiddleware;
