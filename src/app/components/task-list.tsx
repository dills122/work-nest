"use client";

import NoTasks from "@/app/components/no-tasks";
import Spinner from "@/app/components/spinner";
import TaskItem from "@/app/components/task-item";
import * as taskServices from "@/app/task.service";
import Task from "@/app/types/task.model";
import { handleError } from "@/app/utils/error.util";
import { useEffect, useState } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data: Task[] = await taskServices.fetchAllTasks();
        setTasks(data);
      } catch (err: unknown) {
        setError(handleError(err, "Unknown error"));
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const toggleTaskCompletion = async (taskId: number) => {
    try {
      const taskToUpdate = tasks.find((task) => task.id === taskId);
      if (!taskToUpdate) return;

      const updatedTaskObj = await taskServices.toggleTaskCompletion(
        taskToUpdate
      );
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === taskId ? updatedTaskObj : task))
      );
    } catch (err: unknown) {
      setError(handleError(err, "Error completing task"));
    }
  };

  const deleteTask = async (taskId: number) => {
    try {
      await taskServices.deleteTask(taskId);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (err: unknown) {
      setError(handleError(err, "Error deleting task"));
    }
  };

  const completedCount = tasks.filter((task) => task.completed).length;
  const totalCount = tasks.length;

  if (loading || error) {
    return (
      <div className="p-10 w-full">
        <div className="relative mx-auto max-w-lg h-64 flex items-center justify-center p-4">
          {loading ? (
            <Spinner size="w-12 h-12" color="text-gray-700" />
          ) : (
            <div className="text-center text-red-500">Error: {error}</div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto p-6">
      <div className="flex justify-between items-center pb-2 border-b text-md font-extrabold">
        <span className="text-sky-500">Tasks: {totalCount}</span>
        <span className="text-purple-500">
          Completed: {completedCount} of {totalCount}
        </span>
      </div>
      {tasks.length && (
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
      )}
      {!tasks.length && <NoTasks />}
    </div>
  );
};

export default TaskList;
