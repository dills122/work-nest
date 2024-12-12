"use client";

import BackButton from "@/app/components/back-button";
import CreateEditForm from "@/app/components/create-edit-form";
import * as taskService from "@/app/task.service";

const PageConst = {
  buttonText: "Add Task",
  successMessage: "Created new task successfully",
};

export default function Create() {
  return (
    <div className="p-10 w-full">
      <div className="relative mx-auto max-w-lg py-4">
        <BackButton routeLocation="/" />
      </div>
      <div className="relative mx-auto max-w-lg h-64 flex items-center justify-center p-4">
        <CreateEditForm
          action={addTask}
          buttonText={PageConst.buttonText}
          successMessage={PageConst.successMessage}
        />
      </div>
    </div>
  );
}

async function addTask(previousState: unknown, formData: FormData) {
  const title = formData.get("taskTitle");
  const selectedColor = formData.get("color");
  const fieldData = {
    title: String(title),
    color: selectedColor ? String(selectedColor) : "",
  };
  if (!title || !selectedColor) {
    return { error: "Please add a title & select a color", fieldData };
  }

  try {
    await taskService.createTask(fieldData);
    return { message: "Task added", fieldData };
  } catch (err: unknown) {
    console.error(err);
    return { error: "Unable to create task", fieldData };
  }
}
