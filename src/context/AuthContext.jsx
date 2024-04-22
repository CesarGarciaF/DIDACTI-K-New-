import { createContext, useContext, useEffect, useState } from "react";
import {
  loginRequest,
  signupRequest,
  profileRequest,
  verifyTokenRequest,
} from "../services/AuthService";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error("useAuth debe usarse dentro de un AuthProvider");

  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

  const signup = async (user) => {
    try {
      const res = await signupRequest(user);
      sessionStorage.setItem("token", res.data.token);

      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      sessionStorage.setItem("token", res.data.token);
      if (res.status === 200) {
        setIsAuthenticated(true);
        profile();
      }
    } catch (error) {
      if (Array.isArray(error.response.data))
        return setErrors(error.response.data);
      setErrors([error.response.data]);
    }
  };

  const profile = async (user) => {
    try {
      const res = await profileRequest(user);
      if (res.status === 200) setUser(res.data);
    } catch (err) {
      if (Array.isArray(err.response.data)) return setErrors(err.response.data);
    }
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      async function checkLogin() {
        try {
          const res = await verifyTokenRequest();
          console.log(res.data);
          if (!res.data) {
            setIsAuthenticated(false);
            setUser(null);
            sessionStorage.removeItem("token");
            return;
          }

          setIsAuthenticated(true);
          setUser(res.data);
        } catch (error) {
          setIsAuthenticated(false);
          setUser(null);
          sessionStorage.removeItem("token");
        }
      }
      checkLogin();
    } else {
      setIsAuthenticated(false);
      setUser(null);
      return;
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signup, signin, logout, user, isAuthenticated, errors }}
    >
      {children}
    </AuthContext.Provider>
  );
};
