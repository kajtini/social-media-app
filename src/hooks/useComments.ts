import { useEffect, useState } from "react";
import { Comment } from "../types/types";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase/config";

export const useComments = (postId: string) => {
  const [comments, setComments] = useState<Comment[] | null>(null);

  useEffect(() => {
    const fetchPostComments = async () => {
      try {
        const commentsRef = collection(db, "posts", postId, "comments");
        const commentsQuery = query(commentsRef, orderBy("timestamp", "desc"));

        const unsubscribe = onSnapshot(
          commentsQuery,
          (commentsQuerySnapshot) => {
            const filteredComments: Comment[] = commentsQuerySnapshot.docs.map(
              (doc) => {
                const commentData = doc.data();

                const filteredComment: Comment = {
                  content: commentData.content,
                  timestamp: commentData.timestamp,
                  uid: commentData.uid,
                  id: commentData.id,
                };

                return filteredComment;
              }
            );

            setComments(filteredComments);
          }
        );

        return () => unsubscribe();
      } catch (err) {
        console.error(`Error while fetching comments: ${err}`);
      }
    };

    fetchPostComments();
  }, []);

  return comments;
};
