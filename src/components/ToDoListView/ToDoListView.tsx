import React from "react";
import { Checkbox, Empty } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import "./list.css";
import { ToDo } from "../../model";

interface Props {
  toDoList: ToDo[];
  removeTodo: (id: string | number) => void;
  completeTodo: (id: string | number, value: boolean) => void;
  updateTodo: (id: string | number, value: string) => void;
}
const ToDoListView: React.FC<Props> = ({ toDoList, removeTodo , completeTodo, updateTodo}) => {
  return (
    <div className="todo-list">
      <h1>What's the Plan for Today?</h1>
      {toDoList?.length ? (
        <div>
          {toDoList.map((obj) => {
            return (
              <div className="todo" key={obj.id}>
                <Checkbox checked={obj.isDone} onChange={(e) => completeTodo(obj.id, e.target.checked)}/>
                <p className={obj.isDone ? "todo-done" :"todo-notDone"}>{obj.todo}</p>
                <div className="icons">
                  <EditOutlined onClick={() => updateTodo(obj.id, obj.todo)}/>
                  <DeleteOutlined onClick={() => removeTodo(obj.id)} />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}
    </div>
  );
};

export default ToDoListView;
