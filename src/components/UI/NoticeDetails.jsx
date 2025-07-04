import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getNoticeById, allNotices } from "../../api/data";
import { FaCalendarAlt, FaUserCircle, FaShareAlt } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import {
  LuDownload,
  LuLink,
  LuArrowLeft,
  LuBuilding2,
  LuTag,
  LuClock,
  LuArrowRight,
} from "react-icons/lu";
import HelmetSEO from "../HelmetSEO";

const NoticeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const notice = getNoticeById(parseInt(id));

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!notice) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center">
        <div className="bg-red-50 p-8 rounded-xl shadow-sm border border-red-100">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Notice Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The notice you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/notice"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition flex items-center gap-2 mx-auto w-fit"
          >
            <LuArrowLeft /> Back to Notices
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(notice.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  // Get related notices (excluding current one)
  const relatedNotices = allNotices
    .filter(
      (n) =>
        n.id !== notice.id &&
        (n.department === notice.department || n.category === notice.category)
    )
    .slice(0, 3);

  return (
    <>
      <HelmetSEO page="noticeDetail" notice={notice} />
      <div className="w-full min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 pb-12">
        {/* Breadcrumb navigation */}
        <div className="max-w-4xl mx-auto pt-6 px-4">
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <Link to="/" className="hover:text-green-700">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link to="/notice" className="hover:text-green-700">
              Notices
            </Link>
            <span className="mx-2">›</span>
            <span className="text-green-700 font-medium truncate max-w-[200px]">
              {notice.title}
            </span>
          </div>
        </div>

        {/* Notice header */}
        <div className="w-full bg-white border-b border-green-100 shadow-sm mb-8">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-green-700 hover:text-green-900 mb-4 text-sm"
            >
              <LuArrowLeft className="mr-1" /> Back to notices
            </button>

            <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              {notice.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-2">
              <span className="flex items-center gap-1">
                <FaCalendarAlt className="text-green-600" /> {formattedDate}
              </span>
              <span className="flex items-center gap-1">
                <FaUserCircle className="text-green-600" />{" "}
                {notice.author || "VTE Admin"}
              </span>
              {notice.department && (
                <span className="flex items-center gap-1">
                  <LuBuilding2 className="text-green-600" /> {notice.department}
                </span>
              )}
              {notice.category && (
                <span className="flex items-center gap-1">
                  <LuTag className="text-green-600" /> {notice.category}
                </span>
              )}
              {notice.readTime && (
                <span className="flex items-center gap-1">
                  <LuClock className="text-green-600" /> {notice.readTime} min
                  read
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Notice content */}
        <div className="max-w-4xl mx-auto px-4">
          {notice.image && (
            <img
              src={notice.image}
              alt={notice.title}
              className="w-full h-auto max-h-[400px] object-cover rounded-xl shadow mb-8"
            />
          )}

          <div className="bg-white p-8 rounded-xl shadow mb-8">
            <div className="prose prose-green max-w-none text-gray-800 leading-relaxed whitespace-pre-line">
              {notice.content}
            </div>
          </div>

          {/* Notice attachments */}
          {notice.attachments && notice.attachments.length > 0 && (
            <div className="bg-white p-6 rounded-xl border border-green-100 shadow mb-8">
              <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                <LuDownload /> Attachments
              </h3>
              <div className="space-y-3">
                {notice.attachments.map((attachment, index) => (
                  <div
                    key={index}
                    className="flex flex-col lg:flex-row items-start gap-3  lg:items-center lg:justify-between bg-green-50 p-4 rounded-lg border border-green-100"
                  >
                    <div className="flex items-center gap-2">
                      <LuDownload className="text-green-600" />
                      <span className="font-medium text-sm lg:text-base">
                        {attachment.name}
                      </span>
                      <span className="text-xs text-gray-500">
                        ({attachment.size})
                      </span>
                    </div>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-1 transition">
                      <LuDownload size={14} /> Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Share notice */}
          <div className="bg-white p-6 rounded-xl border border-green-100 shadow mb-8">
            <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
              <FaShareAlt /> Share This Notice
            </h3>
            <div className="flex flex-wrap gap-3">
              {/* Facebook */}
              <Link
                to={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  window.location.href
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Share on Facebook"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                <FaFacebookF /> Facebook
              </Link>
              {/* Twitter/X */}
              <Link
                to={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  window.location.href
                )}&text=${encodeURIComponent(notice.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Share on Twitter"
                className="flex items-center gap-2 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition"
              >
                <FaTwitter /> Twitter
              </Link>
              {/* LinkedIn */}
              <Link
                to={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  window.location.href
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Share on LinkedIn"
                className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
              >
                <FaLinkedinIn /> LinkedIn
              </Link>
              {/* Copy Link */}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link copied to clipboard!");
                }}
                title="Copy Link"
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                <LuLink /> Copy Link
              </button>
            </div>
          </div>
        </div>

        {/* Related notices */}
        {relatedNotices.length > 0 && (
          <div className="max-w-4xl mx-auto px-4 mt-12">
            <h3 className="text-2xl font-bold text-green-800 mb-6">
              Related Notices
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedNotices.map((related) => (
                <Link
                  key={related.id}
                  to={`/notice/${related.id}`}
                  className="bg-white border border-green-100 rounded-xl p-5 shadow hover:shadow-md hover:border-green-300 transition flex flex-col"
                >
                  <h4 className="text-lg font-bold text-green-800 mb-2 line-clamp-2">
                    {related.title}
                  </h4>
                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(related.date).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-600 line-clamp-3 mb-3">
                    {related.summary || related.content.slice(0, 100)}...
                  </p>
                  <div className="mt-auto text-green-600 hover:text-green-800 text-sm font-medium flex items-center">
                    Read more <LuArrowRight className="ml-1" size={14} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back to all notices button */}
        <div className="max-w-4xl mx-auto px-4 mt-12 text-center">
          <Link
            to="/notice"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
          >
            <LuArrowLeft /> Back to All Notices
          </Link>
        </div>
      </div>
    </>
  );
};

export default NoticeDetails;
