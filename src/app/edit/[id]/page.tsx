"use client";

import BackButton from "@/app/components/back-button";
import CreateEditForm from "@/app/components/create-edit-form";
import Spinner from "@/app/components/spinner";
import * as taskService from "@/app/task.service";
import Task from "@/app/types/task.model";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const PageConst = {
  buttonText: "Update Task",
  successMessage: "Updated new task successfully",
};

export default function Page() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const taskId = parseInt(params.id, 10);

  const [task, setTask] = useState<Task | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const data = await getTask(taskId);
        if (!data) return router.push("/");
        setTask(data);
        setLoading(false);
      } catch {
        router.push("/");
      }
    };

    fetchTask();
  }, [taskId, router]);

  return (
    <div className="p-10 w-full">
      <div className="relative mx-auto max-w-lg py-4">
        <BackButton routeLocation="/" />
      </div>
      <div className="relative mx-auto max-w-lg h-64 flex items-center justify-center p-4">
        {loading ? (
          <Spinner size="w-12 h-12" color="text-gray-700" />
        ) : (
          <CreateEditForm
            initialData={task}
            action={updateTask}
            buttonText={PageConst.buttonText}
            successMessage={PageConst.successMessage}
          />
        )}
      </div>
    </div>
  );
}

async function getTask(id: number): Promise<Task | null> {
  try {
    return await taskService.fetchTaskById(id);
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function updateTask(previousState: unknown, formData: FormData) {
  const idFormValue = formData.get("id");
  const title = formData.get("taskTitle");
  const selectedColor = formData.get("color");
  const isComplete = formData.get("completed");
  const fieldData = {
    title: String(title),
    color: String(selectedColor),
    completed: !!isComplete,
  };

  if (!title || !selectedColor) {
    return { error: "Please add a title & select a color", fieldData };
  }

  try {
    const id = idFormValue ? parseInt(idFormValue.toString(), 10) : undefined;
    if (!id) throw Error("Missing ID from form, unable to update");
    await taskService.updateTask({
      ...fieldData,
      id: parseInt(id.toString(), 10),
    });
    return { message: "Task updated", fieldData };
  } catch (error) {
    console.error(error);
    return { error: "Failed to update task", fieldData };
  }
}
