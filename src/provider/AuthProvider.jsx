import { createContext, useEffect, useState } from "react";
export const AuthContext=createContext();




const AuthProvider = ({children}) => {
   
    const authInfo={
       
    }
    
    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;