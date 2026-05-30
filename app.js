import express from "express"

const app = express(); //create an exoress app
app.use(express.json());

//route import
import userRoute from "./src/routes/user.route.js";
app.use("/api/v1/users",userRoute);

// examples route: http://localhost:4000/api/v1/users/register

export default app