import React from "react";
import { FaAlignRight } from "react-icons/fa";

import logo from "../assets/logo.svg";
import PageLinks from "../constants/links";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div class="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button type="button" className="button toggle-btn">
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  );
};

export default Navbar;
