import { useState, useEffect, createContext, useContext } from "react";

// Toast Context for state management
const ToastContext = createContext();

// Toast Provider Component
export const ToastContextProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const TOAST_LIMIT = 5;

  // Add a new toast
  const addToast = (toast) => {
    const id = Date.now().toString();
    const newToast = {
      id,
      title: toast.title,
      description: toast.description,
      variant: toast.variant || "default",
      duration: toast.duration || 5000,
      onClose: () => removeToast(id),
    };

    setToasts((prevToasts) => {
      const updatedToasts = [newToast, ...prevToasts];
      return updatedToasts.slice(0, TOAST_LIMIT);
    });
  };

  // Remove a toast by ID
  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

// Toast Container Component
const ToastContainer = () => {
  const { toasts, removeToast } = useContext(ToastContext);

  return (
    <div className="z-10 fixed flex flex-col right-4 bottom-4 space-y-2">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  );
};

// Individual Toast Component
const Toast = ({
  id,
  title,
  description,
  variant = "default",
  duration = 5000,
  onClose,
}) => {
  useEffect(() => {
    if (duration !== Infinity) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const variantStyles = {
    default: "bg-white border border-gray-200",
    destructive: "bg-red-500 text-white",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-500 text-white",
  };

  return (
    <div
      className={`max-w-sm rounded-md shadow-lg p-4 transform transition-all duration-300 ${variantStyles[variant]}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          {title && <div className="font-semibold">{title}</div>}
          {description && <div className="text-sm mt-1">{description}</div>}
        </div>
        <button
          onClick={onClose}
          className="ml-4 flex-shrink-0 inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          <span className="sr-only">Close</span>
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

// useEffect() hook for Toaster effect
export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
};
