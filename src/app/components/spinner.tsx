import React from "react";

interface SpinnerProps {
  size?: string;
  color?: string;
}

export default function Spinner({
  size = "w-8 h-8",
  color = "text-blue-500",
}: SpinnerProps) {
  return (
    <div
      className={`animate-spin inline-block ${size} ${color} border-4 border-t-transparent border-solid rounded-full`}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
