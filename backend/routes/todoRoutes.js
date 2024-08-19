const express = require("express");
const {
  getTodos,
  saveTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoControllers");
const router = express.Router();

router.get("/", getTodos);
router.post("/", saveTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
