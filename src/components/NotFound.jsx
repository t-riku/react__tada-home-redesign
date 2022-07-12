import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <h1>404</h1>
      <h2>Not Found Page</h2>
      <div className="row mt-5 button">
        <Link to="/" className="btn btn-outline-dark py-3">
          TOPに戻る
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
