import express from "express";

const app = express();
app.use(express.json());

// route imports
import userRoute from "./src/routes/user.route.js";
import postRouter from "./src/routes/post.route.js";

app.use("/api/v1/users", userRoute);
app.use("/api/v1/posts", postRouter);

export default app;


// examples route: http://localhost:4000/api/v1/users/register