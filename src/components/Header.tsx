import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Outlet } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

const Header = () => {
  const { user } = useContext(UserContext);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      alert(`Error while signing out: ${err}`);
    }
  };

  return (
    <>
      <header className="w-full">
        <div className="flex items-center justify-between p-5 w-full max-w-[1200px] mx-auto">
          <p className="text-2xl">Yeshgram</p>

          {user && (
            <div className="flex items-center gap-3">
              <button
                className="py-2 bg-gradient-to-b from-accent to-accent-dark px-3 rounded-xl"
                onClick={handleSignOut}
              >
                Sign out
              </button>
              <img
                className="h-11 rounded-full"
                src={user?.photoURL}
                alt="user image"
              />
            </div>
          )}
        </div>
      </header>

      <Outlet />
    </>
  );
};

export default Header;
