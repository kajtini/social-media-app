import { Comment } from "../types/types";
import { convertTimestamp } from "../utils/convertTimestamp";
import { useUser } from "../hooks/useUser";

interface CommentExcerptProps {
  comment: Comment;
}

const CommentExcerpt = ({ comment }: CommentExcerptProps) => {
  const commentCreator = useUser(comment.uid);
  const convertedTimestamp = convertTimestamp(comment.timestamp);

  return (
    <li className="flex flex-col gap-2  px-5 border-l border-opacity-10 border-white">
      <div className="flex items-center gap-4">
        <img
          className="h-9 rounded-full"
          src={commentCreator?.photoURL || ""}
          alt="post creator image"
        />

        <div>
          <p className="text-sm">{commentCreator?.displayName}</p>
          <p className="text-gray text-sm">{convertedTimestamp}</p>
        </div>
      </div>
      <p className="text-sm leading-7">{comment.content}</p>
    </li>
  );
};

export default CommentExcerpt;
