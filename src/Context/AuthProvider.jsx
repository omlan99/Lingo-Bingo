import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import auth from '../Firebase/Firebase.init';

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState (null)
    const [loader, setLoader] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
      };

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };  
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
      };

      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
          console.log("User logged in ", loggedUser);
          setUser(loggedUser);
        });
        return () => {
          unsubscribe();
        };
      }, []);
      const updateUser= (updateData) =>{
        return updateProfile(auth.currentUser, updateData)
      }
      const signOutUser = () => {
        return signOut(auth);
      };
    const authValue = {
        user,
        loader,
        createUser,
        signInUser,
        googleSignIn,
        updateUser,
        signOutUser, 

    }
    return (
        <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
     );
};

export default AuthProvider;