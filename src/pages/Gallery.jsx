import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { departments } from "../api/data";
import facultyLife from "../api/data/facultyLife";
import { LuImage, LuChevronDown, LuArrowRight } from "react-icons/lu";
import HelmetSEO from "../components/HelmetSEO";

const GalleryPage = () => {
  const [expandedDept, setExpandedDept] = useState(null);
  const galleryRef = useRef(null);
  const isInView = useInView(galleryRef, { once: true, threshold: 0.1 });

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const toggleDepartment = (id) => {
    if (expandedDept === id) {
      setExpandedDept(null);
    } else {
      setExpandedDept(id);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <HelmetSEO page="gallery" />

      {/* Hero Section */}
      <section className="relative bg-green-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-green-900 to-green-800"></div>
          <div className="grid grid-cols-6 gap-1 h-full">
            {departments.flatMap((dept) =>
              dept.gallery?.slice(0, 2).map((img, idx) => (
                <div key={`${dept.id}-${idx}`} className="overflow-hidden">
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))
            )}
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Faculty Gallery
            </h1>
            <p className="text-xl text-green-50">
              Explore visual highlights from our departments, events, and campus
              life
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Gallery Content */}
      <motion.section
        ref={galleryRef}
        className="container mx-auto px-4 py-16"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className="mb-12 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
            Visual Showcase
          </span>
          <h2 className="text-3xl font-bold text-green-900 mb-4">
            Departmental Galleries
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our collection of images showcasing the facilities,
            activities, and achievements of each department.
          </p>
        </div>

        {/* Department Galleries */}
        <div className="space-y-12">
          {departments.map((dept) => (
            <motion.div
              key={dept.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              variants={fadeIn}
            >
              <div
                className="flex items-center justify-between p-6 cursor-pointer"
                onClick={() => toggleDepartment(dept.id)}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-3 rounded-full">
                    <dept.icon className="text-green-700 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800">
                    {dept.name}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: expandedDept === dept.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <LuChevronDown className="text-green-700 text-xl" />
                </motion.div>
              </div>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: expandedDept === dept.id ? "auto" : 0,
                  opacity: expandedDept === dept.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0">
                  {dept.gallery && dept.gallery.length > 0 ? (
                    <>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                        {dept.gallery.slice(0, 4).map((image, index) => (
                          <div
                            key={index}
                            className="relative aspect-square rounded-lg overflow-hidden group"
                          >
                            <img
                              src={image}
                              alt={`${dept.name} Gallery Image ${index + 1}`}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="text-right">
                        <Link
                          to={`/gallery/${dept.id}`}
                          className="inline-flex items-center text-green-700 hover:text-green-800 font-medium group"
                        >
                          View All {dept.gallery.length} Photos
                          <LuArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </>
                  ) : (
                    <p className="text-gray-500 italic">
                      No gallery images available for this department.
                    </p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Faculty Life Section */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
              Campus Life
            </span>
            <h2 className="text-3xl font-bold text-green-900 mb-4">
              Faculty Life Highlights
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Glimpses of events, student activities, and memorable moments from
              across our faculty.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {facultyLife.map((item) => (
              <div
                key={item.id}
                className="relative aspect-square rounded-lg overflow-hidden group"
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="text-white bg-green-800/70 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    {item.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
