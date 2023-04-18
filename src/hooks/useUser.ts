import { User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebase/config";

export const useUser = (uid: string) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getPostCreator = async () => {
      try {
        const userRef = doc(db, "users", uid);
        const userSnapshot = await getDoc(userRef);

        setUser(userSnapshot.data() as User);
      } catch (err) {
        alert(`Error while retrieving the post creator: ${err}`);
      }
    };

    getPostCreator();
  }, []);

  return user;
};
