import {
  Timestamp,
  addDoc,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useState, useEffect, useContext } from "react";
import { db } from "../firebase/config";
import { UserContext } from "../context/UserContext";
import { Post } from "../types/types";

const AddPostForm = () => {
  const { user } = useContext(UserContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const canAdd = title && description;

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setDescription(e.target.value);

  const handleAddPostSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!user) throw new Error(`User is not signed in`);
      const timestamp = Timestamp.now();

      const postsRef = collection(db, "posts");
      const post: Post = {
        title,
        description,
        uid: user?.uid,
        id: "",
        timestamp,
      };
      const addedPost = await addDoc(postsRef, post);
      await updateDoc(doc(db, "posts", addedPost.id), {
        id: addedPost.id,
      });

      setTitle("");
      setDescription("");
    } catch (err) {
      alert(`Error while adding the post: ${err}`);
    }
  };

  return (
    <form
      className="w-full flex flex-col items-center gap-4 justify-center"
      onSubmit={handleAddPostSubmit}
    >
      <h2 className="text-4xl self-start">Create a post</h2>

      <input
        className="bg-secondary py-4 px-5 w-full rounded-xl focus:outline-none border-solid"
        type="text"
        placeholder="Enter the post title..."
        value={title}
        onChange={handleTitleChange}
      />

      <textarea
        className="w-full rounded-xl py-4 px-5 bg-secondary focus:outline-none"
        placeholder="Enter the post content..."
        value={description}
        onChange={handleDescriptionChange}
      />

      <button
        className="bg-gradient-to-b from-accent to-accent-dark px-7 py-3 rounded-xl self-end active:scale-95 hover:scale-105 transition-all disabled:bg-none disabled:bg-gray disabled:bg-opacity-20"
        disabled={!canAdd ? true : false}
      >
        Add Post!
      </button>
    </form>
  );
};

export default AddPostForm;
