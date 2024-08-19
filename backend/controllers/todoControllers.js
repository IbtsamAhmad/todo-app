const asyncHandler = require("express-async-handler");

const getTodos = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Get Todos",
  });
});

const saveTodo = asyncHandler(async (req, res) => {
    console.log(req.body)

    if (!req.body.text) {
        res.status(400)
      throw new Error('Please add a text field')  

    }
  res.status(200).json({
    message: "Save Todos",
  });
});

const updateTodo = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "update Todos",
  });
});

const deleteTodo = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "delete Todos",
  });
});

module.exports = {
  getTodos,
  updateTodo,
  saveTodo,
  deleteTodo,
};
