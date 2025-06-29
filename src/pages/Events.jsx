import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const departments = [
  "All",
  "Computer Science",
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biological Sciences",
];

const allEvents = [
  {
    title: "Tech Symposium 2025",
    department: "Computer Science",
    date: "2025-08-02",
    image: "/images/tech1.PNG",
    description: "A gathering of minds in tech.",
    time: "10:00 AM",
  },
  {
    title: "AI & Robotics Expo",
    department: "Computer Science",
    date: "2025-10-15",
    image: "/images/tech2.PNG",
    description: "Exploring future technologies and AI innovations.",
    time: "2:00 PM",
  },
  {
    title: "Math Carnival",
    department: "Mathematics",
    date: "2025-09-12",
    image: "/images/math1.PNG",
    description: "A celebration of numbers and formulas.",
    time: "11:00 AM",
  },
  {
    title: "Statistics & Probability Workshop",
    department: "Mathematics",
    date: "2025-11-05",
    image: "/images/math2.PNG",
    description: "Hands-on learning for data and chance lovers.",
    time: "1:30 PM",
  },
  {
    title: "Physics in Everyday Life",
    department: "Physics",
    date: "2025-07-20",
    image: "/images/physics1.PNG",
    description: "Discover how physics powers our world.",
    time: "9:00 AM",
  },
  {
    title: "Astrophysics Lecture Series",
    department: "Physics",
    date: "2025-10-01",
    image: "/images/physics2.PNG",
    description: "Dive into space, time, and celestial bodies.",
    time: "3:00 PM",
  },
  {
    title: "ChemFest 2025",
    department: "Chemistry",
    date: "2025-09-22",
    image: "/images/chem1.PNG",
    description: "Chemistry exhibition and interactive sessions.",
    time: "12:00 PM",
  },
  {
    title: "Organic Chemistry Bootcamp",
    department: "Chemistry",
    date: "2025-11-10",
    image: "/images/chem2.PNG",
    description: "Get ready to master organic reactions.",
    time: "4:00 PM",
  },
  {
    title: "BioCon 2025",
    department: "Biological Sciences",
    date: "2025-08-18",
    image: "/images/bio1.PNG",
    description: "Conference on biological advances and research.",
    time: "10:30 AM",
  },
  {
    title: "Genetics for the Future",
    department: "Biological Sciences",
    date: "2025-12-03",
    image: "/images/bio2.PNG",
    description: "Explore the future of genes and medicine.",
    time: "1:00 PM",
  },
  // Add more dummy events here
];

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

const Filter = ({ selected, onChange }) => (
  <div className="my-8 px-6 md:px-16">
    <select
      className="px-4 py-2 border rounded-lg shadow-md"
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
  const month = eventDate.toLocaleDateString("en-US", { month: "short" });
  const year = eventDate.getFullYear();

  return (
    <div
      className="bg-white shadow-md rounded-xl overflow-hidden transition hover:shadow-xl"
      data-aos="fade-up"
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
          <div className="text-[9px] text-gray-600">{year}</div>
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
          🕒 <span className="italic">{event.time}</span>
        </p>
      </div>
    </div>
  );
};


const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center mt-10 space-x-2">
    {[...Array(totalPages)].map((_, i) => (
      <button
        key={i}
        onClick={() => {
          onPageChange(i + 1);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className={`px-4 py-2 rounded-full ${
          currentPage === i + 1
            ? "bg-purple-700 text-white"
            : "bg-gray-200 text-gray-800"
        }`}
      >
        {i + 1}
      </button>
    ))}
  </div>
);

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

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const filtered =
    selectedDepartment === "All"
      ? allEvents
      : allEvents.filter((e) => e.department === selectedDepartment);

  const eventsPerPage = 6;
  const totalPages = Math.ceil(filtered.length / eventsPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * eventsPerPage,
    currentPage * eventsPerPage
  );

  return (
    <div className="bg-gray-50">
      <HeroSection />
      <Filter selected={selectedDepartment} onChange={setSelectedDepartment} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-16">
        {paginated.map((event, idx) => (
          <EventCard key={idx} event={event} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <Callout />
    </div>
  );
};

export default Events;
