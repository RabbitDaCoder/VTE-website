import React from "react";

const Callout = () => (
  <div className="relative h-80 md:h-[420px] mt-20 flex items-center justify-center overflow-hidden shadow-2xl border border-green-200">
    <img
      src="/images/VTE-2025.webp"
      alt="VTE Conference Background"
      className="absolute inset-0 w-full h-full object-cover object-center scale-105 blur-[2px] brightness-75"
      style={{ filter: "contrast(1.1) saturate(1.2)" }}
    />
    <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-800/60 to-green-700/60 opacity-90" />
    <div className="absolute inset-0 bg-black/30" />

    <div className="relative z-10 text-center px-6">
      <h2 className="text-3xl md:text-5xl font-extrabold text-amber-300 drop-shadow-2xl mb-4 tracking-tight">
        🎓 VTE Faculty Conference 2025
      </h2>
      <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto font-medium text-green-100 drop-shadow-lg">
        Join thought leaders, innovators, and students in{" "}
        <span className="text-amber-200 font-bold">
          reshaping vocational and technical education
        </span>
        .
        <br />
        <span className="block mt-2 text-green-200 text-base md:text-lg">
          Don’t miss out on inspiring talks, networking, and hands-on workshops!
        </span>
      </p>
      <button className="bg-amber-400 hover:bg-amber-500 text-green-900 px-8 py-3 rounded-full font-bold shadow-lg text-lg transition-transform duration-300 hover:scale-105">
        Register Now
      </button>
    </div>
  </div>
);

export default Callout;
