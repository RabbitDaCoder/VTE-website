import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import VteLogoBackground from "/images/hero/hero-bg.jpg";
import { departments, studentPresidents } from "../api/data";
import HelmetSEO from "../components/HelmetSEO.jsx";

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

// Define the missing StudentsColProjects component
const StudentsColProjects = () => (
  <img
    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    className="rounded-lg shadow-lg w-full h-auto object-cover"
    alt="Students Collaboration Projects"
  />
);

const DepartmentsPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const departmentsRef = useRef(null);
  const departmentsInView = useInView(departmentsRef, {
    once: true,
    threshold: 0.1,
  });

  // Updated departments data with icons from data.js
  const departmentsData = departments.map((dept) => ({
    ...dept,
    // The icon is already included in the departments data
  }));

  return (
    <div className="bg-gray-50 font-sans">
      <HelmetSEO page="departments" />

      {/* HERO SECTION */}
      <motion.section
        className="bg-cover bg-center h-96 text-white relative"
        style={{ backgroundImage: `url(${VteLogoBackground})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0"></div>
        <div className="flex items-center justify-center h-full w-full relative z-10">
          <motion.div
            className="text-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Our Departments
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Discover the academic units that make up our faculty
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* NAVIGATION TABS */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto py-4 space-x-8 no-scrollbar">
            <button
              onClick={() => setActiveTab("overview")}
              className={`whitespace-nowrap px-3 py-2 font-medium text-sm rounded-md transition-colors ${
                activeTab === "overview"
                  ? "bg-green-100 text-green-800"
                  : "text-gray-600 hover:text-green-700"
              }`}
            >
              Departments Overview
            </button>
            <button
              onClick={() => setActiveTab("student-life")}
              className={`whitespace-nowrap px-3 py-2 font-medium text-sm rounded-md transition-colors ${
                activeTab === "student-life"
                  ? "bg-green-100 text-green-800"
                  : "text-gray-600 hover:text-green-700"
              }`}
            >
              Student Life
            </button>
            <button
              onClick={() => setActiveTab("leadership")}
              className={`whitespace-nowrap px-3 py-2 font-medium text-sm rounded-md transition-colors ${
                activeTab === "leadership"
                  ? "bg-green-100 text-green-800"
                  : "text-gray-600 hover:text-green-700"
              }`}
            >
              Student Leadership
            </button>
            <button
              onClick={() => setActiveTab("events")}
              className={`whitespace-nowrap px-3 py-2 font-medium text-sm rounded-md transition-colors ${
                activeTab === "events"
                  ? "bg-green-100 text-green-800"
                  : "text-gray-600 hover:text-green-700"
              }`}
            >
              Events & Activities
            </button>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* DEPARTMENTS OVERVIEW */}
        {activeTab === "overview" && (
          <motion.section
            ref={departmentsRef}
            id="departments"
            className="scroll-mt-20"
            initial="hidden"
            animate={departmentsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-12" variants={fadeIn}>
              <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
                Academic Units
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
                Departments in VTE
              </h2>
              <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
                Our faculty is home to six specialized departments, each
                offering unique programs designed to prepare students for
                successful careers in education and beyond.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
              variants={staggerContainer}
            >
              {departmentsData.map((dept) => (
                <motion.div
                  key={dept.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                  variants={fadeIn}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex-shrink-0 bg-blue-50 p-3 rounded-full">
                        <dept.icon />
                      </div>
                      <h3 className="text-xl font-bold text-green-900 line-clamp-2">
                        {dept.name}
                      </h3>
                    </div>
                    <p className="text-gray-700 mb-6">{dept.summary}</p>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <svg
                          className="h-5 w-5 mr-2 text-green-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        <span>
                          HOD: {dept.details?.head || "Prof. John Doe"}
                        </span>
                      </div>

                      <div className="flex items-center text-sm text-gray-600">
                        <svg
                          className="h-5 w-5 mr-2 text-green-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                        <span>{dept.features?.length || 4} Core Features</span>
                      </div>
                    </div>

                    <Link
                      to={`/departments/${dept.id}`}
                      className="mt-6 inline-flex items-center text-green-800 font-medium hover:text-green-600 transition-colors"
                    >
                      Learn more
                      <svg
                        className="ml-1 h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}

        {/* STUDENT LIFE SECTION */}
        {activeTab === "student-life" && (
          <motion.section
            id="student-life"
            className="scroll-mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
                Campus Experience
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
                Vibrant Student Life
              </h2>
              <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
                Life in the Faculty of VTE extends beyond academics, offering a
                rich tapestry of experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-gradient-to-r from-green-900 to-green-800 p-8 rounded-xl shadow-lg mb-12">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold tracking-tight text-white mb-4">
                  Community & Collaboration
                </h3>
                <p className="text-gray-200 text-lg">
                  Life in the Faculty of Education is more than just lectures
                  and labs. We foster a community where students can grow,
                  innovate, and collaborate. From various academic clubs to
                  community engagement projects and creative arts groups,
                  there's always something happening.
                </p>
                <button className="mt-6 bg-white text-green-900 font-bold py-2 px-6 rounded-lg hover:bg-green-100 transition-colors duration-300 ease-in-out">
                  Explore Clubs & Activities
                </button>
              </div>
              <div className="order-1 md:order-2">
                <StudentsColProjects />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Academic Clubs
                </h3>
                <p className="text-gray-600">
                  Join subject-specific clubs to deepen your knowledge,
                  collaborate on projects, and participate in competitions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Community Outreach
                </h3>
                <p className="text-gray-600">
                  Apply your skills in real-world settings through our various
                  community service and outreach programs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Creative Arts
                </h3>
                <p className="text-gray-600">
                  Express yourself through drama, music, visual arts, and other
                  creative pursuits in our arts programs.
                </p>
              </div>
            </div>
          </motion.section>
        )}

        {/* STUDENT LEADERSHIP SECTION */}
        {activeTab === "leadership" && (
          <motion.section
            id="student-leadership"
            className="scroll-mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
                Student Representatives
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
                Meet Your Student Leaders
              </h2>
              <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
                The Education Students' Union is your voice, your support
                system, and your advocate. Get to know the leaders representing
                you.
              </p>
            </div>

            {/* Faculty President */}
            <div className="mt-12 mb-16 flex flex-col items-center">
              <div className="relative">
                <img
                  src={studentPresidents.facultyPresident.imageUrl}
                  alt="Faculty President"
                  className="h-40 w-40 rounded-full object-cover shadow-2xl ring-4 ring-green-800 ring-offset-4 ring-offset-gray-50"
                />
                <div className="absolute -bottom-2 -right-2 bg-green-600 text-white rounded-full p-2">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                {studentPresidents.facultyPresident.name}
              </h3>
              <p className="text-lg font-medium text-green-800">
                {studentPresidents.facultyPresident.title}
              </p>
              <p className="mt-2 text-gray-600 max-w-md text-center">
                "My goal is to ensure every student's voice is heard and that we
                create an inclusive environment for all."
              </p>
            </div>

            {/* Departmental Presidents */}
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Departmental Representatives
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10">
              {studentPresidents.departmentalPresidents.map(
                (president, index) => (
                  <div key={index} className="text-center">
                    <img
                      src={president.imageUrl}
                      alt={`${president.name}`}
                      className="w-24 h-24 mx-auto rounded-full object-cover shadow-lg"
                    />
                    <h4 className="mt-4 text-lg text-green-800 font-bold">
                      {president.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {president.department}
                    </p>
                  </div>
                )
              )}
            </div>
          </motion.section>
        )}

        {/* EVENTS & ACTIVITIES SECTION */}
        {activeTab === "events" && (
          <motion.section
            id="events-activities"
            className="scroll-mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
                Calendar
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
                Events & Activities
              </h2>
              <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
                Stay engaged with academic competitions, conferences, and social
                gatherings throughout the year.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Competitions */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <svg
                    className="w-6 h-6 text-green-600 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  Educational Competitions
                </h3>
                <p className="text-gray-700 mb-4">
                  Sharpen your pedagogical skills and showcase your innovative
                  teaching approaches. We regularly host and participate in
                  national and international educational contests.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-2">
                      &#8594;
                    </span>
                    Inter-Departmental Teaching Aid Design Challenge - Fall 2025
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-2">
                      &#8594;
                    </span>
                    National Innovative Pedagogy Contest - Spring 2026
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-2">
                      &#8594;
                    </span>
                    EdTech Hackathon: Future of Learning - Coming Soon
                  </li>
                </ul>
              </div>

              {/* Conferences */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <svg
                    className="w-6 h-6 text-green-600 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                  Academic Conferences
                </h3>
                <p className="text-gray-700 mb-4">
                  Expand your knowledge and network with peers and professionals
                  at our academic conferences. These events feature keynote
                  speakers, research presentations, and workshops.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-2">
                      &#8594;
                    </span>
                    Annual Education Research Symposium - October 2025
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-2">
                      &#8594;
                    </span>
                    International Conference on Educational Innovation -
                    February 2026
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-2">
                      &#8594;
                    </span>
                    Student Teaching Forum - Biannual
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
};

export default DepartmentsPage;
