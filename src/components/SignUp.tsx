import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { auth, db } from "../firebase/config";
import { UserContext } from "../context/UserContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {
  const { logIn, user } = useContext(UserContext);

  const navigate = useNavigate();

  const handleContinueWithGoogle = async () => {
    try {
      const user = await signInWithPopup(auth, new GoogleAuthProvider());

      if (!user)
        throw new Error(
          `Problem during proceeding. User assignment unsucesfull.`
        );

      const { displayName, photoURL, email, uid } = user.user;

      if (displayName && photoURL && email && uid) {
        await setDoc(doc(db, "users", uid), {
          displayName,
          photoURL,
          email,
          uid,
        });

        logIn({ displayName, photoURL, email, uid });
      }
    } catch (err) {
      alert(`Error while proceeding with google: ${err}`);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <button
      className="bg-gradient-to-b from-accent to-accent-dark py-5 px-8 flex items-center gap-3 rounded-xl text-lg"
      onClick={handleContinueWithGoogle}
    >
      <FaGoogle size={20} />
      Continue with google
    </button>
  );
};

export default SignUp;
