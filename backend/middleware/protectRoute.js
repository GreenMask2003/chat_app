import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute =  async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({error: "Unauthorized- No Token Provided"});     // 401 means not authorized
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if (!decoded) {
            return res.status(401).json({error: "Unauthorized- Invalid Token"});     
        }

        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(404).json({error: "User not found"});
        }

        req.user = user;
        next();

    } catch (error) {
        console.log("Error in protectRoute Middleware:",error.message);
        res.staus(500).json({error:"Internal Server Error💀"});
    }
};

export default protectRoute;