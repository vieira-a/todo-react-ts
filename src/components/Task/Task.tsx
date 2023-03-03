import { useState, FormEvent, MouseEvent } from "react";
import { v4 as uuid } from "uuid";

interface ITask {
  id: string;
  description: string;
  completed: boolean;
}

export default function Task() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      description: {
        value: string;
      };
    };

    let description = target.description.value;

    console.log(description);

    setTaskList([
      ...taskList,
      {
        id: uuid(),
        description,
        completed: false,
      },
    ]);

    target.description.value = "";
  };

  const handleDelete = (event: MouseEvent<HTMLButtonElement>) => {
    const taskId = event.currentTarget.id;
    setTaskList(taskList.filter((task: ITask) => task.id != taskId));
  };

  return (
    <>
      <h4>task.list</h4>
      <ul>
        {taskList.map((task) => (
          <li key={task.id}>
            <p>Task: {task.description}</p>
            {task.completed === false ? (
              <p>Complete: No</p>
            ) : (
              <p>Complete: Yes</p>
            )}
            <button id={task.id} onClick={handleDelete}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <h4>new.task</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">
          {" "}
          Add a new Task
          <input
            type="text"
            placeholder="What is your next task"
            name="description"
          />
        </label>
        <input type="submit" value="Save" />
      </form>
    </>
  );
}
