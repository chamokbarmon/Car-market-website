import React, { createContext, useEffect, useState} from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/Firebase/Firebase.config';

export const AuthContext = createContext();
const auth =getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState({})
    const [loading, setLoading] = useState(true)
   
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut =()=>{
        setLoading(true);
        return signOut(auth)
    }
    const updateUser = (userInfo)=>{
        return updateProfile(auth.carrentUser,userInfo)
    }
    const GoogleProvider = (provider)=>{
        setLoading(true)
         return signInWithPopup(auth,provider)
      }

    
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        setLoading(false)
      })
      return ()=> unsubscribe();

    },[])

    const authInfo={
        user,
       createUser,
       signIn,
       updateUser,
       loading,
       logOut,
       GoogleProvider
    }
    return (
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;