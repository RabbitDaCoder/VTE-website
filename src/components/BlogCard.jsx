import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-2xl shadow border border-green-100 flex flex-col overflow-hidden hover:shadow-lg transition">
      <img
        src={blog.image}
        alt={blog.title}
        className="h-44 w-full object-cover"
        loading="lazy"
      />
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-2 text-xs text-green-600 mb-2">
          <span>{new Date(blog.date).toLocaleDateString()}</span>
          <span>•</span>
          <span>{blog.author}</span>
        </div>
        <h3 className="text-xl font-bold text-green-800 mb-2">{blog.title}</h3>
        <div className="flex flex-wrap gap-1 mb-2">
          {blog.tags?.map((tag, i) => (
            <span
              key={i}
              className="bg-green-50 text-green-700 px-2 py-0.5 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-green-700 mb-4 line-clamp-3">{blog.content}</p>
        <Link
          to={`/blog/${blog.id}`}
          className="mt-auto text-green-700 font-semibold hover:underline text-left w-fit"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
