import express from "express";
import cors from "cors";
import pool from "./db.js";
import jwtAuthRouter from "./routes/jwtAuth.js";
import dashboardRouter from "./routes/dashboard.js";

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

// register and login routes
app.use("/auth", jwtAuthRouter);
app.use("/dashboard", dashboardRouter);

// Listening port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
