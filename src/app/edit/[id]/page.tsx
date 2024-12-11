"use client";

import BackButton from "@/app/components/back-button";
import CreateEditForm from "@/app/components/create-edit-form";
import Spinner from "@/app/components/spinner";
import Task from "@/app/types/task.model";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const PageConst = {
  buttonText: "Update Task",
};

const DBMock: Task[] = [
  { id: 1, title: "Learn Next.js", completed: false, color: "red" },
  { id: 2, title: "Build a Tailwind App", completed: false, color: "blue" },
  { id: 3, title: "Deploy to Vercel", completed: false, color: "green" },
];

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
        if (!data) {
          router.push("/"); // Redirect to landing page if task is not found
        } else {
          setTask(data);
          setLoading(false);
        }
      } catch {
        router.push("/"); // Redirect to landing page on fetch error
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
          />
        )}
      </div>
    </div>
  );
}

async function getTask(id: number): Promise<Task | null> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const task = DBMock.find((task) => task.id === id);
  return task || null;
}

async function updateTask(previousState: unknown, formData: FormData) {
  const title = formData.get("taskTitle");
  const selectedColor = formData.get("color");
  const fieldData = {
    title: String(title),
    color: String(selectedColor),
  };

  if (!title || !selectedColor) {
    return { error: "Please add a title & select a color", fieldData };
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return { message: "Task updated", fieldData };
}
