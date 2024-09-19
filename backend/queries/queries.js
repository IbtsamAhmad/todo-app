const getAllToDosQuery = "SELECT * FROM test.todos"
const savetoDoQuery = "INSERT INTO test.todos (`title`, `description`, `isDone`) VALUES (?, ?, ?)";
const deleteTodoQuery = "DELETE FROM test.todos WHERE id = ?"
const updateToDoQuery = `UPDATE todos 
    SET 
        title = ?, 
        description = ?, 
        isDone = ? 
    WHERE 
        id = ?`;


module.exports ={
    getAllToDosQuery,
    savetoDoQuery,
    deleteTodoQuery,
    updateToDoQuery
}