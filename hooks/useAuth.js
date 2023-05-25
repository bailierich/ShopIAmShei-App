import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loadingInitial, setLoadingInitial] = useState(true);

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setUser(userCredential.user);
        // ...
      })
      .catch((error) => {
        setError(error);
        alert(error.message);
        // ..
      });
  };

  const logout = () => {
    signOut(auth).catch((error) => {
      setError(error);
      alert(error.message);
      // ..
    });
  };

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setUser(userCredential.user);
        // ...
      })
      .catch((error) => {
        setError(error);
        alert(error.message);
      });
  };

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // Logged In
          setUser(user);
        } else {
          setUser(null);
        }

        setLoadingInitial(false);
      }),

    []
  );

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, logout, error }}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
