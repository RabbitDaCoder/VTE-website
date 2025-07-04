// VTE Faculty Notice Board Updated UI
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bannerImg from "../assets/images/hero-bg.jpg";
import { departments, downloads, allNotices, pinnedNotices } from "../api/data";
import Pagination from "../components/Pagination";
import Filter from "../components/Filter";
import {
  LuMegaphone,
  LuPin,
  LuBuilding2,
  LuDownload,
  LuCalendarDays,
  LuArrowRight,
} from "react-icons/lu";
import DeansSection from "../components/DeansSection";
import Callout from "../components/Callout";
import Events from "../components/Events";
import HelmetSEO from "../components/HelmetSEO.jsx";

// Example departments for filter (ensure your department names match those in your notices)
const departmentOptions = ["All", ...departments.map((d) => d.name)];

const NOTICES_PER_PAGE = 6; // Increased from 4 to show more notices
const DOWNLOADS_PER_PAGE = 4;

const Notice = () => {
  const [page, setPage] = useState(1);
  const [selectedDept, setSelectedDept] = useState("All");
  const [downloadsPage, setDownloadsPage] = useState(1);

  // Filter notices by department
  const filteredNotices =
    selectedDept === "All"
      ? allNotices.slice(1) // exclude pinned
      : allNotices.slice(1).filter((n) => n.department === selectedDept);

  const paginated = filteredNotices.slice(
    (page - 1) * NOTICES_PER_PAGE,
    page * NOTICES_PER_PAGE
  );

  // Downloads pagination
  const downloadsTotalPages = Math.ceil(downloads.length / DOWNLOADS_PER_PAGE);
  const paginatedDownloads = downloads.slice(
    (downloadsPage - 1) * DOWNLOADS_PER_PAGE,
    downloadsPage * DOWNLOADS_PER_PAGE
  );

  // Reset to page 1 if filter changes
  useEffect(() => {
    setPage(1);
  }, [selectedDept]);

  return (
    <main className="space-y-12 bg-gradient-to-br from-green-50 via-white to-green-100 pb-12">
      <HelmetSEO page="notices" />
      {/* Hero Section - Simplified */}
      <section
        className="relative text-white h-[300px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold mb-2">Faculty Notice Board</h1>
          <p className="mt-2">
            Stay informed with the latest updates and announcements
          </p>
        </div>
      </section>

      {/* Pinned Notice Banner - Enhanced */}
      <section className="px-4">
        <div className="relative h-auto md:h-[380px] bg-gradient-to-r from-green-100 via-green-50 to-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row items-stretch border border-green-200">
          <div className="absolute left-6 top-6 text-green-600 text-3xl z-20">
            <LuPin className="animate-bounce" />
          </div>
          <img
            src={pinnedNotices[0].image}
            alt="Pinned"
            className="w-full md:w-1/2 h-[200px] md:h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
          />
          <div className="p-8 flex-1 flex flex-col justify-center relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <LuMegaphone className="text-green-700" />
              <span className="uppercase text-xs font-bold text-green-700 tracking-wider">
                Pinned Notice
              </span>
            </div>
            <h2 className="text-2xl font-extrabold mb-2 text-green-900">
              {pinnedNotices[0].title}
            </h2>
            <p className="text-gray-700 mb-4">{pinnedNotices[0].content}</p>
            <div className="flex items-center gap-2 text-sm text-green-700 mb-4">
              <LuBuilding2 />
              <span>{pinnedNotices[0].department || "All Departments"}</span>
              <span className="ml-4 text-gray-500">
                {pinnedNotices[0].date}
              </span>
            </div>
            <Link
              to={`/notice/${pinnedNotices[0].id}`}
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-semibold shadow transition flex items-center justify-center gap-2 w-fit"
            >
              View Details <LuArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Notice Feed - Improved */}
      <section className="px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <h2 className="text-2xl font-bold text-green-800">Notice Feeds</h2>
          <Filter
            categories={departmentOptions}
            selected={selectedDept}
            onSelect={setSelectedDept}
          />
        </div>
        {filteredNotices.length === 0 ? (
          <div className="text-center text-gray-500 py-12 bg-white rounded-xl shadow">
            <LuMegaphone className="mx-auto text-4xl text-gray-300 mb-2" />
            <p className="text-lg">No notices found for this department.</p>
            <button
              onClick={() => setSelectedDept("All")}
              className="mt-4 text-green-600 hover:text-green-800"
            >
              View all notices
            </button>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginated.map((n) => (
                <Link
                  to={`/notice/${n.id}`}
                  key={n.id + n.title}
                  className="bg-white border border-green-100 rounded-xl shadow hover:shadow-md hover:border-green-300 transition p-6 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg text-green-900">
                        {n.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 mb-3 text-xs text-green-700">
                      <LuCalendarDays className="text-green-600" />
                      <span>{n.date}</span>
                      <span className="mx-1">•</span>
                      <LuBuilding2 className="text-green-600" />
                      <span>{n.department || "All Departments"}</span>
                    </div>
                    <p className="text-sm text-gray-700 line-clamp-3">
                      {n.summary || n.content.substring(0, 120) + "..."}
                    </p>
                  </div>
                  <div className="mt-4 text-green-600 hover:text-green-800 text-sm font-medium flex items-center">
                    Read more <LuArrowRight className="ml-1" size={14} />
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Pagination
                currentPage={page}
                totalPosts={filteredNotices.length}
                postsPerPage={NOTICES_PER_PAGE}
                onPageChange={setPage}
              />
            </div>
          </>
        )}
      </section>

      {/* Dean’s Corner */}
      <DeansSection />

      {/* Special Highlight */}
      <Callout />

      {/* Downloads - Improved */}
      <section className="px-4 pt-4">
        <h2 className="text-2xl font-bold mb-6 text-green-800">
          Downloads & Resources
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {paginatedDownloads.map((d) => (
            <div
              key={d.name}
              className="bg-gradient-to-br from-green-50 via-white to-green-100 border border-green-200 rounded-xl shadow flex items-center justify-between p-6 hover:shadow-lg transition"
            >
              <div>
                <h4 className="font-bold text-green-800 text-lg flex items-center gap-2">
                  <LuDownload className="text-green-600" /> {d.name}
                </h4>
                <p className="text-xs text-gray-600 mt-1">
                  {d.desc}{" "}
                  <span className="ml-2 text-green-700 font-semibold">
                    ({d.size})
                  </span>
                </p>
              </div>
              <button className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full font-semibold shadow transition text-sm">
                <LuDownload className="text-lg" />
                Download
              </button>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Pagination
            currentPage={downloadsPage}
            totalPosts={downloads.length}
            postsPerPage={DOWNLOADS_PER_PAGE}
            onPageChange={setDownloadsPage}
          />
        </div>
      </section>

      {/* Events */}
      <Events />
    </main>
  );
};

export default Notice;
