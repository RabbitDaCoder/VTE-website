import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { departments } from "../../api/data";
import {
  LuArrowLeft,
  LuDownload,
  LuShare2,
  LuX,
  LuChevronLeft,
  LuChevronRight,
} from "react-icons/lu";
import HelmetSEO from "../HelmetSEO";

const GalleryDetail = () => {
  const { id } = useParams();
  const [department, setDepartment] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    const dept = departments.find((d) => d.id === parseInt(id));
    if (dept) {
      setDepartment(dept);
    }
  }, [id]);

  // Move navigateImage function before any conditional returns
  const navigateImage = (direction) => {
    if (!department?.gallery) return;

    const newIndex = selectedImage + direction;
    if (newIndex >= 0 && newIndex < department.gallery.length) {
      setSelectedImage(newIndex);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;

      switch (e.key) {
        case "ArrowLeft":
          navigateImage(-1);
          break;
        case "ArrowRight":
          navigateImage(1);
          break;
        case "Escape":
          closeLightbox();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, selectedImage, department]);

  const openLightbox = (index) => {
    setSelectedImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  if (!department) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            Department Not Found
          </h2>
          <Link to="/gallery" className="text-green-600 hover:text-green-800">
            Return to Gallery
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <HelmetSEO page="galleryDetail" department={department} />

      {/* Hero Section */}
      <section className="relative bg-green-900 text-white py-16">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          {department.gallery && department.gallery.length > 0 && (
            <img
              src={department.gallery[0]}
              alt={department.name}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-green-900 to-green-800 opacity-80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/gallery"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <LuArrowLeft className="mr-2" />
            Back to Gallery
          </Link>
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                <department.icon className="text-white text-2xl" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">
                {department.name}
              </h1>
            </div>
            <p className="text-xl text-green-50">Photo Gallery</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-2">
            Department Photos
          </h2>
          <p className="text-gray-600">
            Explore visual highlights from {department.name} including
            facilities, events, and activities.
          </p>
        </div>

        {department.gallery && department.gallery.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {department.gallery.map((image, index) => (
              <motion.div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
                onClick={() => openLightbox(index)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={image}
                  alt={`${department.name} Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="text-white bg-green-800/70 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    View Full Size
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg p-8 text-center">
            <p className="text-gray-500">
              No gallery images available for this department.
            </p>
          </div>
        )}
      </section>

      {/* Department Info */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 relative">
                <img
                  src={department.image}
                  alt={department.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/80 rounded-full p-3 shadow">
                  <department.icon className="text-2xl text-green-700" />
                </div>
              </div>
              <div className="p-6 md:w-2/3">
                <h2 className="text-2xl font-bold text-green-800 mb-2">
                  {department.name}
                </h2>
                <p className="text-gray-600 mb-4">{department.description}</p>

                <h3 className="font-semibold text-green-700 mb-2">
                  Key Features
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {department.features.map((feature, i) => (
                    <span
                      key={i}
                      className="bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/departments/${department.id}`}
                  className="inline-flex items-center text-green-700 hover:text-green-800 font-medium group"
                >
                  View Department Details
                  <LuArrowLeft className="ml-2 rotate-180 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && selectedImage !== null && department.gallery && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex flex-col">
            {/* Lightbox Header */}
            <div className="p-4 flex justify-between items-center text-white">
              <h3 className="text-lg font-medium">
                {department.name} - Image {selectedImage + 1} of{" "}
                {department.gallery.length}
              </h3>
              <button
                onClick={closeLightbox}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <LuX size={24} />
              </button>
            </div>

            {/* Image Container */}
            <div className="flex-1 flex items-center justify-center p-4 relative">
              <img
                src={department.gallery[selectedImage]}
                alt={`${department.name} Gallery Image ${selectedImage + 1}`}
                className="max-h-full max-w-full object-contain"
              />

              {/* Navigation Buttons */}
              {selectedImage > 0 && (
                <button
                  onClick={() => navigateImage(-1)}
                  className="absolute left-4 p-3 bg-black/30 hover:bg-black/50 rounded-full text-white transition-colors"
                >
                  <LuChevronLeft size={24} />
                </button>
              )}

              {selectedImage < department.gallery.length - 1 && (
                <button
                  onClick={() => navigateImage(1)}
                  className="absolute right-4 p-3 bg-black/30 hover:bg-black/50 rounded-full text-white transition-colors"
                >
                  <LuChevronRight size={24} />
                </button>
              )}
            </div>

            {/* Lightbox Footer */}
            <div className="p-4 flex justify-center gap-4 text-white">
              <a
                href={department.gallery[selectedImage]}
                download
                className="flex items-center gap-2 px-4 py-2 bg-green-700 hover:bg-green-800 rounded-lg transition-colors"
              >
                <LuDownload />
                Download
              </a>
              <button
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-800 rounded-lg transition-colors"
                onClick={() => {
                  navigator.clipboard.writeText(
                    department.gallery[selectedImage]
                  );
                  alert("Image URL copied to clipboard!");
                }}
              >
                <LuShare2 />
                Share
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryDetail;
