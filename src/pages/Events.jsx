import React, { useState } from "react";
import { events, departments } from "../api/data"; // Use departments for categories
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import { motion } from "framer-motion";
import useDateFormatter from "../hooks/useDateFormatter";
import { LuMapPin, LuClock2 } from "react-icons/lu";
import heroImage from "/images/matric.JPG";
import { Link } from "react-router-dom";
import Callout from "../components/Callout";

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
            className="w-full h-48 object-cover rounded-md "
          />
          {/* Calendar-style Date Badge */}
          <div className="absolute top-3 left-3 bg-white rounded-md px-2  text-center shadow-md text-red-600 leading-tight w-12">
            <div className="text-lg font-bold">{day}</div>
            <div className="text-[10px] uppercase">{month}</div>
          </div>
        </div>
        <div className="px-4 flex flex-col ">
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
          <p className="text-gray-700 text-sm mt-1">{event.description}</p>
          <div className="text-gray-500 flex gap-0.5 items-center text-xs mt-2">
            <LuClock2 /> <span className="italic">{time}</span>
          </div>
          <div className="flex items-center gap-2  text-sm text-blue-600 font-medium">
            <LuMapPin size={15} />
            <span>{event.location}</span>
          </div>

          <div className="inline-block underline text-green-900 text-sm  py-1 rounded-full font-semibold ">
            See more
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const Events = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Filtering
  const filtered =
    selectedDepartment === "All"
      ? events
      : events.filter((e) => e.department === selectedDepartment);

  // Pagination
  const eventsPerPage = 6;
  const paginated = filtered.slice(
    (currentPage - 1) * eventsPerPage,
    currentPage * eventsPerPage
  );

  // Reset to page 1 if filter changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedDepartment]);

  return (
    <div className="bg-green-50 min-h-screen pb-10">
      <HeroSection />
      <div className="flex justify-start px-14 mt-8">
        <Filter
          categories={departmentCategory}
          selected={selectedDepartment}
          onSelect={setSelectedDepartment}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-16">
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

      <Callout />
    </div>
  );
};

export default Events;
