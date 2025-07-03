<<<<<<< HEAD
import React, { useState } from "react";
import { events, departmentCategory } from "../api/data"; // Adjust the import path as needed.
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import { motion } from "framer-motion";
import useDateFormatter from "../hooks/useDateFormatter";
=======
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CalendarDays, MapPin } from "lucide-react"; // location and calendar icons

const departments = [
  "All",
  "Computer and Robotics Education",
  "Industrial and Technical Education",
  "Agricultural Education",
  "Home Economics and Hospitality Management Education",
  "Business Education",
];

const allEvents = [
  {
    title: "Tech Symposium 2025",
    department: "Computer and Robotics Education",
    date: "2025-08-02",
    image: "/images/tech1.PNG",
    description:
      "A gathering of innovators exploring the latest in computer and robotics education.",
    time: "10:00 AM",
    location: "VTE Auditorium, UNN",
  },
  {
    title: "AI & Robotics Expo",
    department: "Computer and Robotics Education",
    date: "2025-10-15",
    image: "/images/tech2.PNG",
    description:
      "Showcase of AI projects, autonomous systems, and robotics demos.",
    time: "2:00 PM",
    location: "Faculty of VTE Hall, UNN",
  },
  {
    title: "Technical Skills Fair",
    department: "Industrial and Technical Education",
    date: "2025-09-18",
    image: "/images/ite1.PNG",
    description:
      "Hands-on sessions in carpentry, welding, electronics, and more.",
    time: "9:00 AM",
    location: "Engineering Workshop Complex, UNN",
  },
  {
    title: "Innovation in Industrial Education",
    department: "Industrial and Technical Education",
    date: "2025-11-05",
    image: "/images/ite2.PNG",
    description:
      "Exploring best practices and curriculum modernization for technical education.",
    time: "1:30 PM",
    location: "VTE Conference Room, UNN",
  },
  {
    title: "AgriTech Conference 2025",
    department: "Agricultural Education",
    date: "2025-07-20",
    image: "/images/agric1.PNG",
    description:
      "Exploring the fusion of agriculture and technology for sustainable farming.",
    time: "9:00 AM",
    location: "Faculty Farm Centre, UNN",
  },
  {
    title: "Green Skills Bootcamp",
    department: "Agricultural Education",
    date: "2025-10-08",
    image: "/images/agric2.PNG",
    description:
      "Hands-on training on sustainable farming practices, agribusiness, and eco-entrepreneurship.",
    time: "10:00 AM",
    location: "VTE Demonstration Farm, UNN",
  },
  {
    title: "Sustainable Food & Nutrition Workshop",
    department: "Home Economics and Hospitality Management Education",
    date: "2025-09-22",
    image: "/images/hec1.PNG",
    description:
      "Hands-on learning about food sustainability, safety, and local cuisine innovation.",
    time: "12:00 PM",
    location: "Home Economics Lab, UNN",
  },
  {
    title: "Hospitality Innovation Expo",
    department: "Home Economics and Hospitality Management Education",
    date: "2025-11-10",
    image: "/images/hec2.PNG",
    description:
      "Showcasing service excellence, interior design, and catering science.",
    time: "4:00 PM",
    location: "Hospitality Demo Centre, UNN",
  },
  {
    title: "Business and Entrepreneurship Forum",
    department: "Business Education",
    date: "2025-08-18",
    image: "/images/bed1.PNG",
    description:
      "Training and panel discussions on digital entrepreneurship and vocational business skills.",
    time: "10:30 AM",
    location: "Entrepreneurship Hub, UNN",
  },
  {
    title: "Vocational Finance Masterclass",
    department: "Business Education",
    date: "2025-12-03",
    image: "/images/bed2.PNG",
    description:
      "Learn financial literacy tailored for vocational education students.",
    time: "1:00 PM",
    location: "Business Ed. Resource Centre, UNN",
  },
  // Add more dummy events here
];
>>>>>>> origin/anointing-branch

const HeroSection = () => (
  <div className="relative h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center text-white rounded-b-3xl shadow-lg overflow-hidden">
    <img
      src="/images/matric.JPG"
      alt="Hero Background"
      className="absolute inset-0 w-full h-full object-cover z-0"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 via-green-800/50 to-green-700/40 backdrop-blur-[2px] z-10" />
    <div className="relative z-20 text-center px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide drop-shadow-lg">
        Faculty Events
      </h1>
      <p className="text-sm sm:text-base md:text-lg mt-3 max-w-xl mx-auto drop-shadow-sm">
        Explore upcoming activities, symposiums, and student-led initiatives
        across the Faculty of Vocational & Technical Education
      </p>
    </div>
  </div>
);

<<<<<<< HEAD
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
=======
const Filter = ({ selected, onChange }) => (
  <div className="my-8 px-6 md:px-16">
    <select
      className="px-2 py-0.5 border-2 border-green-600 rounded-lg shadow-md bg-green-100 text-green-900 font-semibold"
      value={selected}
      onChange={(e) => onChange(e.target.value)}
    >
      {departments.map((dept) => (
        <option key={dept}>{dept}</option>
      ))}
    </select>
  </div>
);

const EventCard = ({ event }) => {
  const eventDate = new Date(event.date);
  const day = eventDate.getDate();
  const month = eventDate.toLocaleString("default", { month: "short" });
  const year = eventDate.getFullYear();

  return (
    <div
      className="bg-white shadow-lg border-t-[1px] border-l-[1px] border-b-[3px] border-r-[3px] border-green-500 rounded-xl overflow-hidden transition duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-[0_8px_30px_rgba(34,197,94,0.4)]"
      data-aos="fade-up"
>>>>>>> origin/anointing-branch
    >
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
<<<<<<< HEAD
        {/* Calendar-style Date Badge */}
        <div className="absolute top-3 left-3 bg-white rounded-md px-2 py-[2px] text-center shadow-md text-red-600 leading-tight w-12">
          <div className="text-lg font-bold">{day}</div>
          <div className="text-[10px] uppercase">{month}</div>
=======
        <div className="absolute top-3 left-3 bg-green-800 text-white rounded-md px-2 py-[2px] text-center shadow-md">
          <div className="text-base font-bold leading-none">{day}</div>
          <div className="text-[10px] uppercase tracking-widest">{month}</div>
          <div className="text-[10px]">{year}</div>
>>>>>>> origin/anointing-branch
        </div>
      </div>
      <div className="p-4 bg-green-50">
        <span className="text-xs uppercase text-green-800 font-semibold">
          {event.department}
        </span>
        <h3 className="text-lg font-bold mt-1 leading-tight text-green-900">
          {event.title}
          {new Date(event.date) > new Date() && (
            <span className="text-green-700 text-xs font-semibold bg-green-200 px-2 py-[1px] rounded-full ml-2">
              Upcoming
            </span>
          )}
        </h3>
        <p className="text-gray-700 text-sm mt-1">{event.description}</p>
        <p className="text-gray-500 text-xs mt-2">
          🕒 <span className="italic">{time}</span>
        </p>
        <div className="flex items-center gap-2 mt-4 text-sm text-blue-600 font-medium">
          <MapPin size={15} />
          <span>{event.location}</span>
        </div>
      </div>
    </motion.div>
  );
};

<<<<<<< HEAD
=======
const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center mt-10 space-x-2">
    {[...Array(totalPages)].map((_, i) => (
      <button
        key={i}
        onClick={() => {
          onPageChange(i + 1);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className={`px-4 py-2 rounded-full transition ${
          currentPage === i + 1
            ? "bg-green-600 text-white font-semibold"
            : "bg-green-200 text-green-900"
        }`}
      >
        {i + 1}
      </button>
    ))}
  </div>
);

>>>>>>> origin/anointing-branch
const Callout = () => (
  <div className="relative h-72 md:h-96 mt-20 flex items-center justify-center rounded-2xl overflow-hidden shadow-xl">
    <img
      src="/images/VTE-2025.webp"
      alt="VTE Conference Background"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-green-700/4 to-green-600/50 backdrop-blur-sm" />

    <div className="relative z-10 text-center px-6">
      <h2 className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-md mb-3">
        🎓 VTE Faculty Conference 2025
      </h2>
      <p className="text-white text-sm md:text-lg mb-6 max-w-xl mx-auto">
        Join thought leaders, innovators, and students in reshaping vocational
        and technical education.
      </p>
      <button className="bg-white text-green-800 px-6 py-2 rounded-full font-bold hover:bg-green-100 transition-transform duration-300 hover:scale-105 shadow-md">
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
    <div className="bg-green-50 min-h-screen pb-10">
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
