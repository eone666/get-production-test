import React from "react";
import "./Input.css";

const Input = ({ className, ...props }) => (
  <input className={`input ${className ? className : ""}`} {...props} />
);

export default Input;
