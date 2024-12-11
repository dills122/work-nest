"use client";

import { useState } from "react";

interface ColorPickerProps {
  initialColor?: string;
}

const colors = [
  { name: "Red", value: "bg-red-600" },
  { name: "Purple", value: "bg-violet-700" },
  { name: "Pink", value: "bg-pink-500" },
  { name: "Orange", value: "bg-orange-600" },
  { name: "Yellow", value: "bg-amber-300" },
  { name: "Green", value: "bg-green-900" },
  { name: "Blue", value: "bg-blue-700" },
  { name: "Brown", value: "bg-yellow-900" },
  { name: "Grey", value: "bg-slate-500" },
  { name: "White", value: "bg-neutral-50" },
];

const  getColorValue = (name: string): string | undefined => {
  const color = colors.find((color) => color.name.toLowerCase() === name.toLowerCase());
  return color ? color.value : undefined;
}

export default function ColorPicker({
initialColor
}: ColorPickerProps) {
  const [selectedColor, onColorChange] = useState<string>(initialColor || "");
  return (
    <div>
      <label className="block text-sm font-medium mb-2">Color</label>
      <div className="flex gap-3 mb-6">
        {colors.map((color) => (
          <button
            key={color.value}
            type="button"
            onClick={() => onColorChange(color.name)}
            className={`w-10 h-10 ${color.value} rounded-full border-2 ${
              getColorValue(selectedColor) === color.value
                ? "border-blue-400"
                : "border-transparent"
            }`}
          />
        ))}
      </div>
      <input type="hidden" name="color" value={selectedColor} />
    </div>
  );
}
