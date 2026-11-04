const Avatar = ({ srcImage, imageName = "" }) => {
  return (
    <figure className="w-16 h-16">
      <img src={srcImage} alt={imageName} />
    </figure>
  );
};
const DMbox = ({ message }) => {
  return (
    <div className="mt-4 border-2 text-blue-6 rounded-md p-2 hover:bg-blue-3 transition-all duration-150 cursor-pointer">
      {message}
    </div>
  );
};
const NotificationCard = ({ notification }) => {
  const { username, avatar, action, when, isRead, details } = notification;

  return (
    <div
      className={`flex items-start gap-4 rounded-md p-4 ${
        !isRead ? "bg-blue-1" : ""
      }`}
    >
      <Avatar srcImage={avatar} imageName={`${username}-avatar-picture`} />
      <div className="flex-1 flex items-start justify-between">
        <div>
          <p className="text-lg">
            <strong className="hover:text-blue transition-color duration-100 cursor-pointer">
              {username}
            </strong>{" "}
            {action}{" "}
            <strong className="hover:text-blue transition-color duration-100 cursor-pointer">
              {details?.post || details?.groupName}
            </strong>{" "}
            {!isRead && (
              <span className="w-2 h-2 inline-block rounded-full bg-red"></span>
            )}
          </p>
          <p className="text-md text-blue-5">{when}</p>
          {details?.message && <DMbox message={details?.message} />}
        </div>
        {details?.pictureSrc && (
          <figure>
            <img src={details.pictureSrc} alt="" />
          </figure>
        )}
      </div>
    </div>
  );
};

const NotificationList = ({ notifications }) => {
  return (
    <div className="overflow-y-scroll flex flex-col gap-4">
      {notifications?.map((notification, index) => (
        <NotificationCard notification={notification} key={index} />
      ))}
    </div>
  );
};

export default NotificationList;
