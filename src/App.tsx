import { TaskForm } from "./components/TaskForm";
import { TaskTable } from "./components/TaskTable";
import { TaskProvider } from "./components/TaskProvider";

function App() {
  return (
    <TaskProvider>
      <div className="container mx-auto">
        <h1 className="mt-10 text-cyan-400 text-center font-bold text-6xl">
          Менеджер завдань
        </h1>
        <TaskForm />
        <TaskTable />
      </div>
    </TaskProvider>
  );
}

export default App;
