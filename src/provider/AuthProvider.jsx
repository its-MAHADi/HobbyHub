import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile,} from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null);
    console.log(user)
    const createUser =(email,password,name,photoURL)=>{
     return createUserWithEmailAndPassword(auth,email,password).then(
      (result) => {
        return updateProfile(result.user, {
          displayName: name,
          photoURL: photoURL
        }).then(() => {
          const updatedUser = { ...result.user, displayName: name, photoURL };
          setUser(updatedUser);
          return updatedUser;
        });
      }
    );
    }

    const signIn = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
   }

    const logOut = ()=>{
    return signOut(auth);
    }


    useEffect(()=>{
   const unRegister= onAuthStateChanged(auth,(currentUser)=>{
         setUser(currentUser)
     });
      return ()=>{
            unRegister();
         }

    },[])

    const authData ={
        user,
        setUser,
        createUser,
        logOut,
        signIn
    }
  return <AuthContext value={authData}> {children} </AuthContext>
}

export default AuthProvider
