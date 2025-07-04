import React, { useState, useEffect } from "react";
import { events, departments } from "../api/data"; // Use departments for categories
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import { motion } from "framer-motion";
import useDateFormatter from "../hooks/useDateFormatter";
import { LuMapPin, LuClock2, LuSearch, LuCalendarDays } from "react-icons/lu";
import heroImage from "/images/events/matric.JPG";
import { Link } from "react-router-dom";
import Callout from "../components/Callout";
import HelmetSEO from "../components/HelmetSEO";

// Build department categories from departments data
const departmentCategory = ["All", ...departments.map((dept) => dept.name)];

const HeroSection = () => (
  <div className="relative h-[380px] md:h-[440px] flex items-center justify-center text-white overflow-hidden">
    <img
      src={heroImage}
      alt="Faculty Events Hero"
      className="absolute inset-0 w-full h-full object-cover object-center z-0 transition-transform duration-700 scale-105"
      loading="eager"
      draggable={false}
    />
    {/* Overlay: dark gradient with subtle color */}
    <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-800/60 to-green-700/60 z-10" />
    {/* Decorative overlay for extra depth */}
    <div className="absolute inset-0 bg-black/30 z-20" />
    <div className="relative z-30 text-center px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-2xl mb-3">
        Faculty Events
      </h1>
      <p className="text-base md:text-lg max-w-2xl mx-auto drop-shadow-lg font-medium">
        Discover upcoming activities, symposiums, and student-led initiatives
        across the Faculty of Vocational & Technical Education.
      </p>
    </div>
  </div>
);

const EventCard = ({ event }) => {
  const { day, month, time } = useDateFormatter(event.date);

  return (
    <Link
      to={`/events/${event.id}`}
      className="group relative transition-shadow duration-300"
    >
      <motion.div
        className="shadow-md rounded-xl overflow-hidden transition hover:shadow-xl py-2 bg-green-50 flex flex-col gap-2 h-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-48 object-cover rounded-md"
          />
          {/* Calendar-style Date Badge */}
          <div className="absolute top-3 left-3 bg-white rounded-md px-2 text-center shadow-md text-red-600 leading-tight w-12">
            <div className="text-lg font-bold">{day}</div>
            <div className="text-[10px] uppercase">{month}</div>
          </div>
        </div>
        <div className="px-4 flex flex-col">
          <span className="text-xs capitalize text-green-800 font-semibold">
            {event.department}
          </span>
          <h3 className="text-lg font-bold mt-1 leading-tight text-green-900">
            {event.title}
            {event.upcoming && (
              <span className="text-green-700 text-xs font-semibold bg-green-200 px-2 py-[1px] rounded-full ml-2">
                Upcoming
              </span>
            )}
          </h3>
          <p className="text-gray-700 text-sm mt-1 line-clamp-2">
            {event.description}
          </p>
          <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
            <div className="flex items-center gap-0.5">
              <LuClock2 size={14} /> <span className="italic">{time}</span>
            </div>
            <div className="flex items-center gap-0.5">
              <LuMapPin size={14} /> <span>{event.location}</span>
            </div>
          </div>
          <div className="inline-block text-green-700 text-sm mt-2 font-medium hover:text-green-800">
            See more details →
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const Events = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // Filtering by department and search term
  const filtered = events.filter((event) => {
    const matchesDepartment =
      selectedDepartment === "All" || event.department === selectedDepartment;
    const matchesSearch =
      searchTerm === "" ||
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesDepartment && matchesSearch;
  });

  // Pagination
  const eventsPerPage = 6;
  const paginated = filtered.slice(
    (currentPage - 1) * eventsPerPage,
    currentPage * eventsPerPage
  );

  // Reset to page 1 if filter or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedDepartment, searchTerm]);

  // Handle search input
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Clear search
  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="bg-green-50 min-h-screen pb-10">
      <HelmetSEO page="events" />
      <HeroSection />

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <Filter
          categories={departmentCategory}
          selected={selectedDepartment}
          onSelect={setSelectedDepartment}
        />

        <div className="relative max-w-md w-full">
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full px-4 py-2 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          {searchTerm ? (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          ) : (
            <LuSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          )}
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        {filtered.length === 0 ? (
          <div className="bg-white rounded-xl p-8 text-center shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              No events found
            </h3>
            <p className="text-gray-600 mb-4">
              We couldn't find any events matching your search criteria.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedDepartment("All");
              }}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginated.map((event, idx) => (
                <EventCard key={idx} event={event} />
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPosts={filtered.length}
              postsPerPage={eventsPerPage}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </div>

      {/* Callout Section */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <Callout />
      </div>
    </div>
  );
};

export default Events;
