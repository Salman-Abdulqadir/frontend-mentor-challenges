import { FC, useState } from "react";
import { CommentType } from "../../types/comment-types";
import Comment from "./comment";

type Props = {
  comments: CommentType[];
  getComments: () => void;
};
const CommentList: FC<Props> = ({ comments, getComments }) => {
  const [editComment, setEditComment] = useState<{
    id: number | string;
    content: string;
  }>(null);
  const [replyComment, setReplyComment] = useState<{
    id: number | string;
    content: string;
  }>(null);
  return (
    <div className="space-y-3">
      {comments?.map((comment) => (
        <div key={comment.id} className="space-y-3 ">
          <Comment
            comment={comment}
            getComments={getComments}
            editComment={editComment}
            setEditComment={setEditComment}
            replyComment={replyComment}
            setReplyComment={setReplyComment}
          />
          <div className="space-y-3 ml-[30px] pl-8 border-l-[1px] border-grayish-blue/30">
            {comment.replies?.map((reply) => (
              <div className="space-y-3 ">
                <Comment
                  comment={reply}
                  key={reply.id}
                  getComments={getComments}
                  editComment={editComment}
                  setEditComment={setEditComment}
                  replyComment={replyComment}
                  setReplyComment={setReplyComment}
                />
                <div className="space-y-3 ml-[30px] pl-8 border-l-[1px] border-grayish-blue/30">
                  {reply.replies?.map((reply) => (
                    <Comment
                      comment={reply}
                      key={reply.id}
                      getComments={getComments}
                      editComment={editComment}
                      setEditComment={setEditComment}
                      replyComment={replyComment}
                      setReplyComment={setReplyComment}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
