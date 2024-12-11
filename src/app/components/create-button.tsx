import { PlusIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function CreateButton() {
  return (
    <Link href="/create" className="w-full">
      <button
        type="button"
        className="w-full text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        <div className="flex items-center justify-center">
          <span className="px-1">
            <PlusIcon className="size-4" />
          </span>
          <span className="px-1">Create</span>
        </div>
      </button>
    </Link>
  );
}
