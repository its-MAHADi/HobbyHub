import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile,} from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null);
    const [loading,setLoading] = useState(true);

    // console.log(user,loading)

    const createUser =(email,password,name,photoURL)=>{
        setLoading(true)
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
        setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
   }

    const logOut = ()=>{
    return signOut(auth);
    }


    useEffect(()=>{
   const unRegister= onAuthStateChanged(auth,(currentUser)=>{
         setUser(currentUser)
         setLoading(false)
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
        signIn,
        loading,
        setLoading
    }
  return <AuthContext value={authData}> {children} </AuthContext>
}

export default AuthProvider
