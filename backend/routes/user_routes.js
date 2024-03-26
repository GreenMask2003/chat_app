import express  from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersforSidebar } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersforSidebar);           //Unauthenticated users cannot access this with use of middleware.

export default router;
