import React from "react";
import bgImg from "/images/home-bg.jpg";
import { Link } from "react-router-dom";
import { features, benefits, departments, blogs } from "../api/data.js";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import Testimonials from "../components/UI/Testimony.jsx";
import Events from "../components/Events.jsx";

const StatCounter = ({ to }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    if (inView) {
      controls.start({ count: to });
    }
  }, [controls, inView, to]);

  useEffect(() => {
    controls.set({ count: 0 });
    controls.start({
      count: to,
      transition: { duration: 1.5, ease: "easeOut" },
    });
    controls.stop();
  }, [to, controls]);

  return (
    <motion.span
      ref={ref}
      initial={{ count: 0 }}
      animate={controls}
      transition={{ duration: 1.5 }}
      onUpdate={(latest) => setValue(Math.floor(latest.count))}
      className="text-2xl font-bold text-green-700"
    >
      {value.toLocaleString()}
    </motion.span>
  );
};

const Home = () => {
  return (
    <div className="w-full min-h-screen relative bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* Hero Section */}
      <div
        className="w-full lg:h-[480px] h-[600px] bg-cover bg-center relative rounded-b-3xl shadow-lg"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="flex items-start justify-center h-full bg-black/40 rounded-b-3xl">
          <div className="text-center mt-24 lg:mt-44 space-y-8">
            <h1 className="text-3xl md:text-6xl font-extrabold text-white drop-shadow-lg tracking-tight mb-4">
              Vocational and Technical Education
            </h1>
            <div className="flex items-center flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold shadow-lg hover:scale-105 hover:from-green-600 hover:to-green-800 transition"
              >
                Contact Us
              </Link>
              <Link
                to="/notice"
                className="inline-block px-8 py-3 rounded-full bg-white/90 text-green-700 font-semibold shadow-lg border border-green-200 hover:bg-green-50 hover:text-green-900 transition"
              >
                View Notice
              </Link>
            </div>
          </div>
        </div>
        {/* Feature Cards & Stats */}
        <div className="bg-white grid grid-cols-2 lg:grid-cols-6 gap-4 px-4 py-4 absolute -bottom-14 left-1/2 -translate-x-1/2 w-11/12 max-w-5xl z-10 rounded-3xl shadow-xl border border-green-100">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="flex flex-col items-center gap-2 group">
                <span
                  className={`transition-transform group-hover:scale-110 ${
                    f.iconClass?.replace(/blue|purple/, "green") ||
                    "text-3xl text-green-700"
                  }`}
                >
                  <Icon />
                </span>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-green-700 transition">
                  {f.label}
                </span>
                {f.stat && (
                  <>
                    <StatCounter to={f.stat} />
                  </>
                )}
              </div>
            );
          })}
          {/* Empty for grid symmetry if needed */}
          {features.length < 5 && <div />}
        </div>
      </div>
      {/* Spacer */}
      <div className="w-full h-[100px] bg-transparent" />
      {/* Benefits Section */}
      <section className="bg-green-50 py-16 px-4 text-center">
        <div className="flex flex-col items-center">
          <div className="capitalize border rounded-sm border-green-400 w-[210px] text-sm font-medium text-green-600 mb-2">
            posterity Deserve Bright Future
          </div>
          <h2 className="text-4xl font-extrabold mb-4 text-green-800">
            Our Benefits
          </h2>
          <p className="max-w-2xl mx-auto text-green-700 mb-12">
            With a dedicated team of experienced educators, state-of-the-art
            facilities, and a comprehensive curriculum, we aim to lay a strong
            foundation for your child’s future.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-center sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white border border-green-400 shadow-[4px_4px_0px_rgba(34,197,94,1)] rounded-lg text-left p-6 relative w-[350px] h-[180px]"
              >
                <div className="bg-green-100 w-10 h-10 flex items-center justify-center rounded-md absolute -top-5 left-5 shadow-md">
                  <Icon className="text-green-600" />
                </div>
                <h3 className="text-lg font-bold mt-6 text-green-800">
                  {benefit.title}
                </h3>
                <p className="text-green-700 mt-2 text-sm">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      {/* Departments Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 via-white to-green-100">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-2 text-green-800">
            Our Departments
          </h2>
          <p className="text-green-700 max-w-2xl mx-auto">
            Discover our diverse academic departments, each offering unique
            opportunities and world-class education.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w-7xl mx-auto">
          {departments.map((dept) => {
            const Icon = dept.icon;
            return (
              <div
                key={dept.id}
                className="bg-white rounded-2xl shadow-xl border border-green-100 overflow-hidden flex flex-col"
              >
                <div className="relative h-40 w-full">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/80 rounded-full p-2 shadow">
                    <Icon className="text-2xl text-green-700" />
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-green-700 mb-1">
                    {dept.name}
                  </h3>
                  <p className="text-green-700 mb-3">{dept.description}</p>
                  <ul className="mb-4 flex flex-wrap gap-2">
                    {dept.features.map((feature, i) => (
                      <li
                        key={i}
                        className="bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full font-medium"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/departments/${dept.id}`}
                    className="mt-auto text-green-700 font-semibold hover:underline text-left w-fit"
                  >
                    See More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* Blog Section */}
      <section className="py-16 px-4 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-2 text-green-800">
            Latest Blogs
          </h2>
          <p className="text-green-700 max-w-2xl mx-auto">
            Explore our latest articles and insights from our community.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {blogs.slice(0, 3).map((blog) => (
            <div
              key={blog.id}
              className="bg-green-50 rounded-2xl shadow border border-green-100 flex flex-col overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-40 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-green-700 mb-1">
                  {blog.title}
                </h3>
                <p className="text-green-700 mb-4 line-clamp-3">
                  {blog.content}
                </p>
                <Link
                  to={`/blog/${blog.slug}`}
                  className="mt-auto text-green-700 font-semibold hover:underline text-left w-fit"
                >
                  See More
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link
            to="/blog"
            className="text-green-700 font-semibold hover:underline text-base"
          >
            See More Blogs
          </Link>
        </div>
      </section>
      {/* Testimonial Section */}
      <Testimonials />
      {/* Events Section */}
      <Events />
    </div>
  );
};

export default Home;
