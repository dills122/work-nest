import { TrashIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import Task from "../types/task.model";

interface TaskItemProps {
  task: Task;
  onToggleCompletion: (taskId: number) => void;
  onDelete: (taskId: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleCompletion, onDelete }) => {
  return (
    <li
      className={`flex items-center justify-between p-4 border rounded-lg shadow-md ${
        task.completed ? "bg-green-500" : "dark:bg-gray-800"
      }`}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleCompletion(task.id)}
          className="h-5 w-5 text-green-500 focus:ring-green-500 border-gray-300 rounded"
        />
        <Link href={`/edit/${task.id}`}>
          <span
            className={`text-sm ${
              task.completed ? "line-through text-white" : "text-white"
            }`}
          >
            {task.title}
          </span>
        </Link>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-700 font-medium"
      >
        <TrashIcon className="size-5" />
      </button>
    </li>
  );
};

export default TaskItem;
