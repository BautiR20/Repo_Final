import { useState, useMemo } from "react";
import { AuthContext } from "./AuthContext.jsx";
import { jwtDecode } from "jwt-decode";

export const AuthProvider = ({ children }) => {
  
  const [token, setToken] = useState(
    () => sessionStorage.getItem("ecommerce_token") || null,
  );

  
  
  const user = useMemo(() => {
    if (!token) return null;
    try {
      const decoded = jwtDecode(token);
      return {
        id: decoded.userId,
        email: decoded.userEmail,
        role: decoded.role,
        avatar: decoded.avatar,
      };
    } catch (error) {
      console.error("Invalid token:", error.message);
      
      sessionStorage.removeItem("ecommerce_token");
      return null;
    }
  }, [token]);

  const login = (newToken) => {
    sessionStorage.setItem("ecommerce_token", newToken);
    setToken(newToken);
  };

  const logout = () => {
    sessionStorage.removeItem("ecommerce_token");
    setToken(null);
  };

  const isAuthenticated = !!token && !!user;

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        isAuthenticated,
        login,
        logout,
        isAdmin: user?.role === "ADMIN",
        isSeller: user?.role === "SELLER",
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
