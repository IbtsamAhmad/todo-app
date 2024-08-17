import { useEffect } from "react";
import { Button, Form, Input } from "antd";
import "./taskForm.css";
import { EditToDo } from "../../model";

interface Props {
  onFinish: (e: React.FormEvent) => void;
  editTodo: EditToDo;
}
const TaskForm: React.FC<Props> = ({ onFinish, editTodo, form }) => {
  useEffect(() => {
    if (editTodo.edit) {
      form.setFieldValue("todo", editTodo.todo);
    }
  }, [editTodo, form]);

  return (
    <div>
      <Form
        layout="vertical"
        className="todo-form"
        name="basic"
        initialValues={{
          remember: true,
        }}
        form={form}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Enter Task"
          name="todo"
          rules={[
            {
              required: true,
              message: "Please input your task!",
            },
          ]}
        >
          <Input placeholder="Enter Task" size="large" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" size="large" shape="round"    className="todo-btn">
            {editTodo.id ? "Update Task" : "Add Task"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default TaskForm;
