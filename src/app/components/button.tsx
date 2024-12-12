"use client";

import React from "react";
import { PlusIcon } from "@heroicons/react/16/solid";
import { useFormStatus } from "react-dom";

export interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  includeIcon?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  className?: string;
  disabled?: boolean;
}

export default function Button({
  text,
  type = "button",
  includeIcon = false,
  icon = <PlusIcon className="size-4" />,
  onClick,
  variant = "primary",
  className = "",
  disabled: customDisabled,
}: ButtonProps) {
  const { pending } = useFormStatus();
  const disabled = pending || customDisabled;

  // Base styles
  const baseStyles =
    "font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none focus:ring-2 flex items-center justify-center";

  // Variant styles
  const variantStyles = {
    primary: "bg-sky-800 text-white hover:bg-sky-600 focus:ring-sky-700",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-800",
  };

  // Disabled styles
  const disabledStyles = "bg-gray-400 text-gray-800 cursor-not-allowed";

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${
        disabled ? disabledStyles : ""
      } ${className}`}
    >
      {includeIcon && icon && <span className="px-1">{icon}</span>}
      <span className="px-1">{text}</span>
    </button>
  );
}
