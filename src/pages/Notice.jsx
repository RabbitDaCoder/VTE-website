import React, { useState } from "react";

// Dummy data for notices, pinned, downloads, and events
const pinnedNotices = [
  {
    id: 1,
    title: "Registration closes July 10th",
    date: "2025-07-01",
    category: "Urgent",
    summary: "All students must complete registration before July 10th.",
  },
  {
    id: 2,
    title: "Faculty Orientation on July 15th",
    date: "2025-07-05",
    category: "General",
    summary: "New students are invited to the orientation program.",
  },
];

const allNotices = [
  ...pinnedNotices,
  {
    id: 3,
    title: "2025 1st Semester Exams Timetable Released",
    date: "2025-06-20",
    category: "Academic",
    summary: "All 100–400 level students can now view the timetable.",
  },
  {
    id: 4,
    title: "Exam Guidelines PDF Available",
    date: "2025-06-18",
    category: "Academic",
    summary: "Download the latest exam guidelines for all students.",
  },
  {
    id: 5,
    title: "Holiday Notice",
    date: "2025-06-15",
    category: "General",
    summary: "The faculty will be closed for public holiday on June 25th.",
  },
  {
    id: 6,
    title: "Lab Safety Training",
    date: "2025-06-10",
    category: "Training",
    summary: "Mandatory safety training for all science students.",
  },
  {
    id: 7,
    title: "Result Collection",
    date: "2025-06-05",
    category: "Academic",
    summary: "Final year students can collect results from the office.",
  },
  {
    id: 8,
    title: "Library Renovation",
    date: "2025-06-01",
    category: "General",
    summary: "Library will be closed for renovation from June 10th.",
  },
];

const downloads = [
  {
    name: "First Semester Timetable",
    url: "#",
    size: "120KB",
    desc: "PDF of the full semester timetable.",
    icon: "🗂️",
  },
  {
    name: "Exam Guidelines",
    url: "#",
    size: "80KB",
    desc: "Important rules for all students.",
    icon: "📄",
  },
];

const dean = {
  name: "Prof. Jane Doe",
  img: "https://randomuser.me/api/portraits/women/44.jpg",
  message:
    "Welcome to the Faculty of VTE. We are committed to excellence and student success. Stay informed and reach out with any questions.",
};

const highlight = {
  title: "🎓 Career Opportunity from Alumni – Apply Now",
  desc: "Our alumni network is offering internship opportunities for current students. Don’t miss out!",
  cta: "Apply Now",
  url: "#",
};

const eventBanner = {
  title: "🎤 Career Talk by Alumni on July 30",
  desc: "Join us for an inspiring session with successful alumni. Open to all students.",
  cta: "Register",
  url: "#",
};

const NOTICES_PER_PAGE = 6;

const Notice = () => {
  const [page, setPage] = useState(1);
  const noticesToShow = allNotices.slice(pinnedNotices.length);
  const totalPages = Math.ceil(noticesToShow.length / NOTICES_PER_PAGE);
  const paginated = noticesToShow.slice(
    (page - 1) * NOTICES_PER_PAGE,
    page * NOTICES_PER_PAGE
  );

  return (
    <main className="max-w-2xl mx-auto px-2 py-6 space-y-8">
      {/* Hero Section */}
      <section className="text-center py-6 bg-blue-50 rounded-lg shadow">
        <h1 className="text-4xl font-semibold mb-1">Faculty Notice Board</h1>
        <p className="text-gray-600">Stay informed with the latest updates</p>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Pinned / Important Notices */}
      <section>
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <span role="img" aria-label="pin">📌</span>
          Important Notices
        </h2>
        <div className="space-y-3">
          {pinnedNotices.map((n) => (
            <div
              key={n.id}
              className="border-l-4 border-yellow-400 bg-yellow-50 p-3 rounded shadow"
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold">{n.title}</span>
                <span className="text-xs bg-yellow-200 px-2 py-0.5 rounded">{n.category}</span>
              </div>
              <span className="text-xs text-gray-500">{n.date}</span>
              <p className="text-gray-700 text-sm">{n.summary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Notice Feeds */}
      <section>
        <h2 className="text-xl font-bold mb-3">Notice Feeds</h2>
        <div className="space-y-3">
          {paginated.map((n) => (
            <div
              key={n.id}
              className="bg-white rounded shadow p-3 border hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center">
                <a href="#" className="font-semibold text-blue-700 hover:underline">{n.title}</a>
                <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">{n.category}</span>
              </div>
              <span className="text-xs text-gray-500">{n.date}</span>
              <p className="text-gray-700 text-sm">{n.summary}</p>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-3">
          <button
            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >Prev</button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`px-3 py-1 rounded ${page === i + 1 ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-gray-200"}`}
              onClick={() => setPage(i + 1)}
            >{i + 1}</button>
          ))}
          <button
            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >Next</button>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Dean's Corner */}
      <section>
        <h2 className="text-xl font-bold mb-3">Dean’s Corner</h2>
        <div className="bg-blue-100 rounded-lg p-4 flex flex-col md:flex-row items-center gap-4">
          <img
            src={dean.img}
            alt="Dean"
            className="w-20 h-20 rounded-full object-cover border-4 border-blue-300"
          />
          <div>
            <blockquote className="italic text-gray-700 flex items-start gap-2">
              <span className="text-2xl text-blue-400">“</span>
              {dean.message}
            </blockquote>
            <div className="mt-2 text-sm text-gray-600 font-semibold">— {dean.name}</div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Ads / Special Highlight / Callout */}
      <section>
        <h2 className="text-xl font-bold mb-3">Special Highlight</h2>
        <a
          href={highlight.url}
          className="block bg-gradient-to-r from-yellow-300 to-orange-400 rounded-lg p-4 text-center shadow-lg hover:scale-105 transition"
        >
          <div className="text-lg font-bold mb-1">{highlight.title}</div>
          <div className="mb-1">{highlight.desc}</div>
          <span className="inline-block mt-2 bg-white text-orange-600 font-semibold px-4 py-2 rounded shadow">{highlight.cta}</span>
        </a>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Downloads / Resources */}
      <section>
        <h2 className="text-xl font-bold mb-3">Downloads & Resources</h2>
        <div className="space-y-3">
          {downloads.map((d) => (
            <a
              key={d.name}
              href={d.url}
              className="flex items-center gap-3 bg-gray-50 p-3 rounded shadow hover:bg-blue-50 transition"
              download
            >
              <span className="text-2xl">{d.icon}</span>
              <div>
                <div className="font-semibold">{d.name}</div>
                <div className="text-xs text-gray-500">{d.desc}</div>
                <div className="text-xs text-gray-400">{d.size}</div>
              </div>
              <span className="ml-auto text-blue-600 font-bold">Download</span>
            </a>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Events Banner */}
      <section>
        <h2 className="text-xl font-bold mb-3">Events</h2>
        <a
          href={eventBanner.url}
          className="block bg-blue-600 text-white rounded-lg p-4 text-center shadow-lg hover:bg-blue-700 transition"
        >
          <div className="text-lg font-bold mb-1">{eventBanner.title}</div>
          <div className="mb-1">{eventBanner.desc}</div>
          <span className="inline-block mt-2 bg-white text-blue-700 font-semibold px-4 py-2 rounded shadow">{eventBanner.cta}</span>
        </a>
      </section>
    </main>
  );
};

export default Notice;

// // for Team member:
// // akachukwu the wire frame will be in assets/wireframe/notice folder
// // use to to see what is required in the about page
// // for the content:
// // use dummy text or lorem ipsum text to fill the content for now
// // flow and features: on assets/documentation/notice folder
