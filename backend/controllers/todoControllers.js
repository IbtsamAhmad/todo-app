const asyncHandler = require("express-async-handler");
const Todo = require("../models/todoModal");

const getTodos = asyncHandler(async (req, res) => {
  const todoList = await Todo.find();
  res.status(200).json(todoList);
});

const saveTodo = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const todo = await Todo.create({
    text: req.body.text,
  });
  res.status(200).json(todo);
});

const updateTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(400);
    throw new Error("Todo not found");
  }
  const updateTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateTodo);
});

const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(400);
    throw new Error("Todo not found");
  }
  await todo.deleteOne();
  res.status(200).json(req.params.id);
});

module.exports = {
  getTodos,
  updateTodo,
  saveTodo,
  deleteTodo,
};
