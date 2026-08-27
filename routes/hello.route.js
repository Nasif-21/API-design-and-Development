import { Router } from "express";
import { getHello } from "../controller/hello.controller.js";

const router=Router();

router.get("/",getHello)

export default router;