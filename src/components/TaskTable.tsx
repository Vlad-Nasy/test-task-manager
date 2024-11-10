import { useState } from "react";
import { TaskProps } from "../types";
import { useTasks } from "../hooks/useTasks";

export function TaskTable() {
  const { tasks, deleteTask, editTask } = useTasks();
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [editData, setEditData] = useState<TaskProps>({
    title: "",
    description: "",
    done: false,
    file: null,
  });

  const handleEditClick = (index: number, task: TaskProps) => {
    setIsEditing(index);
    setEditData({ ...task });
  };

  const handleSaveClick = (index: number) => {
    editTask(index, editData);
    setIsEditing(null);
    setEditData({ title: "", description: "", done: false, file: null });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setEditData({ ...editData, file: e.target.files[0] });
    }
  };

  return (
    <>
      {tasks.length === 0 ? (
        <div className="text-center w-full text-4xl">Is empty ;(</div>
      ) : (
        <table className="w-full mt-10 max-w-full relative">
          <thead>
            <tr>
              <th>Завдання</th>
              <th>Опис</th>
              <th>Статус</th>
              <th>Файл</th>
              <th>Дія</th>
            </tr>
          </thead>
          <tbody className="w-full text-center">
            {tasks.map((task, index) => (
              <tr
                key={index}
                className={isEditing === index ? "bg-gray-100" : ""}
              >
                <td>
                  {isEditing === index ? (
                    <input
                      type="text"
                      value={editData.title}
                      onChange={(e) =>
                        setEditData({ ...editData, title: e.target.value })
                      }
                    />
                  ) : (
                    task.title
                  )}
                </td>
                <td className="max-w-16">
                  {isEditing === index ? (
                    <input
                      type="text"
                      value={editData.description}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          description: e.target.value,
                        })
                      }
                    />
                  ) : (
                    task.description
                  )}
                </td>
                <td>
                  {isEditing === index ? (
                    <input
                      type="checkbox"
                      checked={editData.done}
                      onChange={() =>
                        setEditData({ ...editData, done: !editData.done })
                      }
                    />
                  ) : (
                    <div>{task.done ? "Виконано" : "Невиконано"}</div>
                  )}
                </td>
                <td>
                  {isEditing === index ? (
                    <input type="file" onChange={handleFileChange} />
                  ) : task.file ? (
                    task.file.name
                  ) : (
                    "No file"
                  )}
                </td>
                <td>
                  {isEditing === index ? (
                    <>
                      <button
                        className="mr-2"
                        onClick={() => handleSaveClick(index)}
                      >
                        💾
                      </button>
                      <button onClick={() => setIsEditing(null)}>❌</button>
                    </>
                  ) : (
                    <>
                      <button
                        className="mr-2"
                        onClick={() => handleEditClick(index, task)}
                      >
                        ✏️
                      </button>
                      <button onClick={() => deleteTask(index)}>🗑️</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
