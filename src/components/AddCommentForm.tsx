import { BsChatLeft } from "react-icons/bs";
import { useState, useContext } from "react";
import {
  Timestamp,
  addDoc,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/config";
import { Comment } from "../types/types";
import { UserContext } from "../context/UserContext";

interface AddCommentFormProps {
  postId: string;
}

const AddCommentForm = ({ postId }: AddCommentFormProps) => {
  const [content, setContent] = useState("");

  const { user } = useContext(UserContext);

  const canComment = Boolean(content);

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setContent(e.target.value);

  const handleCommentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      if (!user) throw new Error("User is not signed in");

      const postsCommentsRef = collection(db, "posts", postId, "comments");

      const comment: Comment = {
        content,
        timestamp: Timestamp.now(),
        uid: user.uid,
        id: "",
      };

      const addedComment = await addDoc(postsCommentsRef, comment);

      await updateDoc(doc(db, "posts", postId, "comments", addedComment.id), {
        id: addedComment.id,
      });

      setContent("");
    } catch (err) {
      alert(`Error while adding the comment: ${err}`);
    }
  };

  return (
    <form className="flex items-stretch gap-3" onSubmit={handleCommentSubmit}>
      <input
        className="bg-secondary border-solid border-[1px] border-white border-opacity-10 rounded-xl px-5 py-3 w-full focus:outline-none"
        type="text"
        placeholder="What do you want to say..."
        value={content}
        onChange={handleContentChange}
      />

      <button
        className="bg-gradient-to-b from-accent to-accent-dark rounded-xl px-3 disabled:bg-none disabled:bg-gray disabled:bg-opacity-20"
        disabled={!canComment ? true : false}
      >
        Comment
      </button>
    </form>
  );
};

export default AddCommentForm;
