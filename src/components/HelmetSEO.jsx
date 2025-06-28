import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const HelmetSEO = ({ page = "home", blog, department, notice }) => {
  const seoContent = {
    home: {
      title: "Faculty of Science – Excellence in Education and Research",
      description:
        "Welcome to the official site of the Faculty of Science. Explore departments, announcements, events, and academic updates.",
      keywords:
        "faculty of science, science departments, university, research, education, nigeria",
      ogTitle: "Faculty of Science | Official Website",
    },
    about: {
      title: "About the Faculty of Science – Vision, Mission & History",
      description:
        "Discover our history, mission, vision, leadership, values, and why students choose the Faculty of Science.",
      keywords:
        "about faculty, mission, dean message, science education, university history",
      ogTitle: "About Faculty of Science",
    },
    contact: {
      title: "Contact Faculty of Science | Get in Touch",
      description:
        "Reach out to the Faculty of Science. Find our contact form, office address, social handles, and FAQs.",
      keywords:
        "contact faculty, university address, science contact, academic inquiry",
      ogTitle: "Contact Faculty of Science",
    },
    blog: {
      title: "Faculty Blog – News, Research & Student Life",
      description:
        "Read updates, research insights, student stories, and departmental news in our blog section.",
      keywords:
        "faculty blog, science research, student news, events, academic articles",
      ogTitle: "Faculty of Science Blog",
    },
    departments: {
      title: "Our Departments – Faculty of Science Overview",
      description:
        "Explore our academic departments including Computer Science, Physics, Chemistry, Mathematics, and Biology.",
      keywords:
        "science departments, computer science, physics, chemistry, math, biology",
      ogTitle: "Faculty Departments",
    },
    events: {
      title: "Faculty Events – Stay Updated",
      description:
        "Browse faculty events, filter by department, and discover upcoming academic and social happenings.",
      keywords:
        "faculty events, seminars, school programs, university activities",
      ogTitle: "Faculty Events",
    },
    notices: {
      title: "Notices & Announcements – Faculty of Science",
      description:
        "Check important announcements, downloadable timetables, Dean's messages, and school updates.",
      keywords: "faculty notices, announcements, timetable, dean message, pdfs",
      ogTitle: "Faculty Notices",
    },
    terms: {
      title: "Terms & Conditions – Faculty of Science Website",
      description:
        "Read our terms and conditions for using the Faculty of Science's online services and content.",
      keywords:
        "terms and conditions, faculty rules, website policy, academic site terms",
      ogTitle: "Terms & Conditions",
    },
    privacy: {
      title: "Privacy Policy – Faculty of Science",
      description:
        "Understand how we handle and protect your personal data on the Faculty of Science website.",
      keywords: "privacy policy, data security, university data, site privacy",
      ogTitle: "Privacy Policy",
    },
    blogDetail: blog?.title
      ? {
          title: `${blog.title} | Faculty Blog`,
          description:
            blog.description ||
            "Read detailed insights from faculty experts and students.",
          keywords: blog.tags?.join(", ") || "faculty blog, academic insights",
          ogTitle: blog.title,
        }
      : {
          title: "Blog Article | Faculty of Science",
          description:
            "Read faculty articles on research, education, and innovation.",
          keywords: "faculty article, science blog, education news",
          ogTitle: "Faculty Blog Article",
        },
    departmentDetail: department?.name
      ? {
          title: `${department.name} Department | Faculty of Science`,
          description:
            department.description ||
            `Discover the ${department.name} department – its staff, labs, and research activities.`,
          keywords: `${department.name}, faculty department, university science, research, education`,
          ogTitle: `${department.name} Department`,
        }
      : {
          title: "Department | Faculty of Science",
          description:
            "Explore this department's highlights, academic programs, and research areas.",
          keywords: "faculty department, science programs",
          ogTitle: "Faculty Department",
        },
    noticeDetail: notice?.title
      ? {
          title: `${notice.title} | Notice Board`,
          description:
            notice.summary ||
            "View important faculty updates and announcements.",
          keywords: "faculty notice, announcement, academic alert",
          ogTitle: notice.title,
        }
      : {
          title: "Notice | Faculty of Science",
          description: "View detailed announcement from the faculty.",
          keywords: "faculty notice, announcement, university update",
          ogTitle: "Faculty Notice",
        },
  };

  const content = seoContent[page] || seoContent.home;
  const canonicalUrl = `https://yourfacultywebsite.com${
    page === "home" ? "" : `/${page}`
  }`;

  return (
    <Helmet>
      <title>{content.title}</title>
      <meta name="description" content={content.description} />
      <meta name="keywords" content={content.keywords} />
      <meta name="author" content="Faculty of Science" />
      <meta property="og:title" content={content.ogTitle} />
      <meta property="og:description" content={content.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Faculty of Science" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={content.ogTitle} />
      <meta name="twitter:description" content={content.description} />
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

HelmetSEO.propTypes = {
  page: PropTypes.oneOf([
    "home",
    "about",
    "contact",
    "blog",
    "blogDetail",
    "departments",
    "events",
    "notices",
    "terms",
    "privacy",
    "departmentDetail",
    "noticeDetail",
  ]),
  blog: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
  department: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }),
  notice: PropTypes.shape({
    title: PropTypes.string,
    summary: PropTypes.string,
  }),
};

export default HelmetSEO;
//  Usage Examples
// 1. Department Detail Page
// jsx
// Copy
// Edit
// <HelmetSEO
//   page="departmentDetail"
//   department={{
//     name: "Computer Science",
//     description: "Explore AI, cybersecurity, and software engineering in our top-rated Computer Science department."
//   }}
// />
// 2. Notice Detail Page
// jsx
// Copy
// Edit
// <HelmetSEO
//   page="noticeDetail"
//   notice={{
//     title: "2025 First Semester Timetable Released",
//     summary: "All departments are to download the timetable and prepare accordingly."
//   }}
// />
// 3. Blog Detail Page
// jsx
// Copy
// Edit
// <HelmetSEO
//   page="blogDetail"
//   blog={{
//     title: "How AI is Changing Modern Classrooms",
//     description: "Explore the future of AI-powered education and its impact on students.",
//     tags: ["AI", "Education", "EdTech", "Faculty Blog"]
//   }}
// />
