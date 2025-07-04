import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  itemFadeIn,
  scaleIn,
} from "../utils/AnimationVariants.js";
import { events } from "../api/data";
import {
  LuArrowRight,
  LuCalendarDays,
  LuMapPin,
  LuClock,
} from "react-icons/lu";
import useDateFormatter from "../hooks/useDateFormatter";

const Events = () => {
  const [visibleEvents, setVisibleEvents] = useState(3);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const eventsRef = useRef(null);
  const eventsInView = useInView(eventsRef, { once: true, threshold: 0.1 });

  useEffect(() => {
    console.log("Setting test events:", events);
    setUpcomingEvents(events);
  }, []);

  const displayedEvents = upcomingEvents.slice(0, visibleEvents);

  const loadMore = () => {
    setVisibleEvents((prev) => Math.min(prev + 3, upcomingEvents.length));
  };

  return (
    <motion.section
      ref={eventsRef}
      className="py-16 px-4 bg-white"
      initial="hidden"
      animate={eventsInView ? "visible" : "hidden"}
      variants={fadeInUp}
    >
      {/* Section header */}
      <motion.div className="text-center mb-10" variants={fadeInUp}>
        <motion.span
          className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4"
          variants={fadeInUp}
        >
          Mark Your Calendar
        </motion.span>
        <motion.h2
          className="text-4xl font-extrabold mb-2 text-green-800"
          variants={fadeInUp}
        >
          Upcoming Events
        </motion.h2>
        <motion.p
          className="text-green-700 max-w-2xl mx-auto"
          variants={fadeInUp}
        >
          Stay updated with our latest events and activities across the faculty.
        </motion.p>
      </motion.div>

      {/* Display events or no events message */}
      {upcomingEvents.length === 0 ? (
        <div className="text-center py-10 bg-green-50 rounded-xl max-w-2xl mx-auto">
          <p className="text-gray-600">
            No upcoming events at the moment. Check back soon!
          </p>
        </div>
      ) : (
        <>
          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
            variants={staggerContainer}
          >
            {displayedEvents.map((event) => {
              const { day, month, time } = useDateFormatter(event.date);

              return (
                <motion.div
                  key={event.id}
                  variants={itemFadeIn}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <Link
                    to={`/events/${event.id}`}
                    className="group relative transition-shadow duration-300"
                  >
                    <div className="shadow-md rounded-xl overflow-hidden transition hover:shadow-xl py-2 bg-green-50 flex flex-col gap-2 h-full">
                      <div className="relative">
                        <motion.img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-48 object-cover rounded-md"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                        {/* Calendar-style Date Badge */}
                        <div className="absolute top-3 left-3 bg-white rounded-md px-2 text-center shadow-md text-red-600 leading-tight w-12">
                          <div className="text-lg font-bold">{day}</div>
                          <div className="text-[10px] uppercase">{month}</div>
                        </div>
                      </div>
                      <div className="px-4 flex flex-col flex-grow">
                        <span className="text-xs capitalize text-green-800 font-semibold">
                          {event.department}
                        </span>
                        <h3 className="text-lg font-bold mt-1 leading-tight text-green-900">
                          {event.title}
                        </h3>
                        <p className="text-gray-700 text-sm mt-1 line-clamp-2">
                          {event.description}
                        </p>
                        <div className="mt-auto pt-3 flex flex-wrap gap-3 text-xs text-gray-600">
                          <div className="flex items-center gap-1">
                            <LuClock className="text-green-600" /> {time}
                          </div>
                          <div className="flex items-center gap-1">
                            <LuMapPin className="text-green-600" />{" "}
                            {event.location}
                          </div>
                        </div>
                      </div>
                      <div className="px-4 pb-3">
                        <div className="flex justify-between items-center">
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            {event.department}
                          </span>
                          <motion.span
                            className="text-green-700 flex items-center gap-1 group-hover:text-green-900"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <LuArrowRight className="group-hover:translate-x-1 transition-transform" />
                          </motion.span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {visibleEvents < upcomingEvents.length && (
            <motion.div
              className="flex justify-center mt-10"
              variants={scaleIn}
            >
              <motion.button
                onClick={loadMore}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full shadow-md transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Load More Events
              </motion.button>
            </motion.div>
          )}

          <motion.div className="flex justify-center mt-10" variants={scaleIn}>
            <Link
              to="/events"
              className="inline-flex items-center text-green-700 hover:text-green-800 font-medium group"
            >
              View All Events
              <LuArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </>
      )}
    </motion.section>
  );
};

export default Events;
