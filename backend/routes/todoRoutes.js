const express = require("express");
const {
  getTodos,
  saveTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/sqlTodoController");
const router = express.Router();

router.get("/", getTodos);
router.post("/", saveTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
