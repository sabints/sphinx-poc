import { Children, createContext, useContext, useReducer } from "react";

const AuthContext = createContext();
const authReducer = (state, action) => {
    debugger;
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
    return (
        <AuthContext.Provider value={{ state, dispatch }}  >
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext);