import { Children, createContext, useContext, useEffect, useReducer } from "react";
import { _provider, auth, onAuthStateChanged, signInWithPopup, signOut } from "../../firebase";
import { Navigate } from "react-router-dom";

const AuthContext = createContext();
const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload }
        case "LOGOUT":
            return { ...state, user: null }
        default:
            return state;
    }
};

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, { user: null });

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch({ type: 'LOGIN', payload: user })
            } else {
                dispatch({ type: "LOGOUT" });
            }
        });
        return () => unsubscribe();
    }, [])

    const login = async () => {
        try {
            const result = await signInWithPopup(auth, _provider);
            const user = result.user;
            dispatch({ type: "LOGIN", payload: user });
           
        } catch (error) {
            console.error("Login Error:", error);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            dispatch({ type: "LOGOUT" });
            // Optionally, redirect to login page after logout
            Navigate("#/login")
        } catch (error) {
            console.error("Logout Error:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ state, login, logout }}  >
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext);