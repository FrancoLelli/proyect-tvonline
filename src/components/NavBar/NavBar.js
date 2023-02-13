import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <>
      <nav className="navbar navbar-light bg-secondary justify-content-between">
        <div>
          <Link className="navbar-brand m-2" to="/">
            Tv Online
          </Link>
          <Link
            className="navbar-brand m-2"
            style={{ color: "white" }}
            to="/canales"
          >
            Canales TV
          </Link>
          <Link
            className="navbar-brand m-2"
            style={{ color: "white" }}
            to="/favoritos"
          >
            Favoritos
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
