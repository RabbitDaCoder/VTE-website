// components/Filter.jsx
import React from "react";
import { LuFilter } from "react-icons/lu";

const Filter = ({ categories, selected, onSelect }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
      <label className="flex items-center text-green-800 font-medium">
        <LuFilter className="mr-2" /> Filter by:
      </label>
      <div className="relative">
        <select
          value={selected}
          onChange={(e) => onSelect(e.target.value)}
          className="appearance-none pl-4 pr-10 py-2 rounded-lg border border-green-200 text-green-700 font-medium bg-white focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-300 transition-all w-full sm:w-auto"
        >
          <option value="All">All Categories</option>
          {categories
            .filter((cat) => cat !== "All")
            .map((cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-green-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Filter;
