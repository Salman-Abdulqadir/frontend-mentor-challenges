interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
}

export function Modal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
}: ModalProps) {
  if (!isOpen) return null;

  const handleConfirm = () => {
    onClose();
    // Small delay to ensure modal is closed before showing toast
    setTimeout(onConfirm, 100);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white dark:bg-neutral-800 rounded-2xl p-8 max-w-sm w-full mx-4 shadow-xl">
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-red-600 dark:text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">
              {title}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-8">
              {message}
            </p>
          </div>
          <div className="flex gap-3 w-full">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2.5 text-sm font-medium rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:focus:ring-neutral-700"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              className="flex-1 px-4 py-2.5 text-sm font-medium rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-800"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
