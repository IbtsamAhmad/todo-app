const { getAllToDosQuery, updateToDoQuery, savetoDoQuery, deleteTodoQuery } = require("../queries/queries")
const db = require("../config/sqlDb");

const getAllTodoCountService = () =>{
  const countQuery = "SELECT COUNT(*) as count FROM todos";

  const promise =  new Promise((resolve, reject) => {
    db.query(countQuery, (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results[0].count);
    });
  });
  return promise
 
}

// Searching Title, Ascedning, Completed/Uncompleted , Created Updated At

const getAllTodoService = (limit, offset) =>{
  const todosQuery = "SELECT * FROM todos LIMIT ? OFFSET ? ORDERBY ";
  const promise = new Promise((resolve, reject) => {
    db.query(todosQuery, [limit, offset], (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
  return promise
}


const updateTodoService = (values) => {
  const promise = new Promise((resolve, reject) => {
    db.query(updateToDoQuery, values, (err, data) => {
      if (err) {
        reject(err);
      }
      return resolve(data);
    });
  });
  return promise
};

const saveTodoService = (values) => {
  const promise = new Promise((resolve, reject) => {
    db.query(savetoDoQuery, values, (err, data) => {
      if (err) {
        reject(err);
      }
      return resolve(data);
    });
  });
  return promise
};

const deleteTodoService = (values) => {
  const promise = new Promise((resolve, reject) => {
    db.query(deleteTodoQuery, values, (err, data) => {
      if (err) {
        reject(err);
      }
      return resolve(data);
    });
  });
  return promise
};


module.exports ={
    getAllTodoService,
    updateTodoService,
    saveTodoService,
    deleteTodoService,
    getAllTodoCountService
}