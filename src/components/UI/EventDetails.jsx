import React from "react";
import { useParams, Link } from "react-router-dom";
import { events } from "../../api/data";
import { LuCalendar, LuClock, LuMapPin, LuUsers } from "react-icons/lu";
import HelmetSEO from "../HelmetSEO";

const EventDetails = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === parseInt(id));

  if (!event) return <div className="text-center py-20">Event not found.</div>;

  return (
    <>
      <HelmetSEO page="eventDetail" event={event} />
      <div className="max-w-5xl mx-auto py-16 px-4">
        <Link
          to="/events"
          className="text-green-600 hover:underline mb-4 inline-block"
        >
          &larr; Back to Events
        </Link>

        <div className="bg-white rounded-2xl shadow-xl border border-green-100 overflow-hidden mb-10">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <h1 className="text-3xl font-bold text-green-700 mb-2">
              {event.title}
            </h1>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-gray-600">
                <LuCalendar className="mr-2" />
                {new Date(event.date).toLocaleDateString()}
              </div>
              <div className="flex items-center text-gray-600">
                <LuClock className="mr-2" />
                {event.time}
              </div>
              <div className="flex items-center text-gray-600">
                <LuMapPin className="mr-2" />
                {event.location}
              </div>
              <div className="flex items-center text-gray-600">
                <LuUsers className="mr-2" />
                {event.department}
              </div>
            </div>
            <div className="prose max-w-none">
              <p className="text-gray-700">{event.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
