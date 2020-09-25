import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./Login.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { setUser } = useAuth();

  const authorizeUser = (username) => {
    setUser({ username });
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login-page">
      <h1 className="h1">Login</h1>
      <LoginForm authorizeUser={authorizeUser} />
    </div>
  );
};

export default Login;
