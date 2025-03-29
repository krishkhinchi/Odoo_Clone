import React from "react";
import "../Style/PageNotFound.css";
import notFound from "../img/error404.png";
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
const Navigate = useNavigate();

  return (
    <>
      <img id="error404" src={notFound} alt="Page Not Found" />
      <button id="error404Button" onClick={() => Navigate("/")}>
        Back to home
      </button>
    </>
  );
}