import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Error.css";
const Error = () => {
  useEffect(() => {
    let hero_container = document.getElementById("hero_container");
    hero_container.style.display = "none";
  });
  useEffect(() => {
    let footer_container = document.getElementById("footer_container");
    footer_container.style.display = "none";
  });
  return (
    <>
      <div className="errormain">
        <div className="card-body">
          <h1>ERROR 404</h1>
          <Link to={"/"} className="btn btn-primary">
            Now Go HomePage
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;