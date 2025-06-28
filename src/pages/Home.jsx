import React from "react";
import bgImg from "/images/home-bg.jpg";
import {
  LuUniversity,
  LuBookOpen,
  LuUsers,
  LuTrophy,
  LuCalendar,
} from "react-icons/lu";
import { Link } from "react-router-dom";
import { features } from "../api/data.js"; // Assuming features data is exported from this file
const Home = () => {
  return (
    <div className="w-full min-h-screen relative bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div
        className="w-full h-[480px] bg-cover bg-center relative rounded-b-3xl shadow-lg"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="flex items-center justify-center h-full bg-black/50 rounded-b-3xl">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg tracking-tight mb-2">
              VESA
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-medium mb-6">
              Your Trusted Partner in Education
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 hover:from-blue-700 hover:to-purple-700 transition"
              >
                Contact Us
              </Link>
              <Link
                to="/notice"
                className="px-8 py-3 rounded-full bg-white/90 text-blue-700 font-semibold shadow-lg border border-blue-200 hover:bg-blue-50 hover:text-blue-900 transition"
              >
                View Notice
              </Link>
            </div>
          </div>
        </div>
        {/* Feature Cards */}
        <div className="bg-white grid grid-cols-2 lg:grid-cols-5 gap-4 px-4 py-4 absolute -bottom-14 left-1/2 -translate-x-1/2 w-11/12 max-w-5xl z-10 rounded-3xl shadow-xl border border-blue-100">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="flex flex-col items-center gap-2 group">
                <span
                  className={`transition-transform group-hover:scale-110 ${f.iconClass}`}
                >
                  <Icon />
                </span>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-700 transition">
                  {f.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      {/* Spacer */}
      <div className="w-full h-[100px] bg-transparent" />
    </div>
  );
};

export default Home;
