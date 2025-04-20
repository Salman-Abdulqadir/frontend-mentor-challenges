import UserProvider from "./user";
import { ConfirmProvider } from "./confirmation-modal";
import { ReactNode } from "react";

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <UserProvider>
      <ConfirmProvider>{children}</ConfirmProvider>
    </UserProvider>
  );
};

export default AppContextProvider;
