import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./LoginForm.css";

const LoginForm = ({ className, ...props }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className={`login-form ${className ? className : ""}`}
      {...props}
      onSubmit={submitHandler}
    >
      <div className="login-form__row">
        <Input
          className="login-form__input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="login-form__row">
        <Input
          className="login-form__input"
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className="login-form__button login-form__button_show_password"
          onClick={showPasswordHandler}
        >
          Show
        </Button>
      </div>
      <div className="login-form__row">
        <Button className="login-form__button" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
