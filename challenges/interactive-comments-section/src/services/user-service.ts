import { allUsers, currentUser } from "../assets/users";
import { UserImages } from "../types/user-types";

export const UserService = {
  findMe: () => {
    return currentUser;
  },
  lookup: () => {
    return Object.keys(allUsers).reduce((acc, key) => {
      acc[key] = allUsers[key].images;
      return acc;
    }, {} as Record<string, Partial<UserImages>>);
  },
};
