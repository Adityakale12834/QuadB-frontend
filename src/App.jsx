import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {

  return (
    <div className="h-screen w-screen bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex flex-column items-center px-3">
      <h1 className="text-4xl font-bold my-4">Add Todo</h1>
      <h1>Hello from aditya</h1>
      <TaskInput/>
      <TaskList/>
    </div>
  );
}

export default App
