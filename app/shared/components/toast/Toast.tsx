"use client";

import { cva } from "class-variance-authority";
import { useEffect } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  createdAt: number;
  isClosing?: boolean;
  onClose: () => void;
}

const toastIconVariants = cva(
  "grid h-9 w-9 shrink-0 place-items-center rounded-full border text-sm font-bold",
  {
    variants: {
      type: {
        success: "border-emerald-200 bg-emerald-50 text-emerald-600",
        error: "border-rose-200 bg-rose-50 text-rose-600",
        warning: "border-amber-200 bg-amber-50 text-amber-600",
        info: "border-sky-200 bg-sky-50 text-sky-600",
      },
    },
  }
);

const labelByType = {
  success: "✓",
  error: "!",
  warning: "⚠",
  info: "ℹ",
} as const;

const Toast = ({ message, type, duration = 3000, createdAt, onClose }: ToastProps) => {

  useEffect(() => {

    const elapsed = Date.now() - createdAt;
    const remaining = Math.max(0, duration - elapsed);

    if (remaining === 0) {
      onClose();
      return;
    }

    const timer = setTimeout(() => {
      onClose();
    }, remaining);

    return () => clearTimeout(timer);
  }, [createdAt, duration, onClose]);



  return (
    <div
      className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 shadow-lg transition-all duration-300 ease-out"
    >
      <div className="grid grid-cols-[36px_1fr_20px] items-start gap-3">
        <span className={toastIconVariants({ type })}>
          {labelByType[type]}
        </span>
        <div className="min-w-0 flex-1 pt-1">
          <p className="text-sm font-medium leading-5 whitespace-normal wrap-break-word">{message}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="mt-0.5 shrink-0 text-lg leading-none text-neutral-400 transition-colors hover:text-neutral-700"
          aria-label="Cerrar toast"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Toast;
