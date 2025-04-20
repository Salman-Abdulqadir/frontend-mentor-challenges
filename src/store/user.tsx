import { createContext, ReactNode, useContext } from "react";
import { User, UserImages } from "../types/user-types";

import { UserService } from "../services/user-service";

type ContextType = {
  user: User;
  lookup: Record<string, Partial<UserImages>>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext<ContextType>(null);

const UserProvider = ({ children }: { children: ReactNode }) => {
  return (
    <UserContext.Provider
      value={{
        user: UserService.findMe(),
        lookup: UserService.lookup(),
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => {
  const values = useContext(UserContext);
  if (!values) {
    console.error(
      "Provider is not wrapped around the component you are using this context from "
    );
  }
  return values;
};

export default UserProvider;
