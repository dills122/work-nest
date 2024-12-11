"use client";

import { PlusIcon } from "@heroicons/react/16/solid";
import { useFormStatus } from "react-dom";

export interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  includeIcon?: boolean; //TODO update this to abstract button more if I have time
}

export default function Button({ text, type, includeIcon }: ButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      type={type ? type : "button"}
      disabled={pending}
      className="w-full text-gray-900 bg-white border border-gray-300 
        focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 
        font-medium rounded-lg text-sm px-5 py-2.5 mb-2 
        dark:bg-gray-800 dark:text-white dark:border-gray-600 
        dark:hover:bg-gray-700 dark:hover:border-gray-600 
        dark:focus:ring-gray-700
        disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
    >
      <div className="flex items-center justify-center">
        {includeIcon && (
          <span className="px-1">
            <PlusIcon className="size-4" />
          </span>
        )}
        <span className="px-1">{text}</span>
      </div>
    </button>
  );
}
