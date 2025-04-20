import { useState, useEffect } from "react";
import { useUser } from "../../store/user";

import Avatar from "../avatar";
import Button from "../button";
import CommentComposer from "./comment-composer";
import { CommentsService } from "../../services/comment-service";
import toast from "react-hot-toast";
import CommentList from "./comment-list";

const Comments = () => {
  const { user } = useUser();
  const [userComment, setUserComment] = useState("");
  const postComment = () => {
    const comment = CommentsService.postComment(userComment, []);
    toast.success("Comment posted successfully!");
    setUserComment("");
    getComments();
    return comment;
  };
  const [comments, setComments] = useState([]);
  const getComments = () => setComments(CommentsService.getComments());
  useEffect(() => {
    const allComments = CommentsService.getComments();
    setComments(allComments);
  }, []);
  return (
    <main className="mx-auto max-w-[800px] h-screen flex-1 overflow-scroll p-4 flex flex-col gap-3">
      <div className="flex-1 overflow-scroll pr-3">
        <CommentList comments={comments} getComments={getComments} />
      </div>
      {user && (
        <div className="bg-white flex gap-4 items-start px-4 py-5 mr-3 rounded-md">
          <Avatar username={user?.username} />
          <CommentComposer value={userComment} setValue={setUserComment} />
          <Button onClick={postComment} variant="primary">
            SEND
          </Button>
        </div>
      )}
    </main>
  );
};

export default Comments;
