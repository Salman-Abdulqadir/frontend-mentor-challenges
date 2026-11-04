import React from "react";

const NotificationHeader = ({
  unReadNotificationCount = 0,
  handleMarkAllAsRead,
}) => {
  return (
    <header className="flex justify-between items-center gap-4">
      <h1>
        Notifications{" "}
        <span className="bg-blue text-white rounded-md py-1 px-3">
          {unReadNotificationCount}
        </span>
      </h1>
      <button
        className={
          "border-none text-blue-6 hover:text-blue bg-transparent transition delay-100 "
        }
        onClick={() => handleMarkAllAsRead()}
      >
        Mark all as read
      </button>
    </header>
  );
};

export default NotificationHeader;
