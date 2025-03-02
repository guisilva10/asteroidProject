import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/foguete.png";

const Nav = () => {
  return (
    <nav className="sticky top-0 right-0 left-0 bg-gray-900 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <img src={img} alt="Logo" className="w-16" />
        <div className="flex space-x-6">
          <Link className="text-white transition hover:text-gray-400" to={"/"}>
            Home
          </Link>
          <Link
            className="text-white transition hover:text-gray-400"
            to={"/sobre-mim"}
          >
            Sobre Mim
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
