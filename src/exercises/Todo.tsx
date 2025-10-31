import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

function Todo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState<string>("");

  function handleSubmit(e) {
    e.preventDefault();

    const newTask = {
      id: todos.length + 1,
      task: task,
      completed: false,
    };

    if (task) {
      setTodos([...todos, newTask]);
      setTask("");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <br />

        <Button className="cursor-pointer">Submit</Button>
      </form>

      <hr />

      <h1>Todos</h1>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task} | {todo.completed ? "completed" : "pending"}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Todo;
