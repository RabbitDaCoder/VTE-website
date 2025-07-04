// Re-export everything from the new data structure
import { getBlogs, getBlogById, getRelatedBlogs } from "./data/blogs";
import { getDepartments, getDepartmentById } from "./data/departments";
import { getEvents, getEventById, getUpcomingEvents } from "./data/events";
import {
  getNotices,
  getPinnedNotices,
  getAllNotices,
  getNoticeById,
} from "./data/notices";
import { getTestimonials } from "./data/testimonials";
import { getBenefits } from "./data/benefits";
import { getFeatures } from "./data/features";
import { getDownloads } from "./data/downloads";
import { getStudentPresidents } from "./data/studentPresidents";

// For backward compatibility, we need to import and re-export the actual data arrays
// Import the data arrays from their respective files
import { departments } from "./data/departments";
import { events } from "./data/events";
import { notices, pinnedNotices, allNotices } from "./data/notices";
import { testimonials } from "./data/testimonials";
import { blogs } from "./data/blogs";
import { benefits } from "./data/benefits";
import { features } from "./data/features";
import { downloads } from "./data/downloads";
import { studentPresidents } from "./data/studentPresidents";

// Re-export everything
export {
  // Data arrays (for backward compatibility)
  departments,
  blogs,
  events,
  notices,
  pinnedNotices,
  allNotices,
  testimonials,
  benefits,
  features,
  downloads,
  studentPresidents,

  // Functions
  getBlogs,
  getBlogById,
  getRelatedBlogs,
  getDepartments,
  getDepartmentById,
  getEvents,
  getEventById,
  getUpcomingEvents,
  getNotices,
  getPinnedNotices,
  getAllNotices,
  getNoticeById,
  getTestimonials,
  getBenefits,
  getFeatures,
  getDownloads,
  getStudentPresidents,
};
