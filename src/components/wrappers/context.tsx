"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import { FaX } from "react-icons/fa6";

type ToastType = "success" | "error" | "info";

type ToastContextType = {
  addToast: (message: string, type?: ToastType) => void;
};

type Toast = {
  id: number;
  message: ReactNode;
  type?: ToastType;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used inside ToastProvider");
  return context;
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (message: string, type: ToastType = "info") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  };

  const handleRemoveToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id != id));
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`flex gap-5 items-center px-4 py-2 rounded text-white shadow-md animate-fade-up animate-duration-400 transition-all
              ${
                toast.type === "success"
                  ? "bg-green-500"
                  : toast.type === "error"
                  ? "bg-red-500"
                  : "bg-blue-500"
              }
            `}
          >
            {toast.message}
            <div
              className="cursor-pointer"
              onClick={() => handleRemoveToast(toast.id)}
            >
              <FaX />
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
