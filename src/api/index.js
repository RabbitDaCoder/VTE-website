import {
  getBlogs,
  getBlogById,
  getRelatedBlogs,
  initBlogsStorage,
} from "./data/blogs";

import {
  getDepartments,
  getDepartmentById,
  initDepartmentsStorage,
} from "./data/departments";

import {
  getEvents,
  getEventById,
  getUpcomingEvents,
  initEventsStorage,
} from "./data/events";

import {
  getNotices,
  getPinnedNotices,
  getAllNotices,
  getNoticeById,
  initNoticesStorage,
} from "./data/notices";

import { getTestimonials, initTestimonialsStorage } from "./data/testimonials";

import { getBenefits, initBenefitsStorage } from "./data/benefits";

import { getFeatures, initFeaturesStorage } from "./data/features";

import { getDownloads, initDownloadsStorage } from "./data/downloads";

import {
  getStudentPresidents,
  initStudentPresidentsStorage,
} from "./data/studentPresidents";

// Initialize all data in localStorage
export const initializeData = () => {
  initBlogsStorage();
  initDepartmentsStorage();
  initEventsStorage();
  initNoticesStorage();
  initTestimonialsStorage();
  initBenefitsStorage();
  initFeaturesStorage();
  initDownloadsStorage();
  initStudentPresidentsStorage();
};

// Export all data access functions
export {
  // Blogs
  getBlogs,
  getBlogById,
  getRelatedBlogs,

  // Departments
  getDepartments,
  getDepartmentById,

  // Events
  getEvents,
  getEventById,
  getUpcomingEvents,

  // Notices
  getNotices,
  getPinnedNotices,
  getAllNotices,
  getNoticeById,

  // Testimonials
  getTestimonials,

  // Benefits
  getBenefits,

  // Features
  getFeatures,

  // Downloads
  getDownloads,

  // Student Presidents
  getStudentPresidents,
};
