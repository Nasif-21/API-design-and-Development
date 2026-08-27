import { Router } from "express";
import { signup,login } from "../controller/auth.controller.js";
import authMiddleWare, { isAdmin } from "../middleware/auth.middleware.js";

const route=Router();

route.post("/auth/create",authMiddleWare,isAdmin,signup);
// authMiddleware: Authentication
//isAdmin: Authorization
route.post("/auth/login",login);

export default route;

