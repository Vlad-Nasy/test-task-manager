import { useState } from "react";
import { useTasks } from "../hooks/useTasks";

export function TaskForm() {
  const { addTask } = useTasks();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    addTask({ title, description, done: false, file });
    setTitle("");
    setDescription("");
    setFile(null);
  };

  return (
    <form
      onSubmit={handleAddTask}
      className="mb-3 grid gap-4 mt-20 justify-center"
    >
      <label htmlFor="title">Назва</label>
      <input
        className="border border-gray-300"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label htmlFor="description">Опис</label>
      <textarea
        className="border border-gray-300"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <div className="flex flex-col">
        <label>Файл</label>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
        />
      </div>
      <button type="submit" className="bg-cyan-600 text-white rounded-2xl p-2">
        ➕ Додати завдання
      </button>
    </form>
  );
}
