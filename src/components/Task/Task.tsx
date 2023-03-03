import { useState } from "react";

interface ITask {
  id: number;
  description: string;
  completed: boolean;
}

export default function Task() {
  const [taskList, setTaskList] = useState<ITask[]>([
    {
      id: 1,
      description: "Do anything",
      completed: false,
    },
    {
      id: 2,
      description: "Do nothing",
      completed: false,
    },
    {
      id: 3,
      description: "Everything is done",
      completed: true,
    },
  ]);

  return (
    <>
      <h4>task.list</h4>
      <ul>
        {taskList.map((task) => (
          <li>
            <p>Task: {task.description}</p>
            {task.completed === false ? (
              <p>Complete: No</p>
            ) : (
              <p>Complete: Yes</p>
            )}
          </li>
        ))}
      </ul>
      <h4>new.task</h4>
      <form>
        <label htmlFor="task">
          {" "}
          Add a new Task
          <input type="text" placeholder="What is your next task" />
        </label>
        <button>Save</button>
      </form>
    </>
  );
}
