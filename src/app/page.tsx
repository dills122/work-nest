import CreateButton from "@/app/components/create-button";
import TaskList from "@/app/components/task-list";

export default function Home() {
  return (
    <div className="w-full py-10 px-10 pb-0">
      <div className="mx-auto py-4 px-6">
        <CreateButton />
      </div>
      <div className="w-full max-h-[calc(100vh-260px)] overflow-y-auto">
        <TaskList />
      </div>
    </div>
  );
}
