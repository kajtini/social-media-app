import { usePosts } from "../hooks/usePosts";
import PostExcerpt from "./PostExcerpt";
import { useState } from "react";

const PostsList = () => {
  const { posts, loading } = usePosts();
  const [selectedPostId, setSelectedPostId] = useState("");

  return (
    <div className="w-full">
      <h3 className="text-4xl mb-4">Latest posts</h3>

      {(!posts || !posts.length) && <h2>Be the first one to post!</h2>}
      {posts && posts.length && (
        <ul className="flex flex-col gap-4 ">
          {posts.map((post) => (
            <PostExcerpt
              key={post.id}
              post={post}
              setSelectedPostId={setSelectedPostId}
              selectedPostId={selectedPostId}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostsList;
