import { useState } from "react";
import Task from "@/app/types/task.model";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import Modal from "./confirmation-modal";

const PageConst = {
  modalTitle: "Confirm Deletion",
  modalMessage: "Are you sure you want to delete this task?",
};

interface TaskItemProps {
  task: Task;
  onToggleCompletion: (taskId: number) => void;
  onDelete: (taskId: number) => void;
}

export default function TaskItem({
  task,
  onToggleCompletion,
  onDelete,
}: TaskItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    onDelete(task.id);
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <li
        className={`flex items-center justify-between p-4 
        border rounded-lg shadow-md bg-stone-800 border-stone-700`}
      >
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            className="peer relative appearance-none w-5 h-5 border-2 border-sky-500 rounded-full bg-gray-800 
             cursor-pointer transition-all ease-in-out duration-300 
             checked:bg-purple-500 checked:border-none 
             hover:ring-2 hover:ring-sky-300 hover:ring-opacity-50 
             focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            checked={task.completed}
            onChange={() => onToggleCompletion(task.id)}
            id="circular-checkbox"
          />
          <Link href={`/edit/${task.id}`}>
            <span
              className={`text-sm flex items-center ${
                task.completed ? "line-through text-stone-600" : "text-white"
              }`}
            >
              {task.title}
              <PencilSquareIcon className="w-4 h-4 ml-2" />
            </span>
          </Link>
        </div>
        <button
          onClick={openModal}
          className="text-white hover:text-red-700 font-medium"
        >
          <TrashIcon className="size-5" />
        </button>
      </li>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={handleDelete}
        title={PageConst.modalTitle}
        message={PageConst.modalMessage}
      />
    </div>
  );
}
