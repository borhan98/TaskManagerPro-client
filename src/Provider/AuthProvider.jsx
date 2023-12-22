import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // google login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  }

  // github login
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  }

  // Create new user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // Update User profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
    })
  }

  // Login user 
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // logout user
  const logoutUser = () => {
    return signOut(auth);
  }


  
  // Handle state change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        setLoading(false);
    })
    
    return () => {
        return unSubscribe();
    }
  }, [])

  const authInfo = {
    user,
    loading,
    createUser,
    updateUserProfile,
    loginUser,
    logoutUser,
    googleLogin,
    githubLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
