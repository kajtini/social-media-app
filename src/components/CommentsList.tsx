import { useComments } from "../hooks/useComments";
import CommentExcerpt from "./CommentExcerpt";

interface CommentsListProps {
  postId: string;
}

const CommentsList = ({ postId }: CommentsListProps) => {
  const comments = useComments(postId);

  return (
    <ul className="flex flex-col gap-5">
      {comments?.map((comment) => (
        <CommentExcerpt key={comment.id} comment={comment} />
      ))}
    </ul>
  );
};

export default CommentsList;
