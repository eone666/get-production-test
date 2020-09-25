import React from "react";
import "./Button.css";

const Button = ({ children, className, ...props }) => (
  <button className={`button ${className ? className : ""}`} {...props}>
    {children}
  </button>
);

export default Button;
