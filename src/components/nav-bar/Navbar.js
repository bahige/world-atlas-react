import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  let navbar = (
    <div id="navbar">
      <Link className="navitem" to="/">
        World
      </Link>
      <Link className="navitem" to="/africa">
        Africa
      </Link>
      <Link className="navitem" to="/america">
        America
      </Link>
      <Link className="navitem" to="/asia">
        Asia
      </Link>
      <Link className="navitem" to="/europe">
        Europe
      </Link>
      <Link className="navitem" to="/oceania">
        Oceania
      </Link>
    </div>
  );

  return navbar;
};

export default NavBar;
