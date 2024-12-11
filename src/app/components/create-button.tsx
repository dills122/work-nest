import Link from "next/link";
import Button from "./button";

export default function CreateButton() {
  return (
    <Link href="/create" className="w-full">
      <Button text='Create' />
    </Link>
  );
}
