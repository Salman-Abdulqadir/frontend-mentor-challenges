// useConfirm.ts
import { createContext, useState, ReactNode, useContext } from "react";
import Button from "../components/button";

type ConfirmOptions = {
  title: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  variant?: "default" | "danger";
};

type ConfirmContextType = {
  confirm: (options: ConfirmOptions) => Promise<boolean>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const ConfirmContext = createContext<ConfirmContextType | undefined>(
  undefined
);

// eslint-disable-next-line react-refresh/only-export-components
export const useConfirm = () => {
  const ctx = useContext(ConfirmContext);
  if (!ctx) throw new Error("useConfirm must be used within ConfirmProvider");
  return ctx.confirm;
};

export const ConfirmProvider = ({ children }: { children: ReactNode }) => {
  const [modalState, setModalState] = useState<ConfirmOptions | null>(null);
  const [resolver, setResolver] = useState<(value: boolean) => void>(() => {});

  const confirm = (options: ConfirmOptions): Promise<boolean> => {
    setModalState(options);
    return new Promise((resolve) => {
      setResolver(() => resolve);
    });
  };

  const handleClose = () => {
    setModalState(null);
  };

  const handleConfirm = () => {
    resolver(true);
    handleClose();
  };

  const handleCancel = () => {
    resolver(false);
    handleClose();
  };

  return (
    <ConfirmContext.Provider value={{ confirm }}>
      {children}
      {modalState && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md w-full max-w-sm shadow-md space-y-3 ">
            <h2 className="text-lg font-bold">{modalState.title}</h2>
            {modalState.description && (
              <p className="text-gray-600">{modalState.description}</p>
            )}
            <div className="flex *:flex-1 gap-3">
              <Button variant="secondary" onClick={handleCancel}>
                {modalState.cancelText || "Cancel"}
              </Button>
              <Button variant="danger" onClick={handleConfirm}>
                {" "}
                {modalState.confirmText || "Confirm"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </ConfirmContext.Provider>
  );
};
