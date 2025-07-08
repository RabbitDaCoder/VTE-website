import React from "react";
import { useParams, Link } from "react-router-dom";
import { departments, events } from "../../api/data";
import {
  FaUserCircle,
  FaGraduationCap,
  FaFlask,
  FaUsers,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import {
  LuBuilding,
  LuHistory,
  LuBookOpen,
  LuBeaker,
  LuUsers,
  LuActivity,
  LuFlaskConical,
  LuImage,
  LuCalendar,
  LuPhone,
  LuMapPin,
} from "react-icons/lu";
import HelmetSEO from "../HelmetSEO";

const DepartmentDetail = () => {
  const { id } = useParams();
  const dept = departments.find((d) => d.id === parseInt(id));

  if (!dept)
    return <div className="text-center py-20">Department not found.</div>;

  const Icon = dept.icon;

  // Get department events
  const departmentEvents = events
    .filter((event) => event.department === dept.name)
    .slice(0, 3);

  // Get a random gallery image for the hero background
  const randomGalleryImage =
    dept.gallery && dept.gallery.length > 0
      ? dept.gallery[Math.floor(Math.random() * dept.gallery.length)]
      : dept.image;

  return (
    <>
      <HelmetSEO page="departmentDetail" department={dept} />

      {/* Hero Section with Department Logo and Gallery Image */}
      <div className="relative h-[550px] lg:h-[420px] bg-green-900">
        {/* Background Image from Gallery */}
        <div className="absolute inset-0 z-0">
          <img
            src={randomGalleryImage}
            alt={`${dept.name} Background`}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 to-green-800/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4 py-48">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-full mb-4 border border-white/20">
            {dept.logo ? (
              <img
                src={dept.logo}
                alt={`${dept.name} Logo`}
                className="w-32 h-32 object-contain"
              />
            ) : (
              <Icon className="text-6xl text-white" />
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
            {dept.name}
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-white/90">
            {dept.summary}
          </p>

          <div className="mt-8">
            <Link
              to="/departments"
              className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full backdrop-blur-sm transition-all border border-white/20"
            >
              &larr; Back to Departments
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-16 px-4">
        {/* 1. Hero section with department image and name - Now moved above */}
        <div className="bg-white rounded-2xl shadow-xl border border-green-100 overflow-hidden mb-10">
          <div className="relative h-64 w-full">
            <img
              src={dept.image}
              alt={dept.name}
              className="object-cover w-full h-full"
            />
            <div className="absolute top-4 left-4 bg-white/80 rounded-full p-3 shadow">
              <Icon className="text-3xl text-green-700" />
            </div>
          </div>
          <div className="p-8">
            <h1 className="text-3xl font-bold text-green-700 mb-2">
              {dept.name}
            </h1>
            <p className="text-gray-600 mb-4">{dept.summary}</p>
            <h2 className="text-lg font-semibold mb-2">Key Features</h2>
            <ul className="flex flex-wrap gap-2">
              {dept.features.map((feature, i) => (
                <li
                  key={i}
                  className="bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full font-medium"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 2. About departments when it's created, origin of department */}
        <div className="bg-white rounded-xl shadow border border-green-100 p-6 mb-10">
          <div className="flex items-center gap-2 mb-4">
            <LuHistory className="text-2xl text-green-700" />
            <h2 className="text-2xl font-bold text-green-800">
              About the Department
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            {dept.description}
          </p>
          {dept.history && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-green-700 mb-2">
                History & Origin
              </h3>
              <p className="text-gray-700 leading-relaxed">{dept.history}</p>
            </div>
          )}
        </div>

        {/* 3. Programs and courses highlight */}
        <div className="bg-white rounded-xl shadow border border-green-100 p-6 mb-10">
          <div className="flex items-center gap-2 mb-4">
            <LuBookOpen className="text-2xl text-green-700" />
            <h2 className="text-2xl font-bold text-green-800">
              Programs & Courses
            </h2>
          </div>

          {dept.programs ? (
            <div className="space-y-4">
              {dept.programs.map((program, index) => (
                <div
                  key={index}
                  className="border-b border-green-100 pb-4 last:border-0"
                >
                  <h3 className="text-lg font-semibold text-green-700">
                    {program.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {program.description}
                  </p>

                  {program.courses && program.courses.length > 0 && (
                    <div className="mt-2">
                      <h4 className="text-md font-medium text-green-600 mb-1">
                        Key Courses:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {program.courses.map((course, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-1 text-sm text-gray-700"
                          >
                            <FaGraduationCap
                              className="text-green-500"
                              size={12}
                            />
                            <span>{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-4">
              {dept.features.map((feature, i) => (
                <div key={i} className="bg-green-50 p-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <FaGraduationCap className="text-green-600" />
                    <span className="font-medium">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 4. Key facilities and laboratories */}
        {dept.facilities && (
          <div className="bg-white rounded-xl shadow border border-green-100 p-6 mb-10">
            <div className="flex items-center gap-2 mb-4">
              <LuBeaker className="text-2xl text-green-700" />
              <h2 className="text-2xl font-bold text-green-800">
                Facilities & Laboratories
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {dept.facilities.map((facility, i) => (
                <div key={i} className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-700 mb-1">
                    {facility.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {facility.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. Department's top staffs and student executive body */}
        <div className="bg-white rounded-xl shadow border border-green-100 p-6 mb-10">
          <div className="flex items-center gap-2 mb-4">
            <LuUsers className="text-2xl text-green-700" />
            <h2 className="text-2xl font-bold text-green-800">
              Faculty & Leadership
            </h2>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-green-700 mb-3">
              Academic Staff
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {dept.staff ? (
                dept.staff.map((person, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-green-50 p-3 rounded-lg"
                  >
                    <FaUserCircle className="text-3xl text-green-600" />
                    <div>
                      <h4 className="font-medium text-green-800">
                        {person.name}
                      </h4>
                      <p className="text-xs text-gray-600">{person.position}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-2 text-center text-gray-500 py-4">
                  Staff information coming soon
                </div>
              )}
            </div>
          </div>

          {dept.studentLeaders && (
            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-3">
                Student Leadership
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {dept.studentLeaders.map((leader, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-green-50 p-3 rounded-lg"
                  >
                    <FaUsers className="text-2xl text-green-600" />
                    <div>
                      <h4 className="font-medium text-green-800">
                        {leader.name}
                      </h4>
                      <p className="text-xs text-gray-600">{leader.position}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 6. Student life and activities/events */}
        <div className="bg-white rounded-xl shadow border border-green-100 p-6 mb-10">
          <div className="flex items-center gap-2 mb-4">
            <LuActivity className="text-2xl text-green-700" />
            <h2 className="text-2xl font-bold text-green-800">
              Student Life & Activities
            </h2>
          </div>

          {departmentEvents.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-4">
              {departmentEvents
                .sort((a, b) => new Date(a.date) - new Date(b.date)) // Sort by date (earlier first)
                .map((event) => (
                  <Link
                    key={event.id}
                    to={`/events/${event.id}`}
                    className="bg-green-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-3">
                      <h3 className="font-medium text-green-800 mb-1">
                        {event.title}
                      </h3>
                      <p className="text-xs text-gray-600 mb-2">
                        {new Date(event.date).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-gray-700 line-clamp-2">
                        {event.description}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-4">
              No upcoming events for this department
            </p>
          )}
        </div>

        {/* 7. Researches and projects */}
        {dept.research && (
          <div className="bg-white rounded-xl shadow border border-green-100 p-6 mb-10">
            <div className="flex items-center gap-2 mb-4">
              <LuFlaskConical className="text-2xl text-green-700" />
              <h2 className="text-2xl font-bold text-green-800">
                Research & Projects
              </h2>
            </div>

            <div className="space-y-4">
              {dept.research.map((item, i) => (
                <div
                  key={i}
                  className="border-b border-green-100 pb-4 last:border-0"
                >
                  <h3 className="font-semibold text-green-700">{item.title}</h3>
                  <p className="text-sm text-gray-700 mt-1">
                    {item.description}
                  </p>
                  {item.researchers && (
                    <p className="text-xs text-gray-500 mt-2">
                      Researchers: {item.researchers}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 8. Gallery Section */}
        {dept.gallery && dept.gallery.length > 0 && (
          <div className="bg-white rounded-xl shadow border border-green-100 p-6 mb-10">
            <div className="flex items-center gap-2 mb-4">
              <LuImage className="text-2xl text-green-700" />
              <h2 className="text-2xl font-bold text-green-800">
                Department Gallery
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {dept.gallery.slice(0, 6).map((image, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg aspect-square"
                >
                  <img
                    src={image}
                    alt={`${dept.name} Gallery Image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-white bg-green-800/70 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                      View Full Size
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {dept.gallery.length > 4 && (
              <div className="mt-4 text-center">
                <Link
                  to={`/gallery/${dept.id}`}
                  className="inline-flex items-center gap-2 bg-green-100 hover:bg-green-200 text-green-800 px-4 py-2 rounded-full transition-colors"
                >
                  <LuImage className="text-green-700" />
                  View All {dept.gallery.length} Photos
                </Link>
              </div>
            )}
          </div>
        )}

        {/* 9. Contact Information */}
        <div className="bg-white rounded-xl shadow border border-green-100 p-6 mb-10">
          <div className="flex items-center gap-2 mb-4">
            <LuPhone className="text-2xl text-green-700" />
            <h2 className="text-2xl font-bold text-green-800">
              Contact Information
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Contact Details */}
            <div className="bg-green-50 p-5 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">
                Department Office
              </h3>

              {dept.contact ? (
                <div className="space-y-3">
                  {dept.contact.address && (
                    <div className="flex items-start gap-3">
                      <LuMapPin className="text-green-700 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">{dept.contact.address}</p>
                    </div>
                  )}

                  {dept.contact.email && (
                    <div className="flex items-center gap-3">
                      <FaEnvelope className="text-green-700 flex-shrink-0" />
                      <a
                        href={`mailto:${dept.contact.email}`}
                        className="text-green-700 hover:underline"
                      >
                        {dept.contact.email}
                      </a>
                    </div>
                  )}

                  {dept.contact.phone && (
                    <div className="flex items-center gap-3">
                      <FaPhone className="text-green-700 flex-shrink-0" />
                      <a
                        href={`tel:${dept.contact.phone}`}
                        className="text-green-700 hover:underline"
                      >
                        {dept.contact.phone}
                      </a>
                    </div>
                  )}

                  {dept.contact.hours && (
                    <div className="flex items-start gap-3">
                      <LuCalendar className="text-green-700 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700 font-medium">
                          Office Hours:
                        </p>
                        <p className="text-gray-700">{dept.contact.hours}</p>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-gray-600">
                  Contact information coming soon.
                </p>
              )}
            </div>

            {/* Social Media */}
            <div className="bg-green-50 p-5 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">
                Connect With Us
              </h3>

              {dept.social && Object.keys(dept.social).length > 0 ? (
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-3">
                    {dept.social.facebook && (
                      <a
                        href={dept.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-3 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors shadow-sm"
                      >
                        <FaFacebook size={20} />
                      </a>
                    )}

                    {dept.social.twitter && (
                      <a
                        href={dept.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-3 rounded-full text-blue-400 hover:bg-blue-400 hover:text-white transition-colors shadow-sm"
                      >
                        <FaTwitter size={20} />
                      </a>
                    )}

                    {dept.social.instagram && (
                      <a
                        href={dept.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-3 rounded-full text-pink-600 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white transition-colors shadow-sm"
                      >
                        <FaInstagram size={20} />
                      </a>
                    )}

                    {dept.social.linkedin && (
                      <a
                        href={dept.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-3 rounded-full text-blue-700 hover:bg-blue-700 hover:text-white transition-colors shadow-sm"
                      >
                        <FaLinkedin size={20} />
                      </a>
                    )}

                    {dept.social.youtube && (
                      <a
                        href={dept.social.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-3 rounded-full text-red-600 hover:bg-red-600 hover:text-white transition-colors shadow-sm"
                      >
                        <FaYoutube size={20} />
                      </a>
                    )}
                  </div>

                  <p className="text-sm text-gray-600">
                    Follow us on social media to stay updated with the latest
                    news, events, and achievements.
                  </p>
                </div>
              ) : (
                <div>
                  <p className="text-gray-600 mb-3">
                    Connect with us on our faculty social media channels:
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://facebook.com/unn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-3 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors shadow-sm"
                    >
                      <FaFacebook size={20} />
                    </a>
                    <a
                      href="https://twitter.com/unn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-3 rounded-full text-blue-400 hover:bg-blue-400 hover:text-white transition-colors shadow-sm"
                    >
                      <FaTwitter size={20} />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepartmentDetail;
