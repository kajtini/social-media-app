import { ReactNode, createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { User } from "../types/types";

interface UserContextType {
  user: User | null;
  logIn: (user: User) => void;
  logOut: () => void;
}

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextType);

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const logIn = (user: User) => {
    setUser(user);
  };

  const logOut = () => {
    setUser(null);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, photoURL, uid } = user;

        if (displayName && email && photoURL && uid) {
          logIn({ displayName, email, photoURL, uid });
        }
      } else {
        logOut();
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
