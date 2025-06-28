import React from "react";
import { Link } from "react-router-dom";
import { LuMail, LuPhone, LuMapPin } from "react-icons/lu";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="px-0 py-0 bg-gradient-to-tr from-blue-50 via-white to-purple-50 border-t border-stone-200">
      {/* todo: Add events/Announcements
      add Newsletter/contact CTA     
     
     */}

      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Logo and contact */}
          <div className="flex flex-col gap-4 items-start">
            <Link
              to={"/"}
              className="text-3xl font-extrabold tracking-wide text-blue-700 drop-shadow-sm"
            >
              VESA
            </Link>
            <div className="text-base text-gray-600">
              We believe in the power of play to foster creativity,
              <br />
              problem-solving skills, and imagination.
            </div>
            <div className="flex flex-col gap-2 text-gray-700 text-sm">
              <div className="flex items-center gap-2">
                <LuMail className="text-xl text-blue-700" />
                <span>vesa@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <LuPhone className="text-xl text-blue-700" />
                <span>9045678223</span>
              </div>
              <div className="flex items-center gap-2">
                <LuMapPin className="text-xl text-blue-700" />
                <span>Nssuka, Enugu Nigeria.</span>
              </div>
            </div>
          </div>
          {/* Site map */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h6 className="text-base font-semibold mb-2 text-blue-700">
                Home
              </h6>
              <ul className="space-y-1">
                <li>
                  <Link
                    to={"/"}
                    className="text-gray-600 hover:text-blue-700 transition"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/about"}
                    className="text-gray-600 hover:text-blue-700 transition"
                  >
                    Our Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/contact"}
                    className="text-gray-600 hover:text-blue-700 transition"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-base font-semibold mb-2 text-blue-700">
                About Us
              </h6>
              <ul className="space-y-1">
                <li>
                  <Link
                    to={"/"}
                    className="text-gray-600 hover:text-blue-700 transition"
                  >
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/about"}
                    className="text-gray-600 hover:text-blue-700 transition"
                  >
                    Our Vision
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/contact"}
                    className="text-gray-600 hover:text-blue-700 transition"
                  >
                    Awards
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/contact"}
                    className="text-gray-600 hover:text-blue-700 transition"
                  >
                    History
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/contact"}
                    className="text-gray-600 hover:text-blue-700 transition"
                  >
                    Teachers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-base font-semibold mb-2 text-blue-700">
                Academics
              </h6>
              <ul className="space-y-1">
                <li>
                  <Link
                    to={"/"}
                    className="text-gray-600 hover:text-blue-700 transition"
                  >
                    Special Features
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="text-gray-600 hover:text-blue-700 transition"
                  >
                    Students Life
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/about"}
                    className="text-gray-600 hover:text-blue-700 transition"
                  >
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-base font-semibold mb-2 text-blue-700">
                Contact Us
              </h6>
              <ul className="space-y-1">
                <li>
                  <Link
                    to={"/"}
                    className="text-gray-600 hover:text-blue-700 transition"
                  >
                    Admission Information
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/about"}
                    className="text-gray-600 hover:text-blue-700 transition"
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
              to={"/privacy-policy"}
              className="px-3 hover:text-blue-700 transition"
            >
              Terms of Service
            </Link>
            <Link
              to={"/terms-of-service"}
              className="px-3 hover:text-blue-700 transition"
            >
              Privacy Policy
            </Link>
            <Link
              to={"/terms-of-service"}
              className="px-3 hover:text-blue-700 transition"
            >
              Cookie Policy
            </Link>
          </div>
          <div className="flex gap-3 mt-2 lg:mt-0">
            <Link
              to={"/"}
              className="p-2 bg-blue-50 rounded-full hover:bg-blue-100 transition"
            >
              <FaFacebookF className="text-xl text-blue-700" />
            </Link>
            <Link
              to={"/"}
              className="p-2 bg-blue-50 rounded-full hover:bg-blue-100 transition"
            >
              <FaXTwitter className="text-xl text-blue-700" />
            </Link>
            <Link
              to={"/"}
              className="p-2 bg-blue-50 rounded-full hover:bg-blue-100 transition"
            >
              <FaInstagram className="text-xl text-blue-700" />
            </Link>
            <Link
              to={"/"}
              className="p-2 bg-blue-50 rounded-full hover:bg-blue-100 transition"
            >
              <FaLinkedinIn className="text-xl text-blue-700" />
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
