import React from "react";
import { Link } from "react-router-dom";
import NotFoundImage from "/images/notfound1.jpg";
import { LuCompass, LuArrowLeft } from "react-icons/lu";

const NotFound = () => {
  return (
    <div className="relative z-0">
      {/* Background Image */}
      <main
        className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 py-16 min-h-[70vh] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${NotFoundImage})` }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-900/60 to-purple-900/60 backdrop-blur-sm z-0" />

        {/* Main Content */}
        <div className="relative z-10 max-w-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="uppercase tracking-widest text-sm font-semibold text-blue-200">
              Page Not Found
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-lg">
            404 – This isn’t part of the journey
          </h1>
          <p className="text-lg mb-8 text-blue-100">
            We checked twice. Still no luck. Maybe try searching or head back to
            the homepage?
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:from-blue-700 hover:to-purple-700 transition"
          >
            <LuArrowLeft className="text-xl" />
            Back to Home
          </Link>
          <p className="mt-6 text-sm text-blue-200 flex items-center gap-2">
            <LuCompass className="text-lg" />
            Let’s find something better together.
          </p>
        </div>

        {/* Fun Message */}
        <div className="relative z-10 max-w-md text-blue-100 text-base space-y-4 bg-blue-900/40 rounded-xl p-6 shadow-lg backdrop-blur-sm">
          <p className="flex items-center gap-2">
            “A student once tried to find the Faculty building... ended up in
            the cafeteria twice. We feel you.”
          </p>
          <p className="flex items-center gap-2">
            The page you’re looking for might have been moved, renamed, or you
            may have taken the scenic route.
          </p>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
