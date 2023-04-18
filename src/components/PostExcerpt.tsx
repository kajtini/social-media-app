import { Post, User } from "../types/types";
import { convertTimestamp } from "../utils/convertTimestamp";
import { BsHeart } from "react-icons/bs";
import { BsChatLeft } from "react-icons/bs";
import AddCommentForm from "./AddCommentForm";
import { useState } from "react";
import { useComments } from "../hooks/useComments";
import CommentsList from "./CommentsList";
import { useUser } from "../hooks/useUser";

interface PostExcerptProps {
  post: Post;
  setSelectedPostId: React.Dispatch<React.SetStateAction<string>>;
  selectedPostId: string;
}

const PostExcerpt = ({
  post,
  setSelectedPostId,
  selectedPostId,
}: PostExcerptProps) => {
  const postCreator = useUser(post.uid);
  const postComments = useComments(post.id);

  const convertedTimestamp = convertTimestamp(post.timestamp);

  console.log(selectedPostId);

  return (
    <li className="w-full bg-secondary rounded-xl p-5 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <img
          className="h-11 rounded-full"
          src={postCreator?.photoURL || ""}
          alt="post creator image"
        />

        <div>
          <p>{postCreator?.displayName}</p>
          <p className="text-gray text-sm">{convertedTimestamp}</p>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-1">{post.title}</h3>
        <p className="text-gray leading-7">{post.description}</p>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2 cursor-pointer">
          <BsHeart size={20} />
          <p className="text-sm text-gray font-bold">10</p>
        </div>

        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            if (selectedPostId === post.id) {
              setSelectedPostId("");
            } else {
              setSelectedPostId(post.id);
            }
          }}
        >
          <BsChatLeft size={20} />
          <p className="text-sm text-gray font-bold">{postComments?.length}</p>
        </div>
      </div>

      {selectedPostId === post.id && (
        <>
          <AddCommentForm postId={selectedPostId} />
          <CommentsList postId={selectedPostId} />
        </>
      )}
    </li>
  );
};

export default PostExcerpt;
