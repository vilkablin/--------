import { useState, useEffect, createContext } from "react";
import { TOKEN_STORAGE_KEY } from "../config/config";
import AuthService from "../services/AuthService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem(TOKEN_STORAGE_KEY));

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(!!localStorage.getItem(TOKEN_STORAGE_KEY));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const login = (token) => {
    localStorage.setItem(TOKEN_STORAGE_KEY, token);

    setIsAuthenticated(true);
  };

  const logout = async () => {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);

    if (token) {
      await AuthService.logout({ token: token });

      localStorage.removeItem(TOKEN_STORAGE_KEY);
    }

    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
