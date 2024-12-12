import Link from "next/link";
import Button from "@/app/components/button";

export default function CreateButton() {
  return (
    <Link href="/create" className="w-full">
      <Button text="Create Task" variant={'primary'} className="w-full" includeIcon={true} />
    </Link>
  );
}
