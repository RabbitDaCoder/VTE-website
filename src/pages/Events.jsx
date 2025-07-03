import React, { useState } from "react";
import { events, departmentCategory } from "../api/data"; // Adjust the import path as needed.
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import { motion } from "framer-motion";
import useDateFormatter from "../hooks/useDateFormatter";

const HeroSection = () => (
  <div className="relative h-[300px] sm:h-[350px] md:h-[400px] flex items-center justify-center text-white">
    <img
      src="/images/tech1.PNG"
      alt="Hero Background"
      className="absolute inset-0 w-full h-full object-cover z-0"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
    <div className="z-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold">Events</h1>
      <p className="text-lg mt-2">
        Discover exciting upcoming faculty activities
      </p>
    </div>
  </div>
);

const EventCard = ({ event }) => {
  const { day, month, time } = useDateFormatter(event.date);
  const year = new Date(event.date).getFullYear();

  return (
    <motion.div
      className="bg-white shadow-md rounded-xl overflow-hidden transition hover:shadow-xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        {/* Calendar-style Date Badge */}
        <div className="absolute top-3 left-3 bg-white rounded-md px-2 py-[2px] text-center shadow-md text-red-600 leading-tight w-12">
          <div className="text-lg font-bold">{day}</div>
          <div className="text-[10px] uppercase">{month}</div>
        </div>
      </div>

      <div className="p-4">
        <span className="text-xs uppercase text-purple-700 font-semibold">
          {event.department}
        </span>
        <h3 className="text-lg font-semibold mt-1 leading-tight">
          {event.title}
        </h3>
        <p className="text-gray-600 text-sm mt-1">{event.description}</p>
        <p className="text-gray-500 text-xs mt-2">
          🕒 <span className="italic">{time}</span>
        </p>
      </div>
    </motion.div>
  );
};

const Callout = () => (
  <div className="relative h-64 mt-16 flex items-center justify-center text-white rounded-xl overflow-hidden">
    <img
      src="/images/VTE-2025.webp"
      alt="Ad Background"
      className="absolute inset-0 w-full h-full object-cover z-0"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-purple-900/60 z-10" />
    <div className="z-20 text-center">
      <h2 className="text-3xl font-bold mb-2">
        🎉 Upcoming Faculty Conference!
      </h2>
      <p className="mb-4">Be part of the innovation this semester.</p>
      <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-100">
        Register Now
      </button>
    </div>
  </div>
);

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
    <div className="bg-gray-50">
      <HeroSection />
      <div className="flex justify-center mt-8">
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
