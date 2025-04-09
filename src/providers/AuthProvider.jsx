// step-20___________________________________________________________________________3


/*

    import { createContext, useState } from "react";
    import { getAuth } from "firebase/auth";
    import { app } from "../firebase/firebase.config";
    
    export const AuthContext = createContext(null);
    
    const auth = getAuth(app);
    
    const AuthProvider = ({children}) => {
    
        const [user, setUser] = useState(null);
        const [loading, setLoading] = useState(true);      //step-3______________________________________
    
        const authInfo = {
            user,
            loading
        }
    
        return (
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        );
    };
    
    export default AuthProvider;
   
*/

import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    // step-21___________________________________________________________________2_start
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // step-21___________________________________________________________________2_end

    // step-26______________________________________________________________________1

      const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    // step-21_______________________________________________________________________1_start

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
        });

        return () => {
            return unsubscribe();
        }
    },[])

    // step-21_______________________________________________________________________1_end

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;