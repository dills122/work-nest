"use client";

import BackButton from "../components/back-button";
import CreateEditForm from "../components/create-edit-form";

const PageConst = {
  buttonText: "Add Task",
};

export default function Create() {
  return (
    <div className="p-10 w-full">
      <div className="relative mx-auto max-w-lg py-4">
        <BackButton routeLocation="/" />
      </div>
      <div className="relative mx-auto max-w-lg h-64 flex items-center justify-center p-4">
        <CreateEditForm action={addTask} buttonText={PageConst.buttonText} />
      </div>
    </div>
  );
}

async function addTask(previousState: unknown, formData: FormData) {
  const title = formData.get("taskTitle");
  const selectedColor = formData.get("color");
  const fieldData = {
    title: String(title),
  };
  if (!title || !selectedColor) {
    return { error: "Please add a title & select a color", fieldData };
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return { message: "Task added", fieldData };
}
