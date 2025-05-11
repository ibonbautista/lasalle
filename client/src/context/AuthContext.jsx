import { createContext,useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login,logout } from "../utils/api/auth";
import { saveToken, removeToken } from "../utils/localStorage";
import { getUserInfo } from "../utils/api/auth";

const AuthContext = createContext({
    userData: {},
    onLogin: async () => {},
    onLogout: () => {}
});

const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        handleGetUserInfo();
    }, []);

    const handleGetUserInfo = async () => {
        const result = await getUserInfo();
        console.log("user info",result);
        if(result.user){
          setUserData(result.user);
        }
    }
    const handleLogin = async (email, password) => {
        const result = await login(email, password);
        if(result.error){
          return result;
        }else{
          setUserData(result.user);
          return result;
        }
    }
    
    const handleLogout = () => {
        logout();
        setUserData(null);
        navigate("/");      // Borra la información del usuario
    };

    return (
        <AuthContext.Provider value={{userData:userData, onLogin:handleLogin, onLogout:handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthContext, 
    AuthProvider
};