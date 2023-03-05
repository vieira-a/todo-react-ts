import Task from "./components/Task/Task";

// tailwind css
import './styles/global.css';

function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex-col items-center justify-center text-gray-200">
      <h1>todo.app</h1>
      <Task />
    </div>
  );
}

export default App;
