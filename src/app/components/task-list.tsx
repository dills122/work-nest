// eslint-disable-next-line @typescript-eslint/no-unused-expressions
"use client";

import { useState } from "react";
import Task from "../types/task.model";
import TaskItem from "./task-item";

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Learn Next.js", completed: false, color: "red" },
    { id: 2, title: "Build a Tailwind App", completed: false, color: "blue" },
    { id: 3, title: "Deploy to Vercel", completed: false, color: "green" },
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
    <div className="max-w-md mx-auto p-6">
      <div className="flex justify-between items-center pb-2 border-b">
        <span className="text-sm">Completed: {completedCount}</span>
        <span className="text-sm">Total: {totalCount}</span>
      </div>
      <ul className="space-y-3 pt-4">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleCompletion={toggleTaskCompletion}
            onDelete={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
