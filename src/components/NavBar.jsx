import React from "react";
import "../App.css";
import CardWidget from "./CardWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bloqueNav position ">

      <nav className="navbar  navbar-expand-lg bg-secondary">
        <div className="container-fluid">
          <Link to={"/"}>
            <img src="https://previews.123rf.com/images/301librarians/301librarians1802/301librarians180200016/95299996-cosas-viejas-de-cart%C3%B3n.jpg" className="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle navTextStyle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categoria
                </a>
                <ul className="dropdown-menu navBar">
                  <li>
                    <Link className="dropdown-item" to={`/category/${"electrodomesticos"}`}>
                      Electrodomesticos
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`/category/${"muebles"}`}>
                      Muebles
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`/category/${"juguetes"}`}>
                      Juguetes
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`/category/${"accesorios"}`}>
                      Accesorios
                    </Link>
                  </li>
                </ul>
              </li>

              <Link className="nav-link navTextStyle" to={"/store"}>
                Tienda
              </Link>
            </ul>
          </div>

          {/*Componente CardWidget */}
             <CardWidget />
        </div>
      </nav>


    </div>

  );
};

export default NavBar;
