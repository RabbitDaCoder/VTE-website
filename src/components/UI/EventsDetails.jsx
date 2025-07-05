import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { events } from "../../api/data";
import {
  LuCalendar,
  LuUser,
  LuShare2,
  LuMapPin,
  LuClock,
  LuDownload,
  LuLink,
  LuArrowLeft,
  LuCalendarDays,
  LuTag,
  LuInfo,
} from "react-icons/lu";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import HelmetSEO from "../HelmetSEO";
import { motion } from "framer-motion";
import useDateFormatter from "../../hooks/useDateFormatter";

const EventsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find((event) => event.id === parseInt(id));

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-4">
        <div className="text-center py-10 px-6 bg-white rounded-xl shadow-md max-w-md">
          <LuInfo className="text-5xl text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-red-600 mb-2">
            Event Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The event you're looking for doesn't exist or has been removed.
          </p>
          <button
            onClick={() => navigate("/events")}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full shadow-md transition-colors"
          >
            Back to Events
          </button>
        </div>
      </div>
    );
  }

  const { day, month, year, time, fullDate } = useDateFormatter(event.date);

  // Get related events (excluding current one, preferably from same department)
  const relatedEvents = events
    .filter((e) => e.id !== event.id && e.department === event.department)
    .sort((a, b) => new Date(a.date) - new Date(b.date)) // Sort by date (earlier first)
    .slice(0, 3);

  // Share functionality
  const shareUrl = window.location.href;
  const shareTitle = `Check out this event: ${event.title}`;

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      "_blank"
    );
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        shareUrl
      )}&text=${encodeURIComponent(shareTitle)}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
      "_blank"
    );
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    alert("Link copied to clipboard!");
  };

  return (
    <>
      <HelmetSEO page="eventDetail" event={event} />
      <div className="w-full min-h-screen bg-green-50 pb-16">
        {/* Back button */}
        <div className="max-w-7xl mx-auto pt-6 px-4">
          <Link
            to="/events"
            className="inline-flex items-center text-green-700 hover:text-green-800 font-medium"
          >
            <LuArrowLeft className="mr-2" /> Back to Events
          </Link>
        </div>

        {/* Hero section with event image and title */}
        <div className="w-full bg-white shadow-sm mt-4">
          <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <motion.h1
                  className="text-3xl md:text-4xl font-extrabold text-green-800 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {event.title}
                </motion.h1>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                  <span className="flex items-center gap-1">
                    <LuCalendarDays className="text-green-600" /> {fullDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <LuClock className="text-green-600" /> {time}
                  </span>
                  <span className="flex items-center gap-1">
                    <LuMapPin className="text-green-600" /> {event.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <LuTag className="text-green-600" /> {event.department}
                  </span>
                </div>

                <motion.div
                  className="prose prose-green max-w-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {event.content || event.description}
                  </p>

                  {event.agenda && (
                    <div className="mt-8">
                      <h3 className="text-xl font-bold text-green-800 mb-3">
                        Event Agenda
                      </h3>
                      <ul className="list-disc pl-5 space-y-2">
                        {event.agenda.map((item, index) => (
                          <li key={index} className="text-gray-700">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {event.speakers && (
                    <div className="mt-8">
                      <h3 className="text-xl font-bold text-green-800 mb-3">
                        Featured Speakers
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {event.speakers.map((speaker, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                          >
                            {speaker.image && (
                              <img
                                src={speaker.image}
                                alt={speaker.name}
                                className="w-12 h-12 rounded-full object-cover"
                              />
                            )}
                            <div>
                              <h4 className="font-semibold text-green-800">
                                {speaker.name}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {speaker.title}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>

              <div className="md:w-1/3">
                <motion.div
                  className="sticky top-24"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 object-cover rounded-xl shadow-md mb-6"
                  />

                  {/* Calendar-style Date Badge */}
                  <div className="bg-white rounded-xl shadow-md p-4 mb-6 flex items-center justify-center">
                    <div className="text-center mr-4">
                      <div className="bg-red-50 border border-red-100 rounded-lg px-4 py-2 text-center">
                        <div className="text-3xl font-bold text-red-600">
                          {day}
                        </div>
                        <div className="text-sm uppercase font-medium text-red-500">
                          {month}
                        </div>
                        <div className="text-xs text-gray-500">{year}</div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Event Date
                      </h3>
                      <p className="text-sm text-gray-600">{fullDate}</p>
                      <p className="text-sm text-gray-600">{time}</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="bg-white rounded-xl shadow-md p-4 mb-6">
                    <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <LuMapPin className="mr-2 text-green-600" /> Location
                    </h3>
                    <p className="text-gray-700">{event.location}</p>
                    {event.locationDetails && (
                      <p className="text-sm text-gray-600 mt-1">
                        {event.locationDetails}
                      </p>
                    )}
                  </div>

                  {/* Share */}
                  <div className="bg-white rounded-xl shadow-md p-4 mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <LuShare2 className="mr-2 text-green-600" /> Share This
                      Event
                    </h3>
                    <div className="flex gap-2">
                      <button
                        onClick={shareOnFacebook}
                        className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                        aria-label="Share on Facebook"
                      >
                        <FaFacebookF />
                      </button>
                      <button
                        onClick={shareOnTwitter}
                        className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition-colors"
                        aria-label="Share on Twitter"
                      >
                        <FaTwitter />
                      </button>
                      <button
                        onClick={shareOnLinkedIn}
                        className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition-colors"
                        aria-label="Share on LinkedIn"
                      >
                        <FaLinkedinIn />
                      </button>
                      <button
                        onClick={copyToClipboard}
                        className="bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300 transition-colors flex-grow text-center text-sm font-medium"
                      >
                        Copy Link
                      </button>
                    </div>
                  </div>

                  {/* Registration or RSVP if applicable */}
                  {event.registration && (
                    <div className="bg-green-600 rounded-xl shadow-md p-4 text-center">
                      <h3 className="font-semibold text-white mb-2">
                        Interested in this event?
                      </h3>
                      <a
                        href={event.registration}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-green-600 font-medium px-6 py-2 rounded-full hover:bg-green-50 transition-colors"
                      >
                        Register Now
                      </a>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Related events */}
        <div className="max-w-7xl mx-auto px-4 mt-16">
          <h2 className="text-2xl font-bold text-green-800 mb-6">
            Related Events
          </h2>

          {relatedEvents.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-3">
              {relatedEvents.map((related) => {
                const { day, month } = useDateFormatter(related.date);

                return (
                  <Link
                    key={related.id}
                    to={`/events/${related.id}`}
                    className="bg-white border border-green-100 rounded-xl overflow-hidden shadow hover:shadow-md transition flex flex-col h-full"
                  >
                    <div className="relative">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="h-40 object-cover w-full"
                      />
                      {/* Calendar-style Date Badge */}
                      <div className="absolute top-3 left-3 bg-white rounded-md px-2 text-center shadow-md text-red-600 leading-tight w-12">
                        <div className="text-lg font-bold">{day}</div>
                        <div className="text-[10px] uppercase">{month}</div>
                      </div>
                    </div>
                    <div className="p-4 flex-grow">
                      <span className="text-xs capitalize text-green-800 font-semibold">
                        {related.department}
                      </span>
                      <h4 className="text-lg font-bold mt-1 leading-tight text-green-900">
                        {related.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                        {related.description}
                      </p>
                    </div>
                    <div className="px-4 pb-4">
                      <div className="text-green-700 text-sm font-medium hover:text-green-800">
                        View details →
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <p className="text-gray-600">
                No related events found for this department.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EventsDetails;
