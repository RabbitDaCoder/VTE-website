import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  itemFadeIn,
  scaleIn,
  slideInLeft,
  slideInRight,
  bounceIn,
} from "../utils/AnimationVariants.js";
import HelmetSEO from "../components/HelmetSEO.jsx";
import VteLogoBackground from "/images/hero/hero-bg.jpg";
import DeansSection from "../components/DeansSection.jsx";
import {
  FaHistory,
  FaGraduationCap,
  FaUniversity,
  FaUsers,
  FaChalkboardTeacher,
  FaLightbulb,
} from "react-icons/fa";

// Main About Component
const About = () => {
  return (
    <div className="bg-gray-50">
      <HelmetSEO page="about" />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Mission and Vision Section */}
      <MissionVision />

      {/* 3. Our History / Timeline Section */}
      <HistorySection />

      {/* 4. Leadership Message Section */}
      <DeansSection />

      {/* 5. Faculty Values / Philosophy Section */}
      <FacultyValues />

      {/* 6. Organization Structure Section */}
      <OrganizationStructure />

      {/* 7. Why Choose Us? Section */}
      <WhyChooseUs />

      {/* 8. Explore Our Departments Section */}
      <ExploreDepartments />

      {/* 9. Department Photos Carousel */}
      <PhotoCarousel />
    </div>
  );
};

// 1. Hero Section Component
const HeroSection = () => {
  return (
    <motion.section
      className="bg-cover bg-center h-[70vh] text-white relative overflow-hidden"
      style={{ backgroundImage: `url(${VteLogoBackground})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="absolute inset-0 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      />

      <div className="container mx-auto px-6 h-full flex items-center justify-center relative z-10">
        <motion.div
          className="text-center max-w-4xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-amber-500"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            About Our Faculty
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-4xl font-semibold mb-4 text-teal-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            Vocational and Technical Education
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            Building Skills for Tomorrow's Nigeria through excellence in
            teaching, research, and innovation.
          </motion.p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-50 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.5 }}
      />
    </motion.section>
  );
};

// 2. Mission and Vision Section Component
const FlipCard = ({
  frontTitle,
  frontIcon,
  backText,
  backText1,
  backText2,
}) => {
  const Icon = frontIcon;

  return (
    <motion.div
      className="bg-transparent w-full h-72 [perspective:1000px] group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front of the card */}
        <div className="absolute w-full h-full [backface-visibility:hidden]">
          <div className="bg-gradient-to-br from-green-800 to-green-900 rounded-2xl shadow-lg p-8 h-full flex flex-col justify-center items-center">
            <Icon className="text-5xl text-amber-400 mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">{frontTitle}</h3>
            <p className="text-sm text-gray-200">Click to flip</p>
          </div>
        </div>

        {/* Back of the card */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-lg shadow-lg p-8 h-full flex flex-col justify-center">
            <p className="text-amber-300 font-medium mb-3">{backText}</p>
            {backText1 && <p className="text-gray-200 mb-2">{backText1}</p>}
            {backText2 && <p className="text-gray-200">{backText2}</p>}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const MissionVision = () => {
  const missionVisionRef = useRef(null);
  const missionVisionInView = useInView(missionVisionRef, {
    once: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={missionVisionRef}
      className="py-24 bg-gray-50"
      initial="hidden"
      animate={missionVisionInView ? "visible" : "hidden"}
      variants={fadeInUp}
    >
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <motion.span
            className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4"
            variants={bounceIn}
          >
            Our Guiding Principles
          </motion.span>
          <h2 className="text-4xl font-bold text-green-900 mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            The core principles that guide our faculty in shaping the future of
            vocational and technical education.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto"
          variants={staggerContainer}
        >
          {/* Mission Card */}
          <motion.div variants={slideInLeft}>
            <FlipCard
              frontTitle="Our Mission"
              frontIcon={FaUniversity}
              backText="To provide world-class TVET leadership in Africa through research and development, knowledge sharing, innovative practices, and human capital re-engineering."
            />
          </motion.div>

          {/* Vision Card */}
          <motion.div variants={slideInRight}>
            <FlipCard
              frontTitle="Our Vision"
              frontIcon={FaLightbulb}
              backText="To be a leading force in transforming formal and informal TVET practices through innovation and systems development."
              backText1="To restore human dignity through skills empowerment and positioning TVET for sustainable development in a globalized world."
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// 3. History/Timeline Section Component
const HistorySection = () => {
  const historyRef = useRef(null);
  const historyInView = useInView(historyRef, { once: true, threshold: 0.1 });

  return (
    <motion.section
      ref={historyRef}
      className="py-24 bg-gray-100"
      initial="hidden"
      animate={historyInView ? "visible" : "hidden"}
      variants={fadeInUp}
    >
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-12" variants={fadeInUp}>
          <motion.span
            className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4"
            variants={bounceIn}
          >
            Our Journey
          </motion.span>
          <h2 className="text-4xl font-bold text-green-900 mb-4">
            Our History
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            A journey through our milestones and achievements since our
            founding.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl shadow-xl overflow-hidden"
          variants={scaleIn}
        >
          <div className="bg-green-900 bg-opacity-90 text-white p-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start mb-6">
                <div className="bg-amber-500 p-3 rounded-full mr-4 mt-1">
                  <FaHistory className="text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Our Origins</h3>
                  <p className="text-gray-200">
                    The Faculty which started off as Department of Vocational
                    Teacher Education was one of the earliest departments in the
                    University of Nigeria, Nsukka established in 1962. It was
                    given its original mandate under Ford Foundation Project
                    Grant No. 640-0475 for $380,000 in 1964.
                  </p>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-amber-500 ml-6 mb-6">
                <div className="absolute w-4 h-4 bg-amber-500 rounded-full -left-[9px] top-0"></div>
                <p className="text-gray-200">
                  From inception, it was one of the three departments that made
                  up the faculty of Education. The then Department of Vocational
                  Teacher Education was made up of four broad units, namely;
                  Agricultural Education, Business Education, Home Economics
                  Education and Industrial Technical Education.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-amber-500 ml-6 mb-6">
                <div className="absolute w-4 h-4 bg-amber-500 rounded-full -left-[9px] top-0"></div>
                <p className="text-gray-200">
                  Each of the four initial units of the Department had only a
                  few students then and were, therefore grouped together into
                  one department with the understanding that the Units would
                  become full-fledged department when they had more students.
                  The first head of Department was Professor Agusiobo.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-amber-500 ml-6 mb-6">
                <div className="absolute w-4 h-4 bg-amber-500 rounded-full -left-[9px] top-0"></div>
                <p className="text-gray-200">
                  The Department was the pioneer Department of Vocational and
                  Technical Education in Nigeria. As a result, almost all the
                  institutions that run Vocational and Technical Education
                  programmes in Nigeria at University, Polytechnic and College
                  of Education levels are administered by the products of this
                  Department.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-amber-500 ml-6 mb-6">
                <div className="absolute w-4 h-4 bg-amber-500 rounded-full -left-[9px] top-0"></div>
                <p className="text-gray-200">
                  In 1985 Computer Education unit was introduced.
                </p>
              </div>

              <div className="relative pl-8 ml-6">
                <div className="absolute w-6 h-6 bg-amber-500 rounded-full -left-[11px] top-0 flex items-center justify-center">
                  <span className="text-green-900 font-bold">✓</span>
                </div>
                <p className="text-white font-bold text-lg">
                  The Faculty was created in July 2015.
                </p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 mb-6">
                The Faculty offers both undergraduate and postgraduate programme
                in the six occupational areas of Agricultural & Bioresources
                Education, Business Education, Computer & Robotics Education,
                Home Economics & Hospitality Management Education, Industrial
                Technical Education and Vocational and Entrepreneurship
                Education that serves the entire faculty.
              </p>

              <p className="text-gray-700 mb-6">
                The Faculty of Vocational Teacher Education, University of
                Nigeria, Nsukka has achieved huge successes in the face of
                overwhelming odds in the past 50 years. It has produced
                competent and vocationally skilled teachers that work in all
                areas of life in Nigeria and other parts of the world.
              </p>

              <h4 className="text-xl font-bold text-green-800 mb-4">
                The Faculty is made up of the following Departments:
              </h4>
              <ul className="list-decimal pl-6 mb-6 space-y-2">
                <motion.li
                  className="text-gray-700 font-medium"
                  whileHover={{ x: 5, color: "#166534" }}
                  transition={{ duration: 0.2 }}
                >
                  Agriculture Education
                </motion.li>
                <motion.li
                  className="text-gray-700 font-medium"
                  whileHover={{ x: 5, color: "#166534" }}
                  transition={{ duration: 0.2 }}
                >
                  Business Education
                </motion.li>
                <motion.li
                  className="text-gray-700 font-medium"
                  whileHover={{ x: 5, color: "#166534" }}
                  transition={{ duration: 0.2 }}
                >
                  Computer and Robotics Education
                </motion.li>
                <motion.li
                  className="text-gray-700 font-medium"
                  whileHover={{ x: 5, color: "#166534" }}
                  transition={{ duration: 0.2 }}
                >
                  Home Economics and Hospitality Management Education
                </motion.li>
                <motion.li
                  className="text-gray-700 font-medium"
                  whileHover={{ x: 5, color: "#166534" }}
                  transition={{ duration: 0.2 }}
                >
                  Industrial Technical Education
                </motion.li>
                <motion.li
                  className="text-gray-700 font-medium"
                  whileHover={{ x: 5, color: "#166534" }}
                  transition={{ duration: 0.2 }}
                >
                  Vocational and Entrepreneurship Education
                </motion.li>
              </ul>

              <h4 className="text-xl font-bold text-green-800 mb-4">
                Affiliated Institutions:
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <motion.li
                  className="text-gray-700"
                  whileHover={{ x: 5, color: "#166534" }}
                  transition={{ duration: 0.2 }}
                >
                  School of Technical Education at Yaba College of Technology,
                  Yaba
                </motion.li>
                <motion.li
                  className="text-gray-700"
                  whileHover={{ x: 5, color: "#166534" }}
                  transition={{ duration: 0.2 }}
                >
                  School of Vocational and Technical Education, Alvan Ikoku
                  Federal College of Education, Owerri
                </motion.li>
                <motion.li
                  className="text-gray-700"
                  whileHover={{ x: 5, color: "#166534" }}
                  transition={{ duration: 0.2 }}
                >
                  Federal College of Education (Technical) Omoku
                </motion.li>
                <motion.li
                  className="text-gray-700"
                  whileHover={{ x: 5, color: "#166534" }}
                  transition={{ duration: 0.2 }}
                >
                  School of Vocational and Technical Education, Nwafor Orizu
                  College of Education Nsugbe
                </motion.li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// 5. Faculty Values Component
const FacultyValues = () => {
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, threshold: 0.1 });

  const values = [
    {
      title: "Excellence",
      icon: <FaGraduationCap className="text-3xl text-amber-500" />,
      description:
        "Striving for the highest standards in teaching, research, and service.",
    },
    {
      title: "Integrity",
      icon: <FaUsers className="text-3xl text-amber-500" />,
      description:
        "Upholding honesty and ethical principles in all our academic and professional endeavors.",
    },
    {
      title: "Innovation",
      icon: <FaLightbulb className="text-3xl text-amber-500" />,
      description:
        "Fostering a culture of creativity, curiosity, and cutting-edge discovery.",
    },
    {
      title: "Collaboration",
      icon: <FaChalkboardTeacher className="text-3xl text-amber-500" />,
      description:
        "Working together across disciplines to achieve common goals and drive progress.",
    },
  ];

  return (
    <motion.section
      ref={valuesRef}
      className="py-24 bg-white"
      initial="hidden"
      animate={valuesInView ? "visible" : "hidden"}
      variants={fadeInUp}
    >
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <motion.span
            className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4"
            variants={bounceIn}
          >
            What We Stand For
          </motion.span>
          <h2 className="text-4xl font-bold text-green-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            The principles that define our community and guide our actions.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-md overflow-hidden"
              variants={itemFadeIn}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.3 },
              }}
            >
              <div className="p-8 text-center">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-green-900 rounded-full mb-6"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-green-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

// 6. Organization Structure Component
const OrganizationStructure = () => {
  const orgRef = useRef(null);
  const orgInView = useInView(orgRef, { once: true, threshold: 0.1 });

  // Faculty structure data
  const facultyStructure = {
    name: "Dean of Faculty",
    children: [
      {
        name: "Deputy Dean",
        children: [],
      },
      {
        name: "Faculty Officer",
        children: [],
      },
      {
        name: "Departments",
        children: [
          {
            name: "Agriculture and Bioresources Education",
            children: [
              { name: "HOD", children: [] },
              { name: "Academic Staff", children: [] },
              { name: "Support Staff", children: [] },
            ],
          },
          {
            name: "Business Education",
            children: [
              { name: "HOD", children: [] },
              { name: "Academic Staff", children: [] },
              { name: "Support Staff", children: [] },
            ],
          },
          {
            name: "Computer and Robotics Education",
            children: [
              { name: "HOD", children: [] },
              { name: "Academic Staff", children: [] },
              { name: "Support Staff", children: [] },
            ],
          },
          {
            name: "Home Economics and Hospitality Management Education",
            children: [
              { name: "HOD", children: [] },
              { name: "Academic Staff", children: [] },
              { name: "Support Staff", children: [] },
            ],
          },
          {
            name: "Industrial Technical Education",
            children: [
              { name: "HOD", children: [] },
              { name: "Academic Staff", children: [] },
              { name: "Support Staff", children: [] },
            ],
          },
          {
            name: "Vocational and Entrepreneurship Education",
            children: [
              { name: "HOD", children: [] },
              { name: "Academic Staff", children: [] },
              { name: "Support Staff", children: [] },
            ],
          },
        ],
      },
      {
        name: "Committees",
        children: [
          { name: "Academic Committee", children: [] },
          { name: "Research Committee", children: [] },
          { name: "Quality Assurance Committee", children: [] },
        ],
      },
    ],
  };

  // Tree Node Component
  const TreeNode = ({ node, level = 0 }) => {
    const [isOpen, setIsOpen] = useState(level < 2);
    const hasChildren = node.children && node.children.length > 0;

    return (
      <motion.div
        className={`ml-${level > 0 ? 6 : 0}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: level * 0.1 }}
      >
        <div
          className={`flex items-center py-2 ${
            level === 0 ? "bg-green-900 text-white rounded-t-lg p-4" : ""
          }`}
          onClick={() => hasChildren && setIsOpen(!isOpen)}
        >
          {hasChildren && (
            <motion.div
              className="mr-2 text-green-700 cursor-pointer"
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.div>
          )}

          <div
            className={`flex items-center ${
              hasChildren ? "cursor-pointer font-semibold" : "ml-7"
            } ${level === 0 ? "text-xl" : ""}`}
          >
            {level === 0 ? (
              <div className="bg-amber-500 p-2 rounded-full mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
            ) : level === 1 ? (
              <div className="w-2 h-2 bg-green-700 rounded-full mr-3"></div>
            ) : (
              <div className="w-1 h-1 bg-green-600 rounded-full mr-3"></div>
            )}
            {node.name}
          </div>
        </div>

        {hasChildren && isOpen && (
          <motion.div
            className={`border-l-2 border-green-200 ml-2.5 pl-4 ${
              level === 0 ? "mt-4" : "mt-1"
            }`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            {node.children.map((childNode, index) => (
              <TreeNode key={index} node={childNode} level={level + 1} />
            ))}
          </motion.div>
        )}
      </motion.div>
    );
  };

  return (
    <motion.section
      ref={orgRef}
      className="py-24 bg-gray-50"
      initial="hidden"
      animate={orgInView ? "visible" : "hidden"}
      variants={fadeInUp}
    >
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <motion.span
            className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4"
            variants={bounceIn}
          >
            Our Structure
          </motion.span>
          <h2 className="text-4xl font-bold text-green-900 mb-4">
            Organization Structure
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            How our faculty is organized to deliver excellence in education.
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden"
          variants={scaleIn}
        >
          <div className="p-6">
            <TreeNode node={facultyStructure} />
          </div>

          <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
            <p className="text-gray-600 text-sm">
              Click on items with arrows to expand or collapse
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// 7. Why Choose Us Component
const WhyChooseUs = () => {
  const reasons = [
    {
      title: "World-Class Faculty",
      description:
        "Learn from renowned experts and researchers who are leaders in their fields.",
    },
    {
      title: "State-of-the-Art Facilities",
      description:
        "Access modern laboratories, advanced equipment, and extensive research resources.",
    },
    {
      title: "Vibrant Student Life",
      description:
        "A supportive and diverse community with numerous clubs, events, and activities.",
    },
  ];

  const whyChooseUsRef = useRef(null);
  const whyChooseUsInView = useInView(whyChooseUsRef, {
    once: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={whyChooseUsRef}
      className="py-24 bg-green-900"
      initial="hidden"
      animate={whyChooseUsInView ? "visible" : "hidden"}
      variants={fadeInUp}
    >
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <motion.span
            className="inline-block px-4 py-1 rounded-full bg-green-800 text-green-100 text-sm font-medium mb-4"
            variants={bounceIn}
          >
            Our Advantages
          </motion.span>
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us?</h2>
          <p className="text-green-100 max-w-2xl mx-auto">
            Discover what sets our faculty apart and why students choose us for
            their education.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              variants={itemFadeIn}
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 },
              }}
            >
              <div className="p-8">
                <h3 className="text-xl font-bold text-green-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-700">{reason.description}</p>
              </div>
              <div className="h-2 bg-amber-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

// 8. Explore Departments Component
const ExploreDepartments = () => {
  const departments = [
    { name: "Agriculture and Bioresources Education", link: "/departments/1" },
    { name: "Business Education", link: "/departments/2" },
    { name: "Computer and Robotics Education", link: "/departments/3" },
    {
      name: "Home Economics and Hospitality Management Education",
      link: "/departments/4",
    },
    {
      name: "Industrial Technical Education",
      link: "/departments/5",
    },
    {
      name: "Vocational and Entrepreneurship Education",
      link: "/departments/6",
    },
  ];

  const departmentsRef = useRef(null);
  const departmentsInView = useInView(departmentsRef, {
    once: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={departmentsRef}
      id="departments"
      className="py-24 bg-gray-100"
      initial="hidden"
      animate={departmentsInView ? "visible" : "hidden"}
      variants={fadeInUp}
    >
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <motion.span
            className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4"
            variants={bounceIn}
          >
            Academic Units
          </motion.span>
          <h2 className="text-4xl font-bold text-green-900 mb-4">
            Explore Our Departments
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Discover our diverse academic departments, each offering unique
            opportunities for learning and growth.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={staggerContainer}
        >
          {departments.map((dept, index) => (
            <motion.a
              key={index}
              href={dept.link}
              className="bg-white rounded-xl shadow-md overflow-hidden group"
              variants={itemFadeIn}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                transition: { duration: 0.3 },
              }}
            >
              <div className="p-6">
                <h3 className="text-lg font-bold text-green-900 group-hover:text-green-700 transition-colors duration-300">
                  {dept.name}
                </h3>
                <p className="text-sm text-green-700 mt-2 flex items-center">
                  Learn more
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </motion.svg>
                </p>
              </div>
              <div className="h-1 w-0 bg-green-700 group-hover:w-full transition-all duration-300"></div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

// 9. Photo Carousel Component
const PhotoCarousel = () => {
  const images = [
    "https://placehold.co/1200x500/a8dadc/1d3557?text=Agriculture+Department",
    "https://placehold.co/1200x500/f1faee/e63946?text=Student+Collaboration",
    "https://placehold.co/1200x500/457b9d/f1faee?text=Research+in+Action",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselRef = useRef(null);
  const carouselInView = useInView(carouselRef, { once: true, threshold: 0.1 });

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      ref={carouselRef}
      className="py-20 bg-gray-100"
      initial="hidden"
      animate={carouselInView ? "visible" : "hidden"}
      variants={fadeInUp}
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-12"
          variants={fadeInUp}
        >
          Glimpses of Our Faculty
        </motion.h2>
        <motion.div
          className="relative w-full max-w-5xl mx-auto"
          variants={scaleIn}
        >
          <div className="overflow-hidden rounded-lg shadow-2xl">
            <motion.div
              className="flex transition-transform ease-in-out duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {images.map((src, index) => (
                <motion.img
                  key={index}
                  src={src}
                  alt={`Faculty event ${index + 1}`}
                  className="w-full flex-shrink-0"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
