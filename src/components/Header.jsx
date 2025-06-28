import React from "react";
import { Link } from "react-router-dom";
import { LuMoveRight, LuAlignLeft, LuX } from "react-icons/lu";

//todo: add sticky to the header
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <header className="w-full lg:px-6 px-2  bg-white sticky top-0 z-30 transition-shadow">
      <div>
        <section className="h-8 flex items-center justify-center gap-2 border border-stone-300 my-2 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 font-medium text-blue-900">
          Admission is on now, grab your seat now{" "}
          <span>
            <LuMoveRight />
          </span>
        </section>
        <div className="w-full h-14 border border-stone-300 rounded-2xl px-5 py-1.5 flex items-center justify-between bg-white/80 backdrop-blur-md">
          <Link
            to={"/"}
            className="text-2xl font-extrabold tracking-wide text-blue-700 drop-shadow-sm"
          >
            <div>VESA</div>
          </Link>
          <nav className="mt-2">
            <ul className="lg:flex hidden space-x-4 items-center font-semibold">
              <Link to={"/about"}>About</Link>
              <Link to={"/blog"}>Blog</Link>
              <Link to={"/contact"}>Contact</Link>
              <Link to={"/departments"}>Departments</Link>
              <Link to={"/notice"}>Notice</Link>
              <Link to={"/academica"}>Academia</Link>
              <Link to={"/events"}>Events</Link>
            </ul>
          </nav>
          <div className="lg:flex hidden">
            <button className="border border-blue-300 px-4 py-1 rounded-lg font-semibold bg-blue-50 hover:bg-blue-100 transition">
              Get in touch
            </button>
          </div>
          <div className="text-4xl lg:hidden block cursor-pointer text-blue-700">
            <LuAlignLeft onClick={handleMenuToggle} />
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
          onClick={handleCloseMenu}
        />
      )}

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 left-0 z-50 h-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out
        ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden w-[clamp(260px,50vw,500px)]`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-stone-200">
          <span className="text-xl font-bold text-blue-700">Menu</span>
          <button
            className="text-3xl text-blue-700 hover:text-blue-900 transition"
            onClick={handleCloseMenu}
            aria-label="Close menu"
          >
            <LuX />
          </button>
        </div>
        <nav className="mt-6 px-4">
          <ul className="space-y-4 font-semibold text-blue-800">
            <li>
              <Link to={"/about"} onClick={handleCloseMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to={"/blog"} onClick={handleCloseMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link to={"/contact"} onClick={handleCloseMenu}>
                Contact
              </Link>
            </li>
            <li>
              <Link to={"/departments"} onClick={handleCloseMenu}>
                Departments
              </Link>
            </li>
            <li>
              <Link to={"/notice"} onClick={handleCloseMenu}>
                Notice
              </Link>
            </li>
            <li>
              <Link to={"/academica"} onClick={handleCloseMenu}>
                Academia
              </Link>
            </li>
            <li>
              <Link to={"/events"} onClick={handleCloseMenu}>
                Events
              </Link>
            </li>
          </ul>
          <div className="mt-8">
            <button
              className="w-full border border-blue-300 px-4 py-2 rounded-lg font-semibold bg-blue-50 hover:bg-blue-100 transition"
              onClick={handleCloseMenu}
            >
              Get in touch
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
