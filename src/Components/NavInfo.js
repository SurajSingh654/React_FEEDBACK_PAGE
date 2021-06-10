import "./NavInfo.css";
import React from "react";
const NavInfo = () => {
  return (
    <div className="navInfo">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Follow</li>
      </ul>
      <div className="navSearch">
        <input type="text" placeholder="Search..."></input>
        <i className="fas fa-search fa-2x searchIcon"></i>
      </div>
    </div>
  );
};

export default NavInfo;
