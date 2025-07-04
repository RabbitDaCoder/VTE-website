import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LuMail, LuPhone, LuMapPin, LuSend } from "react-icons/lu";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
import logo from "/public/logo.png"; // Using absolute path to public directory
const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubscribeSuccess(true);
      setEmail("");

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubscribeSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <footer className="px-0 py-0 bg-gradient-to-tr from-green-50 via-white to-green-100 border-t border-stone-200">
      {/* /* Newsletter/Contact CTA */}
      <section className="py-12 px-4 bg-gradient-to-r from-green-400 to-green-600 text-white lg:rounded-2xl shadow-lg my-16 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-2">
            Subscribe to our Newsletter
          </h3>
          <p className="text-green-100 max-w-md">
            Get the latest updates, news, and events from VTE directly to your
            inbox.
          </p>
        </div>
        <form
          className="flex gap-2 w-full md:w-auto"
          onSubmit={handleSubscribe}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-full border border-white text-white w-full md:w-64 focus:outline-none bg-green-500 placeholder-white"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="px-6 py-2 rounded-full bg-white text-green-700 font-semibold shadow hover:bg-green-100 transition flex items-center gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Subscribing..."
            ) : subscribeSuccess ? (
              "Subscribed!"
            ) : (
              <>
                <LuSend className="text-sm" /> Subscribe
              </>
            )}
          </button>
        </form>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Logo and contact */}
          <div className="flex flex-col gap-4 items-start">
            <Link
              to={"/"}
              className="text-3xl font-extrabold tracking-wide text-green-700 drop-shadow-sm"
            >
              <img src={logo} alt="VTE Logo" className="h-10 w-auto" />
            </Link>
            <div className="text-base text-gray-600">
              We believe in the power of play to foster creativity,
              <br />
              problem-solving skills, and imagination.
            </div>
            <div className="flex flex-col gap-2 text-gray-700 text-sm">
              <div className="flex items-center gap-2">
                <LuMail className="text-xl text-green-700" />
                <a
                  href="mailto:vesa@gmail.com"
                  className="hover:text-green-700 transition"
                >
                  vesa@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <LuPhone className="text-xl text-green-700" />
                <a
                  href="tel:9045678223"
                  className="hover:text-green-700 transition"
                >
                  9045678223
                </a>
              </div>
              <div className="flex items-center gap-2">
                <LuMapPin className="text-xl text-green-700" />
                <span>Nssuka, Enugu Nigeria.</span>
              </div>
            </div>
          </div>
          {/* Site map */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h6 className="text-base font-semibold mb-2 text-green-700">
                Home
              </h6>
              <ul className="space-y-1">
                <li>
                  <Link
                    to={"/"}
                    className="text-gray-600 hover:text-green-700 transition"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/about"}
                    className="text-gray-600 hover:text-green-700 transition"
                  >
                    Our Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/contact"}
                    className="text-gray-600 hover:text-green-700 transition"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-base font-semibold mb-2 text-green-700">
                About Us
              </h6>
              <ul className="space-y-1">
                <li>
                  <Link
                    to={"/"}
                    className="text-gray-600 hover:text-green-700 transition"
                  >
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/about"}
                    className="text-gray-600 hover:text-green-700 transition"
                  >
                    Our Vision
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/contact"}
                    className="text-gray-600 hover:text-green-700 transition"
                  >
                    Awards
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/contact"}
                    className="text-gray-600 hover:text-green-700 transition"
                  >
                    History
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/contact"}
                    className="text-gray-600 hover:text-green-700 transition"
                  >
                    Teachers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-base font-semibold mb-2 text-green-700">
                Academics
              </h6>
              <ul className="space-y-1">
                <li>
                  <Link
                    to={"/"}
                    className="text-gray-600 hover:text-green-700 transition"
                  >
                    Special Features
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="text-gray-600 hover:text-green-700 transition"
                  >
                    Students Life
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/about"}
                    className="text-gray-600 hover:text-green-700 transition"
                  >
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-base font-semibold mb-2 text-green-700">
                Contact Us
              </h6>
              <ul className="space-y-1">
                <li>
                  <Link
                    to={"/"}
                    className="text-gray-600 hover:text-green-700 transition"
                  >
                    Admission Information
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/about"}
                    className="text-gray-600 hover:text-green-700 transition"
                  >
                    Map & Direction
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Terms and Socials */}
        <div className="flex flex-col lg:flex-row items-center justify-between border-t border-b border-stone-200 py-4 gap-4">
          <div className="flex items-center divide-x divide-stone-400 text-sm font-semibold">
            <Link
              to={"/terms-of-service"}
              className="px-3 hover:text-green-700 transition"
            >
              Terms of Service
            </Link>
            <Link
              to={"/privacy-policy"}
              className="px-3 hover:text-green-700 transition"
            >
              Privacy Policy
            </Link>
            <Link
              to={"/cookie-policy"}
              className="px-3 hover:text-green-700 transition"
            >
              Cookie Policy
            </Link>
          </div>
          <div className="flex gap-3 mt-2 lg:mt-0">
            <Link
              to={"/"}
              className="p-2 bg-green-50 rounded-full hover:bg-green-100 transition"
            >
              <FaFacebookF className="text-xl text-green-700" />
            </Link>
            <Link
              to={"/"}
              className="p-2 bg-green-50 rounded-full hover:bg-green-100 transition"
            >
              <FaXTwitter className="text-xl text-green-700" />
            </Link>
            <Link
              to={"/"}
              className="p-2 bg-green-50 rounded-full hover:bg-green-100 transition"
            >
              <FaInstagram className="text-xl text-green-700" />
            </Link>
            <Link
              to={"/"}
              className="p-2 bg-green-50 rounded-full hover:bg-green-100 transition"
            >
              <FaLinkedinIn className="text-xl text-green-700" />
            </Link>
          </div>
        </div>
        {/* Copyright */}
        <div className="text-center py-4">
          <p className="text-sm text-gray-500 font-medium">
            &copy; {new Date().getFullYear()} Cresea Tech Society. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
