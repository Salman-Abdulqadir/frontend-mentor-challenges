import { User } from "./user-types";

export type StoredCommentType = CommentType & { user: string };
export type CommentType = {
  id: number | string;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  parent: number | string;
  replies: CommentType[];
  replyingTo: string[];
};

export type CommentActionResponse = {
  success: boolean;
  message: string;
};

export type CommentReponse = {
  success: boolean;
  comment: CommentType;
};
