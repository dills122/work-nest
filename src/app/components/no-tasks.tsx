import { ClipboardIcon } from "@heroicons/react/24/outline";

const PageConst = {
  mainMessage: `You don't have any tasks registered yet.`,
  subMessage: `Create tasks and organize your to-do items.`,
};

export default function NoTasks() {
  return (
    <div className="p-10 w-full">
      <div
        className="relative mx-auto max-w-lg flex flex-col items-center justify-center p-2
      text-md font-bold text-stone-500"
      >
        <ClipboardIcon className="size-14 m-2" />
        <p className="m-2">{PageConst.mainMessage}</p>
        <p className="m-1">{PageConst.subMessage}</p>
      </div>
    </div>
  );
}
