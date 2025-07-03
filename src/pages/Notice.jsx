// VTE Faculty Notice Board Updated UI
import React, { useEffect, useState } from "react";
import bannerImg from "../assets/images/hero-bg.jpg";
import { departments, downloads, allNotices, pinnedNotices } from "../api/data";
import Pagination from "../components/Pagination";
import Filter from "../components/Filter";
import { LuMegaphone, LuPin, LuBuilding2, LuDownload } from "react-icons/lu";
import DeansSection from "../components/DeansSection";
import Callout from "../components/Callout";
import Events from "../components/Events";

// Example departments for filter (ensure your department names match those in your notices)
const departmentOptions = ["All", ...departments.map((d) => d.name)];

const NOTICES_PER_PAGE = 4;
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
    <main className="space-y-12">
      {/* Hero Section */}
      <section
        className="relative text-white h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold">Learn. Connect. Grow.</h1>
          <p className="mt-2">Faculty of VTE | Powered by Cresa Tech Society</p>
          <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded shadow">
            Explore Resources
          </button>
        </div>
      </section>

      {/* Pinned Notice Banner */}
      <section className="px-4">
        <div className="relative h-[300px] bg-gradient-to-r from-green-100 via-green-50 to-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row items-stretch border border-green-200">
          <div className="absolute left-6 top-6 text-green-600 text-3xl z-20 animate-bounce">
            {/* Use the icon from data */}
            {pinnedNotices[0].icon &&
              React.createElement(pinnedNotices[0].icon)}
          </div>
          <img
            src={pinnedNotices[0].image}
            alt="Pinned"
            className="w-full md:w-1/2 h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
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
            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-semibold shadow transition">
              {pinnedNotices[0].button}
            </button>
          </div>
        </div>
      </section>

      {/* Notice Feed */}
      <section className="px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
          <h2 className="text-xl font-bold">Notice Feeds</h2>
          <Filter
            categories={departmentOptions}
            selected={selectedDept}
            onSelect={setSelectedDept}
          />
        </div>
        {filteredNotices.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            No notices found for this department.
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 gap-6">
              {paginated.map((n) => (
                <div
                  key={n.id + n.title}
                  className="bg-white border border-green-100 rounded-xl shadow hover:ring-2 hover:ring-green-400 transition p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg text-green-900">
                        {n.title}
                      </h3>
                      <span className="text-xs text-gray-500">{n.date}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <LuBuilding2 className="text-green-600" />
                      <span className="text-xs text-green-700 font-medium">
                        {n.department || "All Departments"}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700">{n.summary}</p>
                  </div>
                </div>
              ))}
            </div>
            <Pagination
              currentPage={page}
              totalPosts={filteredNotices.length}
              postsPerPage={NOTICES_PER_PAGE}
              onPageChange={setPage}
            />
          </>
        )}
      </section>

      {/* Dean’s Corner */}
      <DeansSection />

      {/* Special Highlight */}
      <Callout />

      {/* Downloads */}
      <section className="px-4">
        <h2 className="text-xl font-bold mb-3">Downloads & Resources</h2>
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
        <Pagination
          currentPage={downloadsPage}
          totalPosts={downloads.length}
          postsPerPage={DOWNLOADS_PER_PAGE}
          onPageChange={setDownloadsPage}
        />
      </section>

      {/* Events */}
      <Events />
    </main>
  );
};

export default Notice;
