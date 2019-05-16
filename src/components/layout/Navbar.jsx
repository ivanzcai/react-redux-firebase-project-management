import React from "react";
import { Link } from "react-router-dom";
import SignInLinks from "./SigninLinks";
import SignOutLinks from "./SignoutLinks";
const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Mario Plan
        </Link>
        <SignInLinks />
        <SignOutLinks />
      </div>
    </nav>
  );
};

export default Navbar;
