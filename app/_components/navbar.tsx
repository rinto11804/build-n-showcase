import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-start">
        <a className="font-bold text-2xl" href="/">
          build-n-showcase
        </a>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary text-primary-content btn-sm uppercase">
          log in
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
