import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/:id", protectRoute ,getMessages);
router.post("/send/:id", protectRoute ,sendMessage);  //pR(Middleware) used for authorization of user(login or not) before sending messages.

export default router;