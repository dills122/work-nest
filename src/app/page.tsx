import CreateButton from "./components/create-button";
import TaskList from "./components/task-list";

export default function Home() {
  return (
    <div className="w-full">
      <div className="max-w-md mx-auto py-4">
        <CreateButton />
      </div>
      <div className="w-full">
        <TaskList />
      </div>
    </div>
  );
}
