import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../firebase/firebase';

export const AuthContext = createContext();

const { Provider } = AuthContext;

export const AuthContextProvider = ({ children }) => {
    const [userLog, setUserLog] = useState(null);

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);

    }

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUserLog(currentUser);
        });
    }, [])

    return (
        <Provider
            value={{
                registerUser,
                login,
                userLog,
                logOut,
                loginWithGoogle
            }}
        >
            {children}
        </Provider>
    );
};