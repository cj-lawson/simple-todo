import express from "express";
import pool from "../db.js";
import authorize from "../middleware/authorize.js";

const router = express.Router();

router.post("/", authorize, async (req, res) => {
  try {
    const user = await pool.query(
      "SELECT user_name FROM users WHERE user_id = $1",
      [req.user.id]
    );

    // req.user has the payload
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("server error");
  }
});

export default router;
