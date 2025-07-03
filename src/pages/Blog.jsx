// Blog.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blogs,departmentCategory } from "../api/data";
import BlogCard from "../components/BlogCard";
import Pagination from "../components/Pagination";
import Filter from "../components/Filter";
import { FaNewspaper } from "react-icons/fa";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const postsPerPage = 6;

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((b) => b.tags.includes(selectedCategory));

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredBlogs.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="w-full h-full relative">
      {/* Hero Section */}
      <div className="w-full h-[250px] bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center">
        <h1 className="text-4xl font-extrabold text-green-800 flex items-center gap-2">
          <FaNewspaper className="text-green-600" /> Blog Page
        </h1>
      </div>

      {/* Filter & Featured Banner */}
      <div className="w-full bg-gradient-to-br from-green-50 via-white to-green-100 p-6">
        <div className="flex flex-col justify-between  gap-4">
          <Filter
            categories={departmentCategory}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>
        <div className="flex-1 w-full h-[200px] bg-gradient-to-r from-green-200 to-green-100 rounded-xl shadow flex items-center justify-center px-6 mt-4 md:mt-0">
          <h3 className="text-2xl font-bold text-green-900">
            Stay Updated with the Latest Posts
          </h3>
        </div>
      </div>

      {/* Blog Cards */}
      <section className="px-6 py-16 bg-gradient-to-br from-green-50 via-white to-green-100">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
          Latest Blogs
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
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
      </section>
    </div>
  );
};

export default Blog;
