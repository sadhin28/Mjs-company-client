import { useContext } from "react";

const AuthProvider = ({children}) => {
    const Authcontext= useContext()
  const user=[
            {
                name:'Sadhin',
                id:"1"
            }
        ]
    const authInfo={
        user
    }
    return (
      <Authcontext.provider value={authInfo}>
            {children}
      </Authcontext.provider>  
    );
};

export default AuthProvider;