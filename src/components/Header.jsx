import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <h1 className="text-2xl font-bold">My Website</h1>
      <nav className="mt-2">
        <ul className="flex space-x-4">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/blog"}>Blog</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/departments"}>Departments</Link>
          <Link to={"/notice"}>Notice</Link>
          <Link to={"/events"}>Events</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
