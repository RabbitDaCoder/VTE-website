import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LuMoveRight, LuAlignLeft, LuX, LuCookie } from "react-icons/lu";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactModal from "./UI/ContactModal";
import logo from "/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const handleCloseMenu = () => setIsMenuOpen(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Check if user has already accepted cookies
  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");
    if (!hasAcceptedCookies) {
      // Show cookie consent after a short delay
      const timer = setTimeout(() => {
        setShowCookieConsent(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowCookieConsent(false);
  };

  const declineCookies = () => {
    // Still close the banner but don't set the localStorage item
    setShowCookieConsent(false);
  };

  return (
    <header className="w-full sticky top-0 z-30 transition-shadow">
      <div>
        <section className="h-8 border border-stone-300 bg-gradient-to-r from-green-50 to-green-100 font-medium text-green-900 marquee-container">
          <div className="marquee-content marquee-content-1">
            <span className="mx-4 flex items-center gap-2">
              Admission is on now, grab your seat now <LuMoveRight />
            </span>
            <span className="mx-4 flex items-center gap-2">
              New courses available for 2024/2025 session <LuMoveRight />
            </span>
            <span className="mx-4 flex items-center gap-2">
              Visit our campus for a tour <LuMoveRight />
            </span>
            <span className="mx-4 flex items-center gap-2">
              Scholarships available for qualified students <LuMoveRight />
            </span>
          </div>
          <div className="marquee-content marquee-content-2">
            <span className="mx-4 flex items-center gap-2">
              Admission is on now, grab your seat now <LuMoveRight />
            </span>
            <span className="mx-4 flex items-center gap-2">
              New courses available for 2024/2025 session <LuMoveRight />
            </span>
            <span className="mx-4 flex items-center gap-2">
              Visit our campus for a tour <LuMoveRight />
            </span>
            <span className="mx-4 flex items-center gap-2">
              Scholarships available for qualified students <LuMoveRight />
            </span>
          </div>
        </section>
        <div className="w-full h-20  bg-white border border-stone-300 px-5 py-1.5 flex items-center justify-between backdrop-blur-md">
          <Link
            to={"/"}
            className="text-2xl font-extrabold tracking-wide text-green-700 drop-shadow-sm"
          >
            <div>
              {" "}
              <img
                src={logo}
                alt="VTE Logo"
                className="h-14 w-auto"
                loading="lazy"
              />
            </div>
          </Link>
          <nav className="mt-2">
            <ul className="lg:flex hidden space-x-4 text-gray-700 items-center font-semibold">
              <Link to={"/"}>Home</Link>
              <Link to={"/departments"}>Faculty Members</Link>
              <Link to={"/blog"}>Blog</Link>
              <Link to={"/notice"}>Notice</Link>
              <Link to={"/events"}>Events</Link>
              <Link to={"/gallery"}>Gallery</Link>
              <Link to={"/about"}>About</Link>
              <Link to={"/contact"}>Contact</Link>
            </ul>
          </nav>
          <div className="lg:flex hidden">
            <button
              className="border border-green-300 px-4 py-1 rounded-lg font-semibold bg-green-50 hover:bg-green-100 transition"
              onClick={handleOpenModal}
            >
              Get in touch
            </button>
          </div>
          <div className="text-4xl lg:hidden block cursor-pointer text-green-700">
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
          <span className="text-xl font-bold text-green-700">Menu</span>
          <button
            className="text-3xl text-green-700 hover:text-green-900 transition"
            onClick={handleCloseMenu}
            aria-label="Close menu"
          >
            <LuX />
          </button>
        </div>
        <nav className="mt-6 px-4">
          <ul className="space-y-4 font-semibold text-green-800">
            <li>
              <Link to={"/"} onClick={handleCloseMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/departments"} onClick={handleCloseMenu}>
                Faculty Members
              </Link>
            </li>

            <li>
              <Link to={"/blog"} onClick={handleCloseMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link to={"/notice"} onClick={handleCloseMenu}>
                Notice
              </Link>
            </li>

            <li>
              <Link to={"/events"} onClick={handleCloseMenu}>
                Events
              </Link>
            </li>
            <li>
              <Link to={"/gallery"} onClick={handleCloseMenu}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to={"/about"} onClick={handleCloseMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to={"/contact"} onClick={handleCloseMenu}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="mt-8">
            <button
              className="w-full border border-green-300 px-4 py-2 rounded-lg font-semibold bg-green-50 hover:bg-green-100 transition"
              onClick={() => {
                handleCloseMenu();
                handleOpenModal();
              }}
            >
              Get in touch
            </button>
          </div>
        </nav>
      </div>

      {/* Cookie Consent Modal */}
      {showCookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-green-200 p-4 z-50 slide-up">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="text-3xl text-green-600">
                <LuCookie />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">We use cookies</h3>
                <p className="text-sm text-gray-600 max-w-xl">
                  This website uses cookies to enhance your browsing experience
                  and provide personalized services. By continuing to use our
                  website, you agree to our use of cookies.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={declineCookies}
                className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-100 transition"
              >
                Decline
              </button>
              <button
                onClick={acceptCookies}
                className="px-4 py-2 text-sm bg-green-600 text-white rounded-md hover:bg-green-700 transition"
              >
                Accept All Cookies
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </header>
  );
};

export default Header;
