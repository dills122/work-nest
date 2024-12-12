import React from "react";
import Button from "@/app/components/button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "Yes, Delete",
  cancelText = "Cancel",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-stone-800 p-6 rounded-lg w-80">
        <h3 className="text-white text-lg font-semibold mb-4">{title}</h3>
        <p className="text-white mb-4">{message}</p>
        <div className="flex justify-between">
          <Button text={confirmText} variant="primary" onClick={onConfirm} />
          <Button text={cancelText} variant="danger" onClick={onClose} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
