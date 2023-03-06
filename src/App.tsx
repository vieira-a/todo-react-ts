import Task from "./components/Task/Task";
import AssignmentSharpIcon from '@mui/icons-material/AssignmentSharp';

// tailwind css
import './styles/global.css';

function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex-col items-center justify-center text-gray-200 text-center">
      <header className="py-8">
        <AssignmentSharpIcon />
        <h1 className="text-5xl text-purple-600 font-bold">todo.app</h1>
      </header>
      <Task />
    </div>
  );
}

export default App;
