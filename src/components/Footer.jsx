import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className=" px-6 py-4">
      <div className="border border-stone-400 py-2 px-3 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto text-center my-4">
          <div className="w-full h-32 border border-stone-400 ">
            <Link
              to={"/"}
              className="text-2xl font-extrabold tracking-wide text-blue-700 drop-shadow-sm"
            >
              <div>VESA</div>
            </Link>
          </div>
          <div className="grid grid-cols-4 w-full h-32 border border-stone-400 ">
            <div className="border border-stone-400 "></div>
            <div className="border border-stone-400 "></div>
            <div className="border border-stone-400 "></div>
            <div className="border border-stone-400 "></div>
          </div>
        </div>
        <div className="w-full h-32 border border-stone-400">terms</div>

        <div className="container mx-auto text-center">
          <p className="text-sm">
            Copyright &copy; {new Date().getFullYear()} Cresea Tech Society. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
