import React from "react";
import "./Login.css";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {
  return (
    <div className="login-page">
      <h1 className="h1">Login Page</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
