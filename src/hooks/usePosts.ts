import { useEffect, useState } from "react";
import { Post } from "../types/types";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase/config";

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const postsRef = collection(db, "posts");
        const postsQuery = query(postsRef, orderBy("timestamp", "desc"));

        const unsubscribe = onSnapshot(postsQuery, (postsQuerySnapshot) => {
          const filteredPosts = postsQuerySnapshot.docs.map((doc) => {
            const postData: Post = doc.data() as Post;

            const filteredPost: Post = {
              title: postData.title,
              description: postData.description,
              uid: postData.uid,
              id: postData.id,
              timestamp: postData.timestamp,
            };

            return filteredPost;
          });

          setPosts(filteredPosts);

          setLoading(false);
        });

        return () => unsubscribe();
      } catch (err) {
        alert(`Error while fetching the posts: ${err}`);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading };
};
