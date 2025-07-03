import React from "react";
import VteLogoBackground from "../assets/images/hero-bg.jpg";
import StudentsColProjects from "../assets/images/students_collabo_project.png";
import FacultyPresident from "../assets/images/faculty_president.png";
import ProfilePlaceholder from "../assets/images/profile_placeholder.jpg";
import { Link } from "react-router-dom";
import { studentPresidents, departments } from "../api/data";

const DepartmentsPage = () => {
  return (
    <div className="bg-gray-50 font-sans">
      {/* 1. HERO SECTION */}
      <section
        className="bg-cover bg-center h-96 text-white bg-opacity-50"
        style={{ backgroundImage: `url(${VteLogoBackground})` }}
      >
        <div className="flex items-center justify-center h-full w-full bg-black-900 bg-opacity-25 text-sm/">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-green-200">
              EXPLORE OUR DEPARTMENT
            </h1>
            <br />
          </div>
        </div>
      </section>
      {/* Main content wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 2. DEPARTMENTS GRID */}
        <section id="departments" className="scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
              THE DEPARTMENTS IN VTE
            </h2>
            <p className="mt-4 text-lg text-black">
              Click on a department to learn more about its focus, faculty, and
              opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {departments.map((dept) => {
              const Icon = dept.icon;
              return (
                <div
                  key={dept.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex-shrink-0">
                        <Icon className="h-10 w-10 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-green-900">
                        {dept.name}
                      </h3>
                    </div>
                    <p className="text-gray-700 mb-4">{dept.summary}</p>
                  </div>
                  <Link
                    to={`/departments/${dept.id}`}
                    className="mt-6 w-full text-green-800 underline font-bold py-2 px-4 rounded-lg transition-colors text-start inline-block"
                  >
                    See More
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. STUDENT LIFE SECTION */}
        <section id="student-life" className="mt-24 scroll-mt-20 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-green-900 p-8 rounded-lg shadow-lg">
            <div className="order-2 md:order-1 ">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Vibrant Student Life
              </h2>
              <p className="mt-4 text-gray-200 text-justify">
                Life in the Faculty of Education is more than just lectures and
                labs. We foster a community where students can grow, innovate,
                and collaborate. From various academic clubs to community
                engagement projects and creative arts groups, there's always
                something happening. Our goal is to provide a holistic
                educational experience that prepares you not just for a career,
                but for life.
              </p>
              <button className="mt-6 bg-gray-100 text-green-900 font-bold py-2 px-4 rounded-lg hover:bg-green-800 outline-2 hover:text-gray-100 transition-colors duration 300 ease-in-out">
                Explore Clubs & Activities
              </button>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={StudentsColProjects}
                className="rounded-lg shadow-lg w-full h-auto"
                alt="Students Collaboration Projects"
              />
            </div>
          </div>
        </section>

        {/* 4. DEPARTMENTAL STUDENT UNION SECTION */}
        <section id="student-union" className="mt-24 scroll-mt-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
              Meet Your Student Leaders
            </h2>
            <p className="mt-4 text-lg text-gray-800 max-w-2xl mx-auto">
              The Education Students' Union is your voice, your support system,
              and your advocate. Get to know the leaders representing you.
            </p>
          </div>
          {/* Faculty President */}
          <div className="mt-12 mb-16 flex flex-col items-center">
            <div className="relative">
              <img
                src={FacultyPresident}
                alt={`Photo of ${studentPresidents.facultyPresident.name}`}
                className="h-40 w-40 rounded-full object-cover shadow-2xl ring-4 ring-green-800 ring-offset-4 ring-offset-gray-50"
              />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-gray-950">
              {studentPresidents.facultyPresident.name}
            </h3>
            <p className="text-lg font-medium text-green-900">
              {studentPresidents.facultyPresident.title}
            </p>
          </div>
          {/* Departmental Presidents */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6/2 gap-x-6 gap-y-10">
            {studentPresidents.departmentalPresidents.map((president) => (
              <div key={president.name} className="text-center">
                <img
                  src={ProfilePlaceholder}
                  alt={`Photo of ${president.name}`}
                  className="w-24 h-24 mx-auto rounded-full object-cover shadow-lg"
                />
                <h4 className="mt-4 text-lg text-green-800 font-bold">
                  {president.name}
                </h4>
                <p className="text-lg text-gray-900">{president.department}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. RECENT EVENT BANNER */}
        <section id="recent-event" className="mt-24 scroll-mt-20">
          <div className="bg-green-900 rounded-lg shadow-xl overflow-hidden">
            <div className="p-12 text-center text-white">
              <h2 className="text-3xl font-bold">
                Annual Education Innovation Showcase 2025
              </h2>
              <p className="mt-4 max-w-2xl mx-auto ">
                Our most recent event was a massive success, showcasing
                groundbreaking educational projects and research from students
                across all departments. Thank you to all participants and
                sponsors!
              </p>
              <button className="mt-6 bg-white text-gray-900 font-bold py-2 px-6 rounded-full hover:bg-amber-600 transition-colors hover:text-white">
                View Event Gallery
              </button>
            </div>
          </div>
        </section>

        {/* 6. COMPETITIONS & MEETINGS SECTION */}
        <section id="competitions-meetings" className="mt-24 scroll-mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Competitions */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Educational Competitions & Showcases
              </h3>
              <p className="text-black text-justify mb-4">
                Sharpen your pedagogical skills and showcase your innovative
                teaching approaches. We regularly host and participate in
                national and international educational contests.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 font-bold mr-2">&#8594;</span>{" "}
                  Inter-Departmental Teaching Aid Design Challenge - Fall 2025
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 font-bold mr-2">&#8594;</span>{" "}
                  National Innovative Pedagogy Contest - Spring 2026
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 font-bold mr-2">&#8594;</span>{" "}
                  EdTech Hackathon: Future of Learning - Coming Soon
                </li>
              </ul>
            </div>
            {/* Congress Meetings */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-md ">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Academic Conferences & Research Colloquia
              </h3>
              <p className="text-black text-justify mb-4">
                Engage with the latest educational research and network with
                pioneers in the field at our regular academic gatherings.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 font-bold mr-2">&#8594;</span>{" "}
                  Monthly Faculty Research Seminar
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 font-bold mr-2">&#8594;</span>{" "}
                  Annual Education Research Conference
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 font-bold mr-2">&#8594;</span>{" "}
                  Guest Lecture Series on Global Education Trends
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DepartmentsPage;
