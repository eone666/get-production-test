import React from "react";
import { Link } from "react-router-dom";
import "./404.css";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFoundPage;
