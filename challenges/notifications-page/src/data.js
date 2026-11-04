// AVATARS
import u1 from "./images/avatar-angela-gray.webp";
import u2 from "./images/avatar-anna-kim.webp";
import u3 from "./images/avatar-jacob-thompson.webp";
import u4 from "./images/avatar-kimberly-smith.webp";
import u5 from "./images/avatar-mark-webber.webp";
import u6 from "./images/avatar-nathan-peterson.webp";
import u7 from "./images/avatar-rizky-hasanuddin.webp";

// PICTURES
import p1 from "./images/image-chess.webp";

export const ACTION_TYPES = {
  POST_REACTION: "reacted to your recent post",
  GROUP_JOIN: "has joined your group",
  GROUP_LEFT: "left the group",
  FOLLOW: "followed you.",
  DM: "sent you a private message.",
  PICTURE_COMMENTS: "commented on your picture.",
};

export const notifications = [
  {
    username: "Mark Webber",
    avatar: u5,
    action: ACTION_TYPES.POST_REACTION,
    when: "1m ago",
    isRead: false,
    details: {
      post: "My first tournament today!",
    },
  },
  {
    username: "Angela Gray",
    avatar: u1,
    action: ACTION_TYPES.FOLLOW,
    when: "5m ago",
    isRead: false,
    details: {},
  },
  {
    username: "Jacob Thompson",
    avatar: u3,
    action: ACTION_TYPES.GROUP_JOIN,
    when: "1 day ago",
    isRead: false,
    details: {
      groupName: "Chess Club",
    },
  },
  {
    username: "Rizky Hasanuddin",
    avatar: u7,
    action: ACTION_TYPES.DM,
    when: "5 days ago",
    isRead: true,
    details: {
      message: `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
  I'm already having lots of fun and improving my game.`,
    },
  },
  {
    username: "Kimberly Smith",
    avatar: u4,
    action: ACTION_TYPES.PICTURE_COMMENTS,
    when: "1 week ago",
    isRead: true,
    details: {
      pictureSrc: p1,
    },
  },
  {
    username: "Nathan Peterson",
    avatar: u6,
    action: ACTION_TYPES.POST_REACTION,
    when: "2 week ago",
    isRead: true,
    details: {
      post: "5 end-game strategies to increase your win rate",
    },
  },
  {
    username: "Anna Kim",
    avatar: u2,
    action: ACTION_TYPES.GROUP_LEFT,
    when: "2 week ago",
    isRead: true,
    details: {
      groupName: "Chess Club",
    },
  },
];
