import React from "react";
import { Link } from "react-router-dom";
import { LuCalendar, LuUser, LuClock, LuArrowRight } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";

const BlogCard = ({ blog }) => {
  // Use readTime from blog data if available, otherwise calculate it
  const readingTime =
    blog.readTime ||
    Math.max(1, Math.ceil(blog.content.split(/\s+/).length / 200));

  // Format date
  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 flex flex-col h-full overflow-hidden border border-green-50">
      <div className="relative overflow-hidden h-48">
        <img
          src={blog.image}
          alt={blog.title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        {blog.tags && blog.tags[0] && (
          <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
            {blog.tags[0]}
          </span>
        )}
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <LuCalendar size={12} /> {formattedDate}
          </span>
          <span className="flex items-center gap-1">
            <LuUser size={12} /> {blog.author || "VTE Admin"}
          </span>
          <span className="flex items-center gap-1">
            <LuClock size={12} />{" "}
            {typeof readingTime === "string"
              ? readingTime
              : `${readingTime} min`}
          </span>
        </div>

        <h3 className="text-xl font-bold text-green-800 mb-2 line-clamp-2">
          {blog.title}
        </h3>

        {blog.tags && blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {blog.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-green-50 text-green-700 px-2 py-0.5 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <p className="text-gray-600 mb-4 line-clamp-3">{blog.content}</p>

        <Link
          to={`/blog/${blog.slug}`}
          className="mt-auto inline-flex items-center text-green-700 font-semibold hover:text-green-600 transition-colors group"
        >
          Read Article
          <LuArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
