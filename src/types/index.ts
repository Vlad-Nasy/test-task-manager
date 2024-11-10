export type TaskProps = {
  title: string;
  description: string;
  done: boolean;
  file: File | null;
};

export type TaskContextType = {
  tasks: TaskProps[];
  addTask: (task: TaskProps) => void;
  editTask: (index: number, updatedTask: TaskProps) => void;
  deleteTask: (index: number) => void;
};
