import { ArrowUturnLeftIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export interface BackButtonProps {
  routeLocation: string;
}

export default function BackButton({ routeLocation }: BackButtonProps) {
  return (
    <div className="inline-block py-2">
      <Link
        href={routeLocation}
        className="flex items-center gap-2 hover:text-gray-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <ArrowUturnLeftIcon className="size-6" />
      </Link>
    </div>
  );
}
