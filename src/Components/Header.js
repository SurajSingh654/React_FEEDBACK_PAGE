import "./Header.css";
import NavBrand from "./NavBrand";
import NavInfo from "./NavInfo";
import React from "react";
const Header = () => {
  return (
    <div className="Head">
      <NavBrand />
      <NavInfo />
    </div>
  );
};

export default Header;
