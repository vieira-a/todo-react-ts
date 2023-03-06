import { useState, FormEvent, MouseEvent, ChangeEvent } from "react";
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

  const handleCompleted = (event: ChangeEvent<HTMLInputElement>) => {
    const taskId = event.target.id;
    taskList.map((task: ITask) => {
      if (task.id === taskId && task.completed === false) {
        task.completed = true;
      } else if (task.id === taskId && task.completed === true) {
        task.completed = false;
      }
    });
    setTaskList([...taskList]);
  };

  return (
    <div className="max-w-screen-sm mx-auto">
      <header className="py-4">
        <h2 className="text-2xl font-semibold">task.list</h2>
      </header>
      <div>
        <ul className="mx-6">
          {taskList.map((task) => (
            <li key={task.id} className="flex gap-2 items-center justify-between">
              {task.completed === false ? 
              (<p className="text-lg "># {task.description}</p>) 
              :(<p className="text-lg text-gray-500"># {task.description}</p>)}
              {/* {task.completed === false ? (
                <p>Done: No</p>
              ) : (
                <p>Done: Yes</p>
              )} */}
              <div className="flex gap-2">
              <label htmlFor={task.id} className="relative py-2 px-3 my-4 bg-purple-600 rounded text-sm cursor-pointer hover:bg-purple-700 transition">Done</label>
                <input className="hidden"
                  type="checkbox"
                  name="completed"
                  id={task.id}
                  onChange={handleCompleted}
                  value={"completed"}
                />
                <button id={task.id} onClick={handleDelete} className="py-2 px-3 my-4 bg-purple-600 rounded text-sm cursor-pointer hover:bg-purple-700 transition">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="py-2 my-6 mx-auto">
        <form onSubmit={handleSubmit}>
          <label htmlFor="task" className="flex flex-col gap-6">
            {" "}
            Add a new Task
            <input className="w-4/5 p-3 rounded mx-auto text-gray-800"
              type="text"
              placeholder="What is your next task"
              name="description"
            />
          </label>
          <input type="submit" value="Save" className="py-3 px-16 my-6 bg-purple-600 rounded text-lg cursor-pointer hover:bg-purple-700 transition" />
        </form>
      </div>
    </div>
  );
}
