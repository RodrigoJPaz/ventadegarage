import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div>
      <div className="imgHome">
        <Link to={"./store"}>
          <button className="buttonHome bg-warning">Ir a la tienda </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
