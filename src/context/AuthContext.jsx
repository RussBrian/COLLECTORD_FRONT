import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducers/authReducer.js";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, { user: null, role: null, isAutenticated: false });

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext)


export { AuthProvider, useAuth }
