import Task from "@/app/types/task.model";

export interface CreateTaskDTO extends Partial<Task> {
  title: string;
  color: string;
}
