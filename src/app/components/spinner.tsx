import React from "react";

interface SpinnerProps {
  size?: string; // CSS size value, e.g., 'w-6 h-6'
  color?: string; // Tailwind text color class, e.g., 'text-gray-500'
}

const Spinner: React.FC<SpinnerProps> = ({
  size = "w-8 h-8",
  color = "text-blue-500",
}) => {
  return (
    <div
      className={`animate-spin inline-block ${size} ${color} border-4 border-t-transparent border-solid rounded-full`}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
