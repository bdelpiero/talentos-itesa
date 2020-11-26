import React, { useState, useEffect, useContext } from "react";
import { auth, db } from "../firebase/firebase";
import { useHistory } from "react-router-dom"
import { useRecoilState } from "recoil";
import { isLoading } from "../src/atoms";


const AuthContext = React.createContext();

export function authUser() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if(user){
        return db.collection('users').doc(user.uid).get()
            .then(UserInfo=>{
              const User=UserInfo.data()
              setLoading(false);
              setCurrentUser(User)
                if(User){
                  if(User.isAdmin){
                    history.push("/admin")
                  }else{
                    history.push("/freelancer")
                }
                }
               
              
            })
      }else{
        console.log("USEEFFECT LOADIN",loading)
        setLoading(false);
        setCurrentUser(user);
      }
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loading,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
