import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
import useAxiosCommon from "../Hooks/useAxiosCommon";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const auth = getAuth(app);
  const axiosCommon = useAxiosCommon();

  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUser = async ({ name, photo }) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
        console.log(currentUser);

        // require jwt
        try {
          // !THERE IS A BUG, TOKEN SENDING WHEN REFRESHING THE PAGE
          const userInfo = { email: currentUser.email };
          axiosCommon.post("/jwt", userInfo).then((res) => {
            console.log(res.data);
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => unSubscribe();
  }, [axiosCommon]);

  const authInfo = {
    signUp,
    loading,
    login,
    updateUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
