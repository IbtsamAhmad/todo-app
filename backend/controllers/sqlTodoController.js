const {
  saveTodoService,
  updateTodoService,
  getAllTodoService,
  deleteTodoService,
  getAllTodoCountService,
} = require("../services/todoServices");

const getTodos = async (req, res) => {

  try {
    let todos = []
    const page = parseInt(req.query.pageNo) || 1;
    const limit = parseInt(req.query.pageSize) || 10;
    const offset = (page - 1) * limit;
    const totalRecords = await getAllTodoCountService();
    const totalPages = Math.ceil(totalRecords / limit);
    todos = await getAllTodoService(limit, offset);
    const finalRes={
      page,
      limit,
      totalPages,
      totalRecords,
      todos
    }
    res.status(200).json({
      data: finalRes
    })
    
  } catch (error) {
    res.json(error);
  }
};

const saveTodo = async (req, res, next) => {
  const { title, description, isDone } = req.body;

  if (!title || !description) {
    res.status(400);
    return next(new Error("Please add all required fields"));
  }

  const values = [title, description, isDone];
  try {
    const response = await saveTodoService([...values]);
    res.json({
      data: response,
    });
  } catch (error) {
    next(error); // Pass the error to the error-handling middleware
  }
};


const updateTodo = async (req, res) => {
  const todoId = req.params.id;
  const { title, description, isDone } = req.body;
  if (!todoId || !title || !description) {
    res.status(400);
    throw new Error("Please add all required fields");
  }
  const values = [title, description, isDone];
  try {
    const todoId = req.params.id;
    const response = await updateTodoService([...values, todoId]);
    res.json({
      data: response,
    });
  } catch (error) {
    res.json(error);
  }
};

const deleteTodo = async (req, res) => {
  const todoId = req.params.id;
  if (!todoId) {
    res.status(400);
    throw new Error("Id is required");
  }
  try {
    const todoId = req.params.id;
    const response = await deleteTodoService([todoId]);
    if (response.affectedRows === 0) {
      res.status(404); 
      return res.json({
        message: "Todo not found.",
      });
    }

    res.json({
      message: "Todo Deleted Successfully",
    });
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  getTodos,
  updateTodo,
  saveTodo,
  deleteTodo,
};
