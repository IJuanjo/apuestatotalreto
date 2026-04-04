"use client";

import { useToast } from './ToastContext';
import Toast from './Toast';

const ToastContainer = () => {
  const { toasts, removeToast } = useToast();
  const visibleToasts = [...toasts].reverse();

  return (
    <div className="pointer-events-none fixed left-0 right-0 top-4 z-50 flex justify-center px-3 sm:px-4">
      <div className="pointer-events-auto flex w-[min(94vw,420px)] flex-col gap-3">
        {visibleToasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            duration={toast.duration}
            createdAt={toast.createdAt}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ToastContainer;