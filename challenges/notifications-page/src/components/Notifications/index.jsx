import { useEffect, useState } from "react";

import NotificationHeader from "./NotificationHeader";
import NotificationList from "./NotificationList";
import { notifications as notificationsData } from "../../data";

const Notifications = () => {
  const handleMarkAllAsRead = () => {
    if (!unReadNotificationCount) {
      alert("All notification are read:)");
      return;
    }
    const response = confirm(
      "Are you sure? This action will mark all the notification as read."
    );
    if (response) {
      setNotifications((prevState) =>
        prevState.map((notification) =>
          notification?.isRead
            ? notification
            : { ...notification, isRead: true }
        )
      );
    }
  };
  const [notifications, setNotifications] = useState(notificationsData);
  const [unReadNotificationCount, setUnReadNotificationCount] = useState();
  const getUnReadNotificationCount = () => {
    const count =
      notifications?.filter((notification) => !notification.isRead)?.length ||
      0;
    setUnReadNotificationCount(count);
  };

  useEffect(() => {
    getUnReadNotificationCount();
  }, [notifications]);
  return (
    <section className="bg-white flex flex-col flex-grow overflow-scroll gap-4 p-6 mt-2 w-full lg:w-3/5 lg:mt-16 sm:w-full sm:mt-2 transition-all ease-in-out duration-500">
      <NotificationHeader
        unReadNotificationCount={unReadNotificationCount}
        handleMarkAllAsRead={handleMarkAllAsRead}
      />
      <NotificationList notifications={notifications} />
    </section>
  );
};

export default Notifications;
