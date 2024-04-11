import express from "express";
import cors from "cors";
import pool from "./db.js";
import jwtAuthRouter from "./routes/jwtAuth.js";
import todoRouter from "./routes/todo.js";

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

// ROUTES

// register and login routes
app.use("/auth", jwtAuthRouter);

app.use("/todo", todoRouter);

// Get all Todos
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (err) {
    console.log(err.message);
  }
});

// Get Todo by id
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query(`SELECT * FROM todo WHERE todo_id = ${id}`);
    res.json(todo.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

// Create a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

// update a todo description
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description, completed } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1, completed = $2 WHERE todo_id = $3",
      [description, completed, id]
    );

    res.json("Todo was udpated!");
  } catch (err) {
    console.log(err.message);
  }
});

// Delete a todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);

    res.json("Todo was deleted");
  } catch (err) {
    console.log(err.message);
  }
});

// Listening port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
