import React from "react";

const UserPanel = ({
  timeframeOptions,
  selectedTimeframe,
  setSelectedTimeframe,
  username,
  avatarImage,
}) => {
  return (
    <div className="h-full w-full bg-navy-900 rounded-xl flex flex-col">
      <div className="flex-1 rounded-xl bg-purple-600 p-6 flex items-center space-x-3 md:flex-col md:items-start md:space-y-8">
        <img
          src={avatarImage}
          alt={username}
          className="h-18 w-18 rounded-full border-2 border-white"
        />
        <div className="space-y-2">
          <p className="text-sm text-navy-200">Report for</p>
          <p className="text-3xl">{username}</p>
        </div>
      </div>
      <ul className="p-6 flex items-center justify-between flex-wrap md:flex-col md:items-start space-y-3">
        {timeframeOptions?.map((option) => {
          const active = option === selectedTimeframe;
          return (
            <li
              key={option}
              className={`cursor-pointer ${
                active
                  ? "text-white"
                  : "text-navy-200 hover:text-white transition-colors duration-300"
              } `}
              onClick={() => setSelectedTimeframe(option)}
            >
              {option}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserPanel;
