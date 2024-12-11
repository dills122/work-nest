// eslint-disable-next-line @typescript-eslint/no-unused-expressions
"use client";

import { TrashIcon } from "@heroicons/react/16/solid";
import { useState } from "react";


const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn Next.js", completed: false },
    { id: 2, title: "Build a Tailwind App", completed: false },
    { id: 3, title: "Deploy to Vercel", completed: false },
  ]);

  const toggleTaskCompletion = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const completedCount = tasks.filter((task) => task.completed).length;
  const totalCount = tasks.length;

  return (
    <div className="max-w-md mx-auto dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center pb-2 border-b">
        <span className="text-sm">
          Completed: {completedCount}
        </span>
        <span className="text-sm">
          Total: {totalCount}
        </span>
      </div>
      <ul className="space-y-3 pt-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex items-center justify-between p-4 border rounded-lg ${
              task.completed ? "bg-green-100" : "bg-gray-100"
            }`}
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
                className="h-5 w-5 text-green-500 focus:ring-green-500 border-gray-300 rounded"
              />
              <span
                className={`text-sm ${
                  task.completed
                    ? "line-through text-gray-500"
                    : "text-gray-900"
                }`}
              >
                {task.title}
              </span>
            </div>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:text-red-700 font-medium"
            >
                <TrashIcon className="size-5" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
