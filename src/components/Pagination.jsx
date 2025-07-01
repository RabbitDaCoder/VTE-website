import React from "react";

const Pagination = ({
  currentPage,
  totalPosts,
  postsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex gap-2 justify-center mt-10">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-full border font-semibold transition duration-300
            ${
              page === currentPage
                ? `bg-green-600 text-white`
                : `border-green-600 text-green-600 hover:bg-green-100`
            }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
