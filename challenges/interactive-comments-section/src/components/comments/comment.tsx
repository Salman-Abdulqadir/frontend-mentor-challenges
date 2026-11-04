import { FC } from "react";
import { CommentType as CommentType } from "../../types/comment-types";
import Avatar from "../avatar";
import { parseError, timeAgo } from "./utils/helpers";
import { useUser } from "../../store/user";
import TextButton from "../text-button";
import { IconDelete } from "../icons/icon-delete";
import { IconEdit } from "../icons/icon-edit";
import { IconReply } from "../icons/icon-reply";
import { IconPlus } from "../icons/icon-plus";
import { IconMinus } from "../icons/icon-minus";
import { CommentsService } from "../../services/comment-service";
import toast from "react-hot-toast";
import { useConfirm } from "../../store/confirmation-modal";
import CommentComposer from "./comment-composer";
import Button from "../button";
import { User } from "../../types/user-types";

type CommentProps = {
  comment: CommentType & { user: User };
  getComments: () => void;
  editComment: { id: number | string; content: string };
  setEditComment: (value: { id: number | string; content: string }) => void;
  replyComment: { id: number | string; content: string };
  setReplyComment: (value: { id: number | string; content: string }) => void;
};

const Comment: FC<CommentProps> = ({
  comment,
  getComments,
  editComment,
  setEditComment,
  replyComment,
  setReplyComment,
}) => {
  const { user } = useUser();
  const confirm = useConfirm();
  const isOwner = comment?.user?.username === user?.username;
  const vote = async (upvote = true) => {
    try {
      const response = CommentsService.vote(comment?.id, upvote);
      if (!response.success) {
        toast.error(response.message);
        return;
      }
      toast.success(response.message);
      getComments();
    } catch (e) {
      const error = parseError(e);
      toast.error(error.message);
    }
  };
  const deleteComment = async () => {
    const confirmed = await confirm({
      title: "Delete comment",
      description:
        "Are you sure you want to delete this comment? This will remove the comment and can't be undone",
      confirmText: "YES, DELETE",
      cancelText: "NO, CANCEL",
      variant: "danger",
    });
    if (confirmed) {
      const res = CommentsService.deleteComment(comment.id);
      toast.success(res.message);
      getComments();
    }
  };

  const updateComment = () => {
    CommentsService.updateComment(comment.id, editComment.content, []);
    toast.success("Successfully updated comment");
    setEditComment(null);
    getComments();
  };

  const reply = () => {
    CommentsService.reply(comment.id, replyComment.content, []);
    toast.success("Successfully replied comment");
    setReplyComment(null);
    getComments();
  };

  return (
    <div>
      <div className="bg-white px-4 py-5 flex items-start gap-4 rounded-md">
        <div className="flex flex-col bg-light-gray w-[36px] text-center rounded-md">
          <button
            className="cursor-pointer text-light-grayish-blue hover:text-moderate-blue transition-all duration-300 pt-3 mx-auto"
            onClick={() => vote()}
          >
            <IconPlus className="fill-light-grayish-blue hover:fill-moderate-blue transition-all duration-300" />
          </button>
          <div className=" text-moderate-blue font-bold my-4">
            {comment.score}
          </div>
          <button
            className="cursor-pointer text-light-grayish-blue hover:text-moderate-blue transition-all duration-300 pb-3  mx-auto"
            onClick={() => vote(false)}
          >
            <IconMinus className="fill-current" />
          </button>
        </div>
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex gap-3 items-center">
              <Avatar username={comment?.user?.username} />
              <span className="font-bold">{comment?.user?.username}</span>
              {isOwner && (
                <span className="bg-moderate-blue text-white px-1 text-sm">
                  you
                </span>
              )}
              <span className="text-sm">
                {comment.createdAt && timeAgo(comment.createdAt)}
              </span>
            </div>
            {isOwner ? (
              <div className="flex items-center gap-5">
                <TextButton
                  variant="danger"
                  icon={<IconDelete />}
                  onClick={deleteComment}
                >
                  Delete
                </TextButton>
                {editComment?.id !== comment.id && (
                  <TextButton
                    variant="primary"
                    icon={<IconEdit />}
                    onClick={() => {
                      setEditComment({
                        id: comment.id,
                        content: comment.content,
                      });
                      setReplyComment(null);
                    }}
                  >
                    Edit
                  </TextButton>
                )}
              </div>
            ) : (
              <TextButton
                variant="primary"
                icon={<IconReply />}
                onClick={() => {
                  setReplyComment({ id: comment.id, content: "" });
                  setEditComment(null);
                }}
              >
                Reply
              </TextButton>
            )}
          </div>

          {isOwner && editComment?.id === comment.id ? (
            <div className="space-y-3">
              <CommentComposer
                value={editComment?.content}
                setValue={(content) =>
                  setEditComment({ id: comment.id, content })
                }
              />
              <div className="flex gap-3 items-center justify-end">
                <Button
                  variant="secondary"
                  onClick={() => setEditComment(null)}
                >
                  CANCEL
                </Button>
                <Button variant="primary" onClick={updateComment}>
                  UPDATE
                </Button>
              </div>
            </div>
          ) : (
            <p>{comment.content}</p>
          )}
        </div>
      </div>
      {replyComment?.id === comment.id && (
        <div className="bg-white flex gap-4 items-start px-4 py-5 mr-3 rounded-md mt-3">
          <Avatar username={user?.username} />
          <CommentComposer
            value={replyComment.content}
            setValue={(content) => setReplyComment({ id: comment.id, content })}
          />
          <div className="flex flex-col gap-3 justify-end">
            <Button onClick={reply} variant="primary">
              REPLY
            </Button>
            <Button onClick={() => setReplyComment(null)} variant="secondary">
              CANCEL
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comment;
