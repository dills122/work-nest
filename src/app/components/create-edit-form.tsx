import { useActionState } from "react";
import Button from "@/app/components/button";
import ColorPicker from "@/app/components/color-picker";
import Task from "@/app/types/task.model";

interface FormActionResponse {
  message?: string;
  error?: string;
  fieldData: FieldData;
}

export interface FieldData {
  title: string;
  color?: string;
  completed?: boolean;
}

interface CreateEditFormProps {
  initialData?: Task;
  buttonText: string;
  action: (
    previousState: unknown,
    formData: FormData
  ) => Promise<FormActionResponse>;
  successMessage: string;
}

export default function CreateEditForm({
  initialData,
  action,
  buttonText,
  successMessage,
}: CreateEditFormProps) {
  const [data, statefulAction] = useActionState(action, null);
  return (
    <form action={statefulAction}>
      <div>
        <input type="hidden" name="id" value={initialData?.id} />
        <label
          className="block text-md text-sky-500 font-extrabold mb-2"
          htmlFor="taskTitle"
        >
          Title
        </label>
        <input
          type="text"
          name="taskTitle"
          defaultValue={data?.fieldData?.title || initialData?.title}
          placeholder="Task title"
          className="border rounded-md w-full px-3 py-2 mb-4 
            bg-stone-800 text-white border-stone-700 
            focus:outline-none focus:ring-1 focus:ring-stone-500
            "
        />
      </div>
      <ColorPicker
        initialColor={data?.fieldData?.color || initialData?.color}
      />
      <input
        type="hidden"
        name="completed"
        value={
          data?.fieldData?.completed || initialData?.completed
            ? "true"
            : "false"
        }
      />
      {data?.error && (
        <p className="text-red-500 text-md mt-2">{data?.error}</p>
      )}
      <Button text={buttonText} type="submit" includeIcon={true} variant={'primary'} className="w-full" />
      {data?.message && (
        <p className="text-green-500 text-center text-md mt-2">
          {successMessage}
        </p>
      )}
    </form>
  );
}
