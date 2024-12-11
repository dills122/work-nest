import CreateButton from "./components/create-button";
import TaskList from "./components/task-list";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="flex flex-col items-center w-3/4 p-4">
        <div className="p-2 text-6xl">
          <h1>Work Nest</h1>
        </div>
        <div className="p-6 w-80">
          <CreateButton />
        </div>
        <div className="w-full">
          <TaskList />
        </div>
      </div>
    </div>
  );
}
