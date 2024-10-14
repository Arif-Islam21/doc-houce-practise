import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const auth = getAuth(app);

  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUser = async ({ name, photo }) => {
    try {
      return await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
    } catch (error) {
      console.error("error in the authprovider file", error);
    }
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
        console.log(currentUser);
      } else {
        setUser(null);
        setLoading(false);
      }
      // setUser(currentUser);
      // setLoading(false);
      // console.log(user);
    });

    return () => unSubscribe();
  }, []);

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
