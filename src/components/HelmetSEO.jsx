import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const HelmetSEO = ({ page = "home", blog, department, notice, event }) => {
  const seoContent = {
    home: {
      title: "VTE Faculty – Excellence in Vocational & Technical Education",
      description:
        "Welcome to the Faculty of Vocational and Technical Education (VTE) at the University of Nigeria, Nsukka. Explore our departments, announcements, events, and academic programs.",
      keywords:
        "VTE, vocational education, technical education, UNN, University of Nigeria Nsukka, faculty of VTE",
      ogTitle: "VTE Faculty | University of Nigeria, Nsukka",
    },
    about: {
      title: "About VTE Faculty – Vision, Mission & History | UNN",
      description:
        "Discover the history, mission, vision, leadership, and values of the Faculty of Vocational and Technical Education at the University of Nigeria, Nsukka.",
      keywords:
        "about VTE faculty, VTE mission, dean message, vocational education, UNN history",
      ogTitle: "About VTE Faculty | UNN",
    },
    contact: {
      title: "Contact VTE Faculty | University of Nigeria, Nsukka",
      description:
        "Reach out to the Faculty of Vocational and Technical Education at UNN. Find our contact form, office address, social handles, and FAQs.",
      keywords:
        "contact VTE faculty, UNN address, vocational education contact, academic inquiry",
      ogTitle: "Contact VTE Faculty | UNN",
    },
    blog: {
      title: "VTE Faculty Blog – Research, Innovation & Student Life | UNN",
      description:
        "Read updates, research insights, student stories, and departmental news from the Faculty of Vocational and Technical Education.",
      keywords:
        "VTE faculty blog, vocational research, technical education news, UNN events, academic articles",
      ogTitle: "VTE Faculty Blog | UNN",
    },
    departments: {
      title:
        "VTE Departments – Faculty Overview | University of Nigeria, Nsukka",
      description:
        "Explore our academic departments including Agricultural Education, Business Education, Computer Education, Home Economics, and Industrial Technical Education.",
      keywords:
        "VTE departments, vocational departments, technical education, UNN faculty",
      ogTitle: "VTE Faculty Departments | UNN",
    },
    events: {
      title: "VTE Faculty Events – University of Nigeria, Nsukka",
      description:
        "Browse VTE faculty events, filter by department, and discover upcoming academic and vocational training activities.",
      keywords:
        "VTE faculty events, seminars, UNN programs, vocational activities",
      ogTitle: "VTE Faculty Events | UNN",
    },
    notices: {
      title: "Notices & Announcements – VTE Faculty | UNN",
      description:
        "Check important announcements, downloadable timetables, Dean's messages, and updates from the Faculty of Vocational and Technical Education.",
      keywords:
        "VTE faculty notices, UNN announcements, timetable, dean message, pdfs",
      ogTitle: "VTE Faculty Notices | UNN",
    },
    terms: {
      title: "Terms & Conditions – VTE Faculty Website | UNN",
      description:
        "Read our terms and conditions for using the Faculty of Vocational and Technical Education's online services and content.",
      keywords:
        "terms and conditions, VTE faculty rules, website policy, UNN site terms",
      ogTitle: "Terms & Conditions | VTE Faculty",
    },
    privacy: {
      title: "Privacy Policy – VTE Faculty | University of Nigeria, Nsukka",
      description:
        "Understand how we handle and protect your personal data on the VTE Faculty website at the University of Nigeria, Nsukka.",
      keywords: "privacy policy, data security, UNN data, VTE site privacy",
      ogTitle: "Privacy Policy | VTE Faculty",
    },
    blogDetail: blog?.title
      ? {
          title: `${blog.title} | VTE Faculty Blog`,
          description:
            blog.description ||
            "Read detailed insights from VTE faculty experts and students at the University of Nigeria, Nsukka.",
          keywords: blog.tags?.join(", ") || "VTE blog, academic insights, UNN",
          ogTitle: blog.title,
        }
      : {
          title: "Blog Article | VTE Faculty | University of Nigeria, Nsukka",
          description:
            "Read VTE faculty articles on vocational research, technical education, and innovation.",
          keywords:
            "VTE article, vocational blog, technical education news, UNN",
          ogTitle: "VTE Faculty Blog Article",
        },
    departmentDetail: department?.name
      ? {
          title: `${department.name} Department | VTE Faculty | UNN`,
          description:
            department.description ||
            `Discover the ${department.name} department at VTE Faculty – its staff, facilities, and academic programs.`,
          keywords: `${department.name}, VTE department, UNN vocational education, technical training`,
          ogTitle: `${department.name} Department | VTE Faculty`,
        }
      : {
          title: "Department | VTE Faculty | University of Nigeria, Nsukka",
          description:
            "Explore this department's academic programs, research areas, and vocational training opportunities.",
          keywords:
            "VTE department, vocational programs, UNN technical education",
          ogTitle: "VTE Faculty Department | UNN",
        },
    noticeDetail: notice?.title
      ? {
          title: `${notice.title} | VTE Faculty Notice Board`,
          description:
            notice.summary ||
            "View important VTE faculty updates and announcements from the University of Nigeria, Nsukka.",
          keywords: "VTE faculty notice, UNN announcement, academic alert",
          ogTitle: notice.title,
        }
      : {
          title: "Notice | VTE Faculty | University of Nigeria, Nsukka",
          description:
            "View detailed announcement from the VTE faculty at UNN.",
          keywords: "VTE notice, UNN announcement, vocational education update",
          ogTitle: "VTE Faculty Notice | UNN",
        },
    eventDetail: event?.title
      ? {
          title: `${event.title} | VTE Faculty Events | UNN`,
          description:
            event.description ||
            "Join us for this exciting VTE faculty event at the University of Nigeria, Nsukka.",
          keywords: `${
            event.department || ""
          }, VTE event, ${event.title.toLowerCase()}, vocational education, UNN program`,
          ogTitle: event.title,
        }
      : {
          title: "Event | VTE Faculty | University of Nigeria, Nsukka",
          description:
            "Discover details about this VTE faculty event and how to participate.",
          keywords:
            "VTE faculty event, vocational program, UNN event, technical education",
          ogTitle: "VTE Faculty Event | UNN",
        },
  };

  const content = seoContent[page] || seoContent.home;
  const canonicalUrl = `https://vte.unn.edu.ng${
    page === "home" ? "" : `/${page}`
  }`;

  return (
    <Helmet>
      <title>{content.title}</title>
      <meta name="description" content={content.description} />
      <meta name="keywords" content={content.keywords} />
      <meta
        name="author"
        content="Faculty of Vocational and Technical Education, UNN"
      />
      <meta property="og:title" content={content.ogTitle} />
      <meta property="og:description" content={content.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta
        property="og:site_name"
        content="VTE Faculty - University of Nigeria, Nsukka"
      />
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
    "eventDetail",
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
  event: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    department: PropTypes.string,
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
