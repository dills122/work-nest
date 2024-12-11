import { useActionState } from "react";
import Button from "./button";
import ColorPicker from "./color-picker";
import Task from "../types/task.model";


interface FormActionResponse {
  message?: string;
  error?: string;
  fieldData: {
    title: string;
  };
}

interface CreateEditFormProps {
  initialData?: Task;
  buttonText: string;
  action: (
    previousState: unknown,
    formData: FormData
  ) => Promise<FormActionResponse>;
}

export default function CreateEditForm({
  initialData,
  action,
  buttonText,
}: CreateEditFormProps) {
  const [data, statefulAction] = useActionState(action, null);
  return (
    <form action={statefulAction}>
      <div>
        <label className="block text-sm font-medium mb-2" htmlFor="taskTitle">
          Title
        </label>
        <input
          type="text"
          name="taskTitle"
          defaultValue={initialData?.title || data?.fieldData?.title}
          placeholder="Task title"
          className="border rounded w-full px-3 py-2 mb-4 
            dark:bg-gray-800 dark:text-white dark:border-gray-600 
            focus:outline-none focus:ring-1 focus:ring-gray-500"
        />
      </div>
      <ColorPicker initialColor={initialData?.color} />
      {data?.error && (
        <p className="text-red-500 text-sm mt-2">{data?.error}</p>
      )}
      <Button text={buttonText} type="submit" includeIcon={true} />
    </form>
  );
}
