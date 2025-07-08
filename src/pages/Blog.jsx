// Blog.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { blogs } from "../api/data";
import BlogCard from "../components/BlogCard";
import Pagination from "../components/Pagination";
import Filter from "../components/Filter";
import { LuNewspaper, LuSearch, LuX, LuArrowRight } from "react-icons/lu";
import HelmetSEO from "../components/HelmetSEO.jsx";

// Collect all unique tags for filtering
const allTags = [
  ...Array.from(
    new Set(blogs.flatMap((b) => (Array.isArray(b.tags) ? b.tags : [])))
  ),
];

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [featuredBlog, setFeaturedBlog] = useState(null);
  const postsPerPage = 6;

  // Set featured blog on component mount
  useEffect(() => {
    // Find the blog with the most content (likely most important)
    const featured = [...blogs].sort(
      (a, b) => b.content.length - a.content.length
    )[0];
    setFeaturedBlog(featured);
  }, []);

  // Filter blogs based on category and search term
  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      selectedCategory === "All" ||
      (Array.isArray(blog.tags) && blog.tags.includes(selectedCategory));

    const matchesSearch =
      searchTerm === "" ||
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (blog.author &&
        blog.author.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredBlogs.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  // Clear search
  const clearSearch = () => {
    setSearchTerm("");
  };

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page on category change
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      <HelmetSEO page="blog" />

      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-green-800 to-green-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight flex items-center justify-center gap-3">
            <LuNewspaper className="text-white/80" /> Faculty Blog
          </h1>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Explore insights, research, and perspectives from our faculty
            members and guest contributors
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search blogs by title, content, or author..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full px-5 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            {searchTerm ? (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
              >
                <LuX />
              </button>
            ) : (
              <LuSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70" />
            )}
          </div>
        </div>
      </div>

      {/* Featured Blog */}
      {featuredBlog && (
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-green-800 mb-6">
            Featured Article
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden lg:h-[400px] h-[650px]">
            <div className="md:flex">
              <div className="md:w-1/2 h-full">
                <img
                  src={featuredBlog.image}
                  alt={featuredBlog.title}
                  className="h-64 md:h-full w-full object-contain"
                />
              </div>
              <div className="p-6 md:w-1/2 flex flex-col justify-start">
                <div>
                  {featuredBlog.tags && featuredBlog.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {featuredBlog.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-green-800 mb-3">
                    {featuredBlog.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {featuredBlog.content.slice(0, 200)}...
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <LuSearch size={14} />
                      {new Date(featuredBlog.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <LuSearch size={14} />
                      {featuredBlog.author || "VTE Admin"}
                    </span>
                  </div>
                  <Link
                    to={`/blog/${featuredBlog.slug}`}
                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Read Full Article <LuArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filter & Blog Cards */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <h2 className="text-2xl font-bold text-green-800">All Articles</h2>
          <Filter
            categories={allTags}
            selected={selectedCategory}
            onSelect={handleCategoryChange}
          />
        </div>

        {filteredBlogs.length === 0 ? (
          <div className="bg-white rounded-xl p-8 text-center shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              No blogs found
            </h3>
            <p className="text-gray-600 mb-4">
              We couldn't find any blogs matching your search criteria.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {currentPosts.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPosts={filteredBlogs.length}
              postsPerPage={postsPerPage}
              onPageChange={paginate}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Blog;
