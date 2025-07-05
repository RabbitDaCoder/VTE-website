// Blogdetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { blogs } from "../../api/data";
import {
  LuLink,
  LuClock,
  LuCalendar,
  LuUser,
  LuTag,
  LuShare2,
  LuBookmark,
  LuArrowLeft,
  LuArrowRight,
  LuChevronLeft,
  LuChevronRight,
} from "react-icons/lu";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaUserCircle,
} from "react-icons/fa";
import HelmetSEO from "../HelmetSEO";

const BlogDetails = () => {
  const { slug } = useParams(); // Change from id to slug
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [readingTime, setReadingTime] = useState(0);
  const [formattedDate, setFormattedDate] = useState("");
  const [prevBlog, setPrevBlog] = useState(null);
  const [nextBlog, setNextBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  // Fetch blog data
  useEffect(() => {
    setLoading(true);
    try {
      // Find the blog with the matching slug
      const foundBlog = blogs.find((b) => b.slug === slug);

      if (foundBlog) {
        setBlog(foundBlog);

        // Use readTime from blog data if available, otherwise calculate it
        if (foundBlog.readTime) {
          setReadingTime(foundBlog.readTime);
        } else {
          // Calculate reading time
          const words = foundBlog.content.split(/\s+/).length;
          setReadingTime(Math.max(1, Math.ceil(words / 200)) + " min");
        }

        // Format date
        setFormattedDate(
          new Date(foundBlog.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        );

        // Find previous and next blogs
        const currentIndex = blogs.findIndex((b) => b.slug === slug);
        if (currentIndex > 0) {
          setPrevBlog(blogs[currentIndex - 1]);
        }

        if (currentIndex < blogs.length - 1) {
          setNextBlog(blogs[currentIndex + 1]);
        }

        // Find related blogs
        const related = blogs
          .filter(
            (b) =>
              b.slug !== slug &&
              (b.tags?.some((tag) => foundBlog.tags?.includes(tag)) ||
                b.author === foundBlog.author)
          )
          .slice(0, 3);

        setRelatedBlogs(related);
        setError(false);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Error fetching blog:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [slug]);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Handle copy link
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-600"></div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100 px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">
            Blog Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
          >
            <LuChevronLeft className="mr-2" /> Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <HelmetSEO page="blogDetail" blog={blog} />
      <div className="w-full min-h-screen font-sans bg-gradient-to-br from-green-50 via-white to-green-100">
        {/* Back to blogs navigation */}
        <div className="max-w-7xl mx-auto px-4 pt-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-green-700 hover:text-green-800 font-medium"
          >
            <LuChevronLeft className="mr-1" /> Back to Blogs
          </Link>
        </div>

        {/* Hero section with gradient background */}
        <div className="w-full bg-gradient-to-r from-green-800 to-green-600 py-16 px-4 mt-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              {blog.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="bg-white/20 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90 text-sm">
              <span className="flex items-center gap-2">
                <LuCalendar className="text-white/70" /> {formattedDate}
              </span>
              <span className="flex items-center gap-2">
                <LuUser className="text-white/70" />{" "}
                {blog.author || "VTE Admin"}
              </span>
              <span className="flex items-center gap-2">
                <LuClock className="text-white/70" /> {readingTime}
              </span>
            </div>
          </div>
        </div>

        {/* Main blog content with floating sidebar */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left sidebar for desktop */}
            <div className="hidden lg:block lg:w-16 sticky top-24 h-fit self-start">
              <div className="flex flex-col items-center gap-6">
                <div className="flex flex-col items-center gap-3">
                  <span className="text-green-700 text-xs font-medium">
                    Share
                  </span>
                  <Link
                    to={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      window.location.href
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    to={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      window.location.href
                    )}&text=${encodeURIComponent(blog.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <FaTwitter />
                  </Link>
                  <Link
                    to={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                      window.location.href
                    )}&title=${encodeURIComponent(blog.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-blue-700 hover:bg-blue-700 hover:text-white transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <FaLinkedinIn />
                  </Link>
                  <button
                    onClick={handleCopyLink}
                    className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-green-700 hover:bg-green-700 hover:text-white transition-colors"
                    aria-label="Copy link"
                  >
                    <LuLink />
                  </button>
                </div>
                <button
                  className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-green-700 hover:bg-green-700 hover:text-white transition-colors"
                  aria-label="Bookmark"
                >
                  <LuBookmark />
                </button>
              </div>
            </div>

            {/* Main content */}
            <div className="lg:flex-1">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-10">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[300px] md:h-[500px] object-cover"
                />

                <div className="p-6 md:p-10">
                  {/* Mobile share buttons */}
                  <div className="flex lg:hidden items-center justify-between mb-6 pb-6 border-b border-green-100">
                    <div className="flex items-center gap-3">
                      <span className="text-green-700 text-sm">Share:</span>
                      <div className="flex gap-2">
                        <Link
                          to={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                            window.location.href
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-blue-600"
                          aria-label="Share on Facebook"
                        >
                          <FaFacebookF size={14} />
                        </Link>
                        <Link
                          to={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                            window.location.href
                          )}&text=${encodeURIComponent(blog.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-blue-400"
                          aria-label="Share on Twitter"
                        >
                          <FaTwitter size={14} />
                        </Link>
                        <Link
                          to={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                            window.location.href
                          )}&title=${encodeURIComponent(blog.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-blue-700"
                          aria-label="Share on LinkedIn"
                        >
                          <FaLinkedinIn size={14} />
                        </Link>
                      </div>
                    </div>
                    <button
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-green-700"
                      aria-label="Bookmark"
                    >
                      <LuBookmark size={16} />
                    </button>
                  </div>

                  <div className="prose prose-lg max-w-none prose-headings:text-green-800 prose-a:text-green-600 prose-strong:text-green-700">
                    {blog.content.split("\n\n").map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Tags */}
                  {blog.tags && blog.tags.length > 0 && (
                    <div className="mt-10 pt-6 border-t border-green-100">
                      <div className="flex flex-wrap items-center gap-2">
                        <LuTag className="text-green-600" />
                        <span className="text-green-700 font-medium">
                          Tags:
                        </span>
                        {blog.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Author Box */}
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-green-100 mb-12">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-600 overflow-hidden">
                    {blog.authorImg ? (
                      <img
                        src={blog.authorImg}
                        alt={blog.author}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <FaUserCircle className="w-full h-full" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-green-800 mb-2">
                      {blog.author || "VTE Admin"}
                    </h4>
                    <p className="text-gray-600">
                      {blog.authorBio ||
                        "Passionate tech educator and blog writer at VTE. Focused on emerging technologies and community development."}
                    </p>
                    <div className="flex gap-3 mt-4">
                      <a
                        href="#"
                        className="text-green-600 hover:text-green-800"
                        aria-label="Twitter"
                      >
                        <FaTwitter />
                      </a>
                      <a
                        href="#"
                        className="text-green-600 hover:text-green-800"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Post Navigation */}
              <div className="flex flex-col sm:flex-row justify-between gap-4 mb-12">
                {prevBlog ? (
                  <Link
                    to={`/blog/${prevBlog.slug}`}
                    className="flex-1 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition flex items-center gap-3 group"
                  >
                    <div className="p-2 bg-green-50 rounded-full text-green-700 group-hover:bg-green-700 group-hover:text-white transition-colors">
                      <LuArrowLeft />
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Previous</span>
                      <h4 className="font-medium text-green-800 line-clamp-1">
                        {prevBlog.title}
                      </h4>
                    </div>
                  </Link>
                ) : (
                  <div className="flex-1"></div>
                )}

                {nextBlog && (
                  <Link
                    to={`/blog/${nextBlog.slug}`}
                    className="flex-1 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition flex items-center justify-end text-right gap-3 group"
                  >
                    <div>
                      <span className="text-sm text-gray-500">Next</span>
                      <h4 className="font-medium text-green-800 line-clamp-1">
                        {nextBlog.title}
                      </h4>
                    </div>
                    <div className="p-2 bg-green-50 rounded-full text-green-700 group-hover:bg-green-700 group-hover:text-white transition-colors">
                      <LuArrowRight />
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Blogs */}
        <div className="bg-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl font-bold text-green-800 mb-2 text-center">
              Related Blogs
            </h3>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              Explore more articles on similar topics from our faculty experts
              and contributors
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              {relatedBlogs.map((related) => (
                <Link
                  key={related.id}
                  to={`/blog/${related.slug}`}
                  className="bg-white border border-green-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <LuCalendar size={12} />
                      <span>{new Date(related.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <LuClock size={12} />
                      <span>
                        {related.readTime ||
                          Math.max(
                            1,
                            Math.ceil(related.content.split(/\s+/).length / 200)
                          ) + " min"}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-green-800 mb-2 group-hover:text-green-600 transition-colors">
                      {related.title}
                    </h4>
                    <p className="text-gray-600 line-clamp-2 mb-3">
                      {related.content.slice(0, 100)}...
                    </p>
                    <span className="text-green-600 font-medium text-sm flex items-center gap-1">
                      Read more
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
