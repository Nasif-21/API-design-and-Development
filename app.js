import express from "express"
import dotenv from "dotenv";
dotenv.config();
import helloRoute from "./routes/hello.route.js";
import userRoute from "./routes/users.route.js";
import authRoute from "./routes/auth.route.js";
import authMiddleWare from "./middleware/auth.middleware.js";

const app=express();

app.use(express.json());
//Do route register in app.js
//app.use(authMiddleWare);
app.use("/",helloRoute);
app.use("/",userRoute);
app.use("/",authRoute)

export default app;