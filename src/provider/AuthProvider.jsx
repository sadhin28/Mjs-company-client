import { createContext, use, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.init";

export const AuthContext=createContext();

const auth = getAuth(app)


const AuthProvider = ({children}) => {
   const [user,setuser]=useState(null)
    const [loading,setloading]=useState(true)

    //Create user
    const CreateNewUser=(email,password)=>{
        setloading(false);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //updateprofile
    const Updateprofiel=(name,photo)=>{
        updateProfile(auth.currentUser,{
             displayName: name, 
             photoURL: photo
        })
    }

      useEffect(()=>{
     const  unsubscribe =  onAuthStateChanged(auth,currentUser=>{
            setuser(currentUser)
            setloading(false);
        })
        return()=>{
            unsubscribe();
            setuser(null)
        }
    },[])
    //LogIn
    const  login =(email,password)=>{
        setloading(false);
        return signInWithEmailAndPassword(auth,email,password)
    }
    //Logout
    const Logout=()=>{
        return signOut(auth)
    }
    //Forgot password
    const forgotPassword =(auths,email)=>{
        return sendPasswordResetEmail(auths,email)
    }
    const authInfo={
        forgotPassword,
        loading,
        user,
        setuser,
        CreateNewUser,
        Updateprofiel,
        Logout,
        login,
        
    }
    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
       
    );
};

export default AuthProvider;