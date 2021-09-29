import React from "react";
import { Link } from "react-router-dom";
import AllChefComponent from "./AllChefComponent";

export default function Logout() {
  localStorage.removeItem("token");
  return (
    <div>
      <h1>Logout Successfully!!!</h1>
      {/* <AllChefComponent/> */}
      <button className="btn btn-success">
        <Link to="/login" style={{ textDecoration: 'none', color:'white' }}>Login</Link>
      </button>
    </div>
  );
}
