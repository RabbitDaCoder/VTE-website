import React from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const Pagination = ({
  currentPage,
  totalPosts,
  postsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // Generate page numbers with ellipsis for large page counts
  const getPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 5) {
      // Show all pages if 5 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show first page
      pageNumbers.push(1);

      // Calculate start and end of current page group
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      // Add ellipsis if needed before current group
      if (startPage > 2) {
        pageNumbers.push("...");
      }

      // Add current page group
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      // Add ellipsis if needed after current group
      if (endPage < totalPages - 1) {
        pageNumbers.push("...");
      }

      // Always show last page
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex items-center justify-center mt-10 gap-1">
      {/* Previous button */}
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`flex items-center justify-center w-10 h-10 border ${
          currentPage === 1
            ? "border-gray-200 text-gray-400 cursor-not-allowed"
            : "border-green-600 text-green-600 hover:bg-green-50"
        }`}
        aria-label="Previous page"
      >
        <LuChevronLeft />
      </button>

      {/* Page numbers */}
      {pageNumbers.map((page, index) => (
        <React.Fragment key={index}>
          {page === "..." ? (
            <span className="w-10 h-10 flex items-center justify-center text-gray-500">
              ...
            </span>
          ) : (
            <button
              onClick={() => onPageChange(page)}
              className={`w-10 h-10 border font-medium transition-colors ${
                page === currentPage
                  ? "bg-green-600 text-white border-green-600"
                  : "border-green-200 text-green-600 hover:bg-green-50"
              }`}
            >
              {page}
            </button>
          )}
        </React.Fragment>
      ))}

      {/* Next button */}
      <button
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
        className={`flex items-center justify-center w-10 h-10 border ${
          currentPage === totalPages
            ? "border-gray-200 text-gray-400 cursor-not-allowed"
            : "border-green-600 text-green-600 hover:bg-green-50"
        }`}
        aria-label="Next page"
      >
        <LuChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
