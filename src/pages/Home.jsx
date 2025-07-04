import React from "react";
import bgImg from "/images/home-bg.jpg";
import { Link } from "react-router-dom";
import { features, benefits, departments, blogs } from "../api/data.js";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { useRef, useEffect } from "react";
import Testimonials from "../components/UI/Testimony.jsx";
import Events from "../components/Events.jsx";
import HelmetSEO from "../components/HelmetSEO.jsx";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import {
  fadeInUp,
  staggerContainer,
  itemFadeIn,
  scaleIn,
} from "../utils/AnimationVariants.js";

const StatCounter = ({ to }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.3 });
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
  const benefitsRef = useRef(null);
  const benefitsInView = useInView(benefitsRef, { once: true, threshold: 0.1 });

  const departmentsRef = useRef(null);
  const departmentsInView = useInView(departmentsRef, {
    once: true,
    threshold: 0.1,
  });

  const blogsRef = useRef(null);
  const blogsInView = useInView(blogsRef, { once: true, threshold: 0.1 });

  return (
    <div className="w-full min-h-screen relative bg-gradient-to-br from-green-50 via-white to-green-100">
      <HelmetSEO page="home" />
      {/* Hero Section */}
      <motion.div
        className="w-full lg:h-[480px] h-[600px] bg-cover bg-center relative rounded-b-3xl shadow-lg overflow-hidden"
        style={{ backgroundImage: `url(${bgImg})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="flex items-start justify-center h-full bg-black/40 rounded-b-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="text-center mt-24 lg:mt-44 space-y-8">
            <motion.h1
              className="text-3xl md:text-6xl font-extrabold text-white drop-shadow-lg tracking-tight mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Vocational and Technical Education
            </motion.h1>
            <motion.div
              className="flex items-center flex-col md:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
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
            </motion.div>
          </div>
        </motion.div>
        {/* Feature Cards & Stats */}
        <motion.div
          className="bg-white grid grid-cols-2 lg:grid-cols-5 gap-4 px-4 py-4 absolute bottom-2 left-1/2 w-11/12 max-w-5xl rounded-3xl shadow-xl border border-green-100 "
          initial={{ opacity: 0, x: "-50%", y: 100 }}
          animate={{ opacity: 1, x: "-50%", y: 0 }}
          transition={{
            delay: 1.5,
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
        >
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                className="flex flex-col items-center gap-2 group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <motion.span
                  className={`transition-transform group-hover:scale-110 ${
                    f.iconClass?.replace(/blue|purple/, "green") ||
                    "text-3xl text-green-700"
                  }`}
                  whileHover={{ rotate: 10 }}
                >
                  <Icon />
                </motion.span>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-green-700 transition">
                  {f.label}
                </span>
                {f.stat && (
                  <>
                    <StatCounter to={f.stat} />
                  </>
                )}
              </motion.div>
            );
          })}
          {/* Empty for grid symmetry if needed */}
          {features.length < 5 && <div />}
        </motion.div>
      </motion.div>
      {/* Spacer */}
      <div className="w-full h-[100px] bg-transparent" />
      {/* Benefits Section */}
      <motion.section
        ref={benefitsRef}
        className="bg-green-50 py-16 px-4 text-center"
        initial="hidden"
        animate={benefitsInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <motion.div className="flex flex-col items-center" variants={fadeInUp}>
          <motion.div
            className="capitalize border rounded-sm border-green-400 w-[210px] text-sm font-medium text-green-600 mb-2"
            initial={{ width: 0 }}
            animate={benefitsInView ? { width: 210 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            posterity Deserve Bright Future
          </motion.div>
          <motion.h2
            className="text-4xl font-extrabold mb-4 text-green-800"
            variants={fadeInUp}
          >
            Our Benefits
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-green-700 mb-12"
            variants={fadeInUp}
          >
            With a dedicated team of experienced educators, state-of-the-art
            facilities, and a comprehensive curriculum, we aim to lay a strong
            foundation for your child's future.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 md:grid-cols-2 justify-center sm:grid-cols-2 gap-10 max-w-6xl mx-auto"
          variants={staggerContainer}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                className="bg-white border border-green-400 shadow-[4px_4px_0px_rgba(34,197,94,1)] rounded-lg text-left p-6 relative w-[350px] h-[180px] hover:shadow-[6px_6px_0px_rgba(34,197,94,1)] transition-all duration-300"
                variants={itemFadeIn}
                whileHover={{
                  y: -10,
                  boxShadow: "6px 6px 0px rgba(34,197,94,1)",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="bg-green-100 w-10 h-10 flex items-center justify-center rounded-md absolute -top-5 left-5 shadow-md"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <Icon className="text-green-600" />
                </motion.div>
                <h3 className="text-lg font-bold mt-6 text-green-800">
                  {benefit.title}
                </h3>
                <p className="text-green-700 mt-2 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>
      {/* Departments Section */}
      <motion.section
        ref={departmentsRef}
        className="py-16 px-4 bg-gradient-to-br from-green-50 via-white to-green-100"
        initial="hidden"
        animate={departmentsInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <motion.div className="text-center mb-10" variants={fadeInUp}>
          <motion.h2
            className="text-4xl font-extrabold mb-2 text-green-800"
            variants={fadeInUp}
          >
            Our Departments
          </motion.h2>
          <motion.p
            className="text-green-700 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Discover our diverse academic departments, each offering unique
            opportunities and world-class education.
          </motion.p>
        </motion.div>
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w-7xl mx-auto"
          variants={staggerContainer}
        >
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <motion.div
                key={dept.id}
                className="bg-white rounded-2xl shadow-xl border border-green-100 overflow-hidden flex flex-col transform transition-transform duration-300 hover:shadow-2xl"
                variants={itemFadeIn}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <motion.img
                    src={dept.image}
                    alt={dept.name}
                    className="object-cover w-full h-full"
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    className="absolute top-3 left-3 bg-white/80 rounded-full p-2 shadow"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <Icon className="text-2xl text-green-700" />
                  </motion.div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-green-700 mb-1">
                    {dept.name}
                  </h3>
                  <p className="text-green-700 mb-3">{dept.summary}</p>
                  <ul className="mb-4 flex flex-wrap gap-2">
                    {dept.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full font-medium"
                        whileHover={{ scale: 1.05, backgroundColor: "#dcfce7" }}
                      >
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  <Link
                    to={`/departments/${dept.id}`}
                    className="mt-auto text-green-700 font-semibold hover:underline text-left w-fit group flex items-center gap-1"
                  >
                    See More
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <LuArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>
      {/* Blog Section */}
      <motion.section
        ref={blogsRef}
        className="py-16 px-4 bg-white"
        initial="hidden"
        animate={blogsInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <motion.div className="text-center mb-10" variants={fadeInUp}>
          <motion.h2
            className="text-4xl font-extrabold mb-2 text-green-800"
            variants={fadeInUp}
          >
            Latest Blogs
          </motion.h2>
          <motion.p
            className="text-green-700 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Explore our latest articles and insights from our community.
          </motion.p>
        </motion.div>
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
          variants={staggerContainer}
        >
          {blogs.slice(0, 3).map((blog, index) => (
            <motion.div
              key={blog.id}
              className="bg-green-50 rounded-2xl shadow border border-green-100 flex flex-col overflow-hidden transform transition-transform duration-300 hover:shadow-lg"
              variants={itemFadeIn}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div className="overflow-hidden">
                <motion.img
                  src={blog.image}
                  alt={blog.title}
                  className="h-40 w-full object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-green-700 mb-1">
                  {blog.title}
                </h3>
                <p className="text-green-700 mb-4 line-clamp-3">
                  {blog.content.split("\n")[0]}
                </p>
                <Link
                  to={`/blog/${blog.id}`}
                  className="mt-auto text-green-700 font-semibold hover:underline text-left w-fit group flex items-center gap-1"
                >
                  Read More
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <LuArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="flex justify-center mt-10" variants={scaleIn}>
          <Link
            to="/blog"
            className="text-green-700 font-semibold hover:underline text-base flex items-center gap-1 group bg-green-50 px-6 py-2 rounded-full shadow-sm hover:bg-green-100 transition-colors"
          >
            See More Blogs
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <LuArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.span>
          </Link>
        </motion.div>
      </motion.section>
      {/* Testimonial Section */}
      <Testimonials />
      {/* Events Section */}
      <Events />
    </div>
  );
};

export default Home;
