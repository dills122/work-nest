import { CreateTaskDTO } from "@/app/types/task-create.model";
import Task from "@/app/types/task.model";

const HOST_URL = `http://localhost:3003`;

const buildApiUrl = (endpoint: string): string => {
  return `${HOST_URL}/${endpoint}`;
};

export const fetchAllTasks = async (): Promise<Task[]> => {
  const url = buildApiUrl("tasks");
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Error fetching tasks: ${response.statusText}`);
  }

  return await response.json();
};

export const fetchTaskById = async (taskId: number): Promise<Task> => {
  const url = buildApiUrl(`tasks/${taskId}`);
  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw new Error(`Error updating task: ${response.statusText}`);
  }
  return await response.json();
};

export const toggleTaskCompletion = async (task: Task): Promise<Task> => {
  const updatedTask: Task = { ...task, completed: !task.completed };
  const response = await updateTask({ ...task, completed: !task.completed });
  if (!response.ok) {
    throw new Error(`Error updating task: ${response.statusText}`);
  }
  return updatedTask;
};

export const updateTask = async (task: Task) => {
  const url = buildApiUrl(`tasks/${task.id}`);
  const response = await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });

  if (!response.ok) {
    throw new Error("Failed to update task");
  }
  return response;
};

export const createTask = async (taskToCreate: CreateTaskDTO) => {
  const url = buildApiUrl("tasks");
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(taskToCreate),
  });

  if (!response.ok) {
    throw new Error("Failed to create task");
  }
  return await response.json();
};

export const deleteTask = async (taskId: number) => {
  const url = buildApiUrl(`tasks/${taskId}`);
  const response = await fetch(url, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Error deleting task: ${response.statusText}`);
  }
  return taskId;
};
