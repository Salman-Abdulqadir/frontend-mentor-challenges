import { FC } from "react";
import { allUsers } from "../assets/users";

type Props = FC<{ username: string }>;
const Avatar: Props = ({ username }) => {
  return (
    <img
      src={allUsers?.[username]?.images?.png}
      alt={username}
      className="w-[32px] h-[32px]"
    />
  );
};

export default Avatar;
