import React, { useState, useEffect, useContext } from "react";
import { auth, db } from "../firebase/firebase";
import { useHistory } from "react-router-dom"
import { useRecoilState } from "recoil";
import { atomLogin,user } from "../src/atoms";


const AuthContext = React.createContext();

export function authUser() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useRecoilState(user);
  const [loading, setLoading] = useState(true);
  const [isLogin, setIsLogin] = useRecoilState(atomLogin);
  const history = useHistory();

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      setIsLogin({
        loadin:false,
        errorCode,
        errorMessage
      })
    });

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
        // se guarda una referencia al usuario
        const userRef=db.collection('users').doc(user.uid)
        //se establece un observer que esta atento a los cambios en la base de datos
        let observer = userRef.onSnapshot(docSnapshot => {
          console.log(`cambios recividos`,docSnapshot.data());
          //se setea el usuario nuevamente con los cambios
          setCurrentUser(docSnapshot.data())
        }, err => {
          console.log(`Encountered error: ${err}`);
        });
        return userRef.get()
            .then(UserInfo=>{
              const User=UserInfo.data()
              setLoading(false);
              setCurrentUser(User)
              setIsLogin({loadin:false})
                if(User){
                  if(User.isAdmin){
                    // console.log("aca redirije")
                    // history.push("/admin")
                  }else{
                    history.push("/freelancer")
                }
                }             
              
            }).catch(err => {
              console.log('Error getting document', err);
            })
      }else{
        setLoading(false);
        setCurrentUser({});
      }
    });
    return unsubscribe;
  }, []);



  const value = {
    currentUser,
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
