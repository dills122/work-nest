"use client";

import Link from "next/link";
import Button from "./components/button";

const PageConst = {
    buttonText: "Go Back Home",
  };

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center text-gray-800 dark:text-gray-100">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">
        {`Oops! The page you're looking for doesn't exist.`}
      </p>
      <Link href="/">
      <Button text={PageConst.buttonText} includeIcon={false} />
      </Link>
    </div>
  );
}
