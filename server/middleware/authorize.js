import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export default function authorize(req, res, next) {
  // Get token from header
  const token = req.header("jwt_token");

  // Check if not token
  if (!token) {
    return res.status(403).json("not authorized");
  }
  // Verify token
  try {
    const verify = jwt.verify(token, process.env.jwtSecret);

    req.user = verify.user;

    next();
  } catch (err) {
    console.log(err.message);
    res.status(401).json({ msg: "Token is not valid" });
  }
}
