import { comments as seedComments } from "../assets/comments";
import { allUsers, currentUser } from "../assets/users";
import {
  CommentType,
  CommentActionResponse,
  CommentReponse,
  StoredCommentType,
} from "../types/comment-types";
import { StorageService } from "./storage-service";

const commentsStorageKey = "comments";
export const CommentsService = {
  getComments: (): CommentType[] => {
    let comments = StorageService.get(commentsStorageKey);
    if (!comments) {
      comments = StorageService.set(
        commentsStorageKey,
        seedComments
      ) as CommentType[];
    }
    const mainComments: Record<string | number, CommentType> = {};
    const replies: StoredCommentType[] = [];
    for (const comment of comments) {
      if (comment.parent === null) {
        comment.user = allUsers[comment.user];
        mainComments[comment.id] = comment;
        continue;
      }
      replies.push(comment);
    }
    for (const reply of replies) {
      const parentComment = mainComments[reply.parent];
      reply.user = allUsers[reply.user];
      if (parentComment) {
        if (!parentComment.replies) {
          parentComment.replies = [];
        }
        parentComment.replies.push(reply);
      }
    }

    return Object.values(mainComments).sort((a, b) => b.score - a.score);
  },

  postComment: (
    content: string,
    tagged: string[],
    parent = null
  ): CommentReponse => {
    const id = crypto.randomUUID();
    const allComments = StorageService.get(commentsStorageKey);
    const newComment = {
      id,
      content,
      createdAt: new Date().toISOString(),
      score: 0,
      user: currentUser.username,
      parent,
      replies: [],
      replyingTo: tagged,
    };
    allComments.push(newComment);
    StorageService.set(commentsStorageKey, allComments);
    return {
      success: true,
      comment: { ...newComment, user: allUsers[currentUser.username] },
    };
  },

  updateComment: (
    commentId: number | string,
    content: string,
    tagged: string[]
  ): CommentReponse => {
    const allComments = StorageService.get(commentsStorageKey);
    const comment = allComments.find(
      (comment: CommentType) => comment.id === commentId
    );
    comment.content = content;
    comment.replyingTo = tagged;
    comment.createdAt = new Date().toISOString();

    StorageService.set(commentsStorageKey, allComments);
    return {
      success: true,
      comment: comment,
    };
  },

  reply: (
    commentId: number | string,
    content: string,
    tagged: string[]
  ): CommentActionResponse => {
    const id = crypto.randomUUID();
    const allComments = StorageService.get(commentsStorageKey);
    const parentComment = allComments.find(
      (comment: CommentType) => comment.id === commentId
    );
    const newComment = {
      id,
      content,
      createdAt: new Date().toISOString(),
      score: 0,
      user: currentUser.username,
      parent: parentComment.parent || commentId,
      replies: [],
      replyingTo: tagged,
    };
    allComments.push(newComment);
    StorageService.set(commentsStorageKey, allComments);
    return {
      success: true,
      message: "Successfully replied to comment",
    };
  },

  vote: (commentId: number | string, upvote = true): CommentActionResponse => {
    const allComments = StorageService.get(commentsStorageKey);
    const comment = allComments.find(
      (comment: CommentType) => comment.id === commentId
    );

    if (upvote && !comment.voted) {
      comment.score++;
      comment.voted = true;
      comment.downVoted = false;
    } else if (!upvote && !comment.downVoted) {
      comment.voted = false;
      comment.downVoted = true;
      comment.score--;
    } else {
      return {
        success: false,
        message: `You already ${upvote ? "upvoted" : "downvoted"} the comment`,
      };
    }
    StorageService.set(commentsStorageKey, allComments);
    return {
      success: true,
      message: "Successfully voted",
    };
  },

  deleteComment: (commentId: number | string): CommentActionResponse => {
    const allComments = StorageService.get(commentsStorageKey);
    const commentIndex = allComments.findIndex(
      (comment: CommentType) => comment.id === commentId
    );
    if (commentIndex === -1) {
      return {
        success: false,
        message: "Comment not found",
      };
    }
    allComments.splice(commentIndex, 1);
    StorageService.set(commentsStorageKey, allComments);
    return {
      success: true,
      message: "Successfully deleted comment",
    };
  },
};
