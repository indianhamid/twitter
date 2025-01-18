import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ error: "Unauthorized: No token provided" });
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedToken) {
      return res.status(401).json({ error: "Unauthorized: Invalid token" });
    }
    const user = await User.findById(decodedToken.userId).select("-password");
    if (!user) {
      return res.status(401).json({ error: "Unauthorized: user not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("error in protectRoute middleware", error.message);
    res.status(500).json({ error: "Internal server error-p" });
  }
};
