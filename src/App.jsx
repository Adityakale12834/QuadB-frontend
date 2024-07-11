import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {

  return (
    <div className="h-screen bg-slate-500 flex flex-column items-center">
      <TaskInput/>
      <TaskList/>
    </div>
  );
}

export default App
