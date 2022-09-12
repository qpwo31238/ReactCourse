import React from 'react';
import { useState } from "react";

const AuthContext = React.createContext({
    isAuthenticated: false,
});

export const AuthProvider = ({children}) => {
    const [isAuthenticated, SetIsAuthenticated] = useState(false)
    return (
        <AuthContext.Provider 
            value={{
                isAuthenticated
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;