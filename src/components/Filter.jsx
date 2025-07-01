// components/Filter.jsx
import React from "react";

const Filter = ({ categories, selected, onSelect }) => {
  return (
    <div className="mb-6">
      <select
        value={selected}
        onChange={(e) => onSelect(e.target.value)}
        className="px-4 py-2 rounded-lg border border-green-600 text-green-700 font-semibold bg-white focus:outline-none focus:ring-2 focus:ring-green-200 transition"
      >
        <option value="All">All</option>
        {categories.map((cat, i) => (
          <option key={i} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
