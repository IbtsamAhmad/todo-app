import { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm/TaskForm";
import { Form } from "antd";
import { EditToDo, ToDo } from "./model";
import ToDoListView from "./components/ToDoListView/ToDoListView";
const App: React.FC = () => {
  const [form] = Form.useForm();

  const [toDoList, setToDoList] = useState<ToDo[]>([]);
  const [editTodo, setEditTodo] = useState<EditToDo>({
    id: "",
    todo: "",
    edit: false,
  });

  const onFinish = (values: { todo: string }) => {
    console.log("Success:", values);
    if (editTodo.edit) {
      const updateTodos = [...toDoList].map((todo) => {
        if (todo.id === editTodo.id) {
          todo.todo = values.todo;
        }
        return todo;
      });
      setToDoList(updateTodos);
      setEditTodo(
        {
          id: "",
          todo: "",
          edit: false,
        }
      )
    }
    else{
  setToDoList([
      ...toDoList,
      {
        id: Date.now(),
        todo: values.todo,
        isDone: false,
      },
    ]);
    }

 form.resetFields();
  };

  const updateTodo = (todoId: string | number, value: string) => {
    setEditTodo({
      id: todoId,
      todo: value,
      edit: true,
    });
  };

  const removeTodo = (id: string | number) => {
    const removedArr = [...toDoList].filter((todo) => todo.id !== id);
    setToDoList(removedArr);
  };

  const completeTodo = (id: string | number, value: boolean) => {
    const updateTodos = [...toDoList].map((todo) => {
      if (todo.id === id) {
        todo.isDone = value;
      }
      return todo;
    });
    setToDoList(updateTodos);
  };
  console.log(toDoList);

  return (
    <div className="app-container">
      <h1 className="heading">Taskify</h1>
      <TaskForm onFinish={onFinish} form={form} editTodo={editTodo}/>
      <ToDoListView
        toDoList={toDoList}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default App;
