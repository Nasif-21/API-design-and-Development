import { Router } from "express";
import { getusers,getByUserId } from "../controller/user.controller.js";
import authMiddleWare from "../middleware/auth.middleware.js";

const router=Router();

//Define routing path, data will get from controller, direction given by router

router.get("/users",authMiddleWare,getusers)
router.get("/user/:id",getByUserId)

export default router;