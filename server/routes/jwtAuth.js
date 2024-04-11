import express from "express";
import pool from "../db.js";
import bcrypt from "bcrypt";
import jwtGenerator from "../utils/jwtGenerator.js";
import validInfo from "../middleware/validInfo.js";
import authorize from "../middleware/authorize.js";

const router = express.Router();

// Registering

router.post("/register", validInfo, async (req, res) => {
  try {
    // destructure req.body (name, email, password)
    const { name, email, password } = req.body;

    // check if user exists (if user exists, throw error)
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email,
    ]);

    if (user.rows.length !== 0) {
      return res.status(401).send("User already exists");
    }

    // bcrypt user password
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);

    const bcryptPassword = await bcrypt.hash(password, salt);

    // insert new user to DB
    const newUser = await pool.query(
      "INSERT INTO users (user_name, user_email, user_password) VALUES($1, $2, $3) RETURNING *",
      [name, email, bcryptPassword]
    );

    // generate JWT token
    const token = jwtGenerator(newUser.rows[0].user_id);

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// login route
router.post("/login", validInfo, async (req, res) => {
  try {
    // destructure req.body (name, email, password)
    const { email, password } = req.body;

    // check if user exists (if user doesn't exists, throw error)
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email,
    ]);

    if (user.rows.length === 0) {
      return res.status(401).json("Password or email is incorrect");
    }

    // check if incoming password is same as db password
    const validPassword = await bcrypt.compare(
      password,
      user.rows[0].user_password
    );

    if (!validPassword) {
      return res.status(401).json("password or email is incorrect");
    }

    // give user jwt token
    const token = jwtGenerator(user.rows[0].user_id);

    res.json({ token });

    console.log(validPassword);
  } catch (err) {
    console.error(err);
  }
});

router.get("/is-verify", authorize, async (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

export default router;
