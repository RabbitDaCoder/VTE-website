import React from "react";
import { events } from "../api/data";
import useDateFormatter from "../hooks/useDateFormatter";
import { Link } from "react-router-dom";

const Events = () => {
  // Get the date formatter function from the hook
  const formatDate = useDateFormatter;

  // Format all event dates once at the top level
  const formattedEvents = events.map((event) => {
    const { day, month, time } = formatDate(event.date);
    return { ...event, day, month, time };
  });

  return (
    <section className="py-16 px-4 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold mb-2 text-green-800">
          Upcoming Events
        </h2>
        <p className="text-green-700 max-w-2xl mx-auto">
          Stay updated with our latest events and happenings.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {formattedEvents.slice(0, 3).map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-2xl overflow-hidden shadow border border-green-100"
          >
            {/* Event Image */}
            <div className="relative h-40 w-full">
              <img
                src={event.image}
                alt={event.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute -bottom-4 right-2 bg-white px-2 py-1 rounded shadow-lg text-center text-sm font-bold text-red-600">
                <div>{event.day}</div>
                <div>{event.month}</div>
              </div>
            </div>

            {/* Event Info */}
            <div className="p-4 flex flex-col gap-2">
              <p className="text-sm text-green-700 font-medium">
                {event.description}
              </p>
              <h3 className="text-md font-bold text-green-800 leading-snug">
                {event.title}
              </h3>
              <span className="text-sm text-green-600">{event.time}</span>

              <Link
                to={`/events/${event.id}`}
                className="mt-3 text-sm text-green-600 font-semibold hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
