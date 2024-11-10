import { createContext, useState } from "react";
import { TaskContextType, TaskProps } from "../types";

export const TaskContext = createContext<TaskContextType | null>(null);

export function TaskProvider({ children }: { children: any }) {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const addTask = (task: TaskProps) => setTasks((prev) => [...prev, task]);

  const editTask = (index: number, updatedTask: TaskProps) => {
    setTasks((prev) =>
      prev.map((task, i) => (i === index ? updatedTask : task)),
    );
  };

  const deleteTask = (index: number) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, editTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}
