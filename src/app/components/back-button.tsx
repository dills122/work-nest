import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export interface BackButtonProps {
  routeLocation: string;
}

export default function BackButton({ routeLocation }: BackButtonProps) {
  return (
    <div className="inline-block py-2">
      <Link
        href={routeLocation}
        className="flex items-center gap-2 hover:text-sky-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <ArrowLeftIcon className="size-6" />
      </Link>
    </div>
  );
}
