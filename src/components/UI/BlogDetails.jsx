// Blogdetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "../../api/data";
import { FaCalendarAlt, FaUserCircle, FaShareAlt } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="text-center py-20 text-red-600 font-bold text-xl">
        Blog not found
      </div>
    );
  }

  const formattedDate = new Date(blog.date || Date.now()).toLocaleDateString(
    "en-GB",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    }
  );

  return (
    <div className="w-full h-full relative font-sans">
      {/* Hero section */}
      <div className="w-full h-[300px] bg-gradient-to-br from-green-50 via-white to-green-100 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-3 text-center px-4">
          {blog.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <FaCalendarAlt /> {formattedDate}
          </span>
          <span className="flex items-center gap-1">
            <FaUserCircle /> {blog.author || "VTE Admin"}
          </span>
        </div>
      </div>

      {/* Main blog content */}
      <div className="max-w-4xl mx-auto px-4 py-10">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[400px] object-cover rounded-xl shadow mb-8"
        />
        <div className="text-gray-800 leading-8 text-lg mb-10 whitespace-pre-line">
          {blog.content}
        </div>

        {/* Author Box */}
        <div className="bg-green-50 p-6 rounded-lg border border-green-200 shadow mb-12">
          <div className="flex items-center gap-4">
            <FaUserCircle className="text-4xl text-green-600" />
            <div>
              <h4 className="text-xl font-bold text-green-700">
                {blog.author || "VTE Admin"}
              </h4>
              <p className="text-gray-600 text-sm mt-1">
                Passionate tech educator and blog writer at VTE. Focused on
                emerging technologies and community development.
              </p>
            </div>
          </div>
        </div>

        {/* Share Section */}
        <div className="flex items-center gap-6 text-green-700  font-semibold mb-16">
          <FaShareAlt className="text-lg" />
          <span>Share this article:</span>
          <div className="flex gap-4 text-xl text-green-700">
            {/* Facebook */}
            <Link
              to={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                window.location.href
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Share on Facebook"
              className="hover:text-blue-600"
            >
              <FaFacebookF />
            </Link>
            {/* Twitter/X */}
            <Link
              to={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                window.location.href
              )}&text=${encodeURIComponent(blog.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Share on Twitter"
              className="hover:text-blue-400"
            >
              <FaTwitter />
            </Link>
            {/* LinkedIn */}
            <Link
              to={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                window.location.href
              )}&title=${encodeURIComponent(blog.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Share on LinkedIn"
              className="hover:text-blue-700"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>

      {/* Related Blogs */}
      <div className="bg-green-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-green-800 mb-6 text-center">
            Related Blogs
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {blogs
              .filter((b) => b.id !== blog.id)
              .slice(0, 3)
              .map((related) => (
                <Link
                  key={related.id}
                  to={`/blog/${related.id}`}
                  className="bg-white border border-green-100 rounded-xl p-4 shadow hover:shadow-md transition flex flex-col"
                >
                  <img
                    src={related.image}
                    alt={related.title}
                    className="h-40 object-cover w-full rounded mb-4"
                  />
                  <h4 className="text-lg font-bold text-green-800 mb-1">
                    {related.title}
                  </h4>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {related.content.slice(0, 100)}...
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
