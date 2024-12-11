// eslint-disable-next-line @typescript-eslint/no-unused-expressions
"use client";

import { useState } from "react";
import BackButton from "../components/back-button";
import Button from "../components/button";

const PageConst = {
  buttonText: "Add Task",
};

const colors = [
  { name: "Red", value: "taskRed" },
  { name: "Purple", value: "taskPurple" },
  { name: "Pink", value: "taskPink" },
  { name: "Orange", value: "taskOrange" },
  { name: "Yellow", value: "taskYellow" },
  { name: "Green", value: "taskGreen" },
  { name: "Blue", value: "taskBlue" },
  { name: "Brown", value: "taskBrown" },
  { name: "Grey", value: "taskGrey" },
  { name: "White", value: "taskWhite" },
];

export default function Create() {
  const [taskTitle, setTaskTitle] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCreateTask = async () => {};
  return (
    <div className="p-10">
      <BackButton routeLocation="/" />
      <form onSubmit={handleCreateTask}>
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="taskTitle">
            Title
          </label>
          <input
            type="text"
            name="taskTitle"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Task title"
            className="border rounded w-full px-3 py-2 mb-4 
            dark:bg-gray-800 dark:text-white dark:border-gray-600 
            focus:outline-none focus:ring-1 focus:ring-gray-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Color</label>
          <div className="flex gap-3 mb-6">
            {colors.map((color) => (
              <button
                key={color.value}
                type="button"
                onClick={() => setSelectedColor(color.value)}
                className={`w-10 h-10 rounded-full bg-${color.value} border-2 ${
                  selectedColor === color.value
                    ? "border-blue-400"
                    : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>
        <Button text={PageConst.buttonText} />
      </form>
    </div>
  );
}
