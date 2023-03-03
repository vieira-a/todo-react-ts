import { useState, FormEvent } from "react";

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
        id: Math.random(),
        description,
        completed: false,
      },
    ]);

    target.description.value = "";
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
