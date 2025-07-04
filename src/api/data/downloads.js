// Downloads data
export const downloads = [
  {
    id: 1,
    name: "Academic Calendar 2024-2025",
    desc: "Official academic calendar with important dates and deadlines",
    size: "1.2 MB",
    link: "/downloads/academic_calendar_2024_2025.pdf",
  },
  {
    id: 2,
    name: "Student Handbook",
    desc: "Comprehensive guide for students with policies and procedures",
    size: "3.5 MB",
    link: "/downloads/student_handbook.pdf",
  },
  {
    id: 3,
    name: "Course Registration Form",
    desc: "Form for registering courses for the current semester",
    size: "420 KB",
    link: "/downloads/course_registration_form.docx",
  },
  {
    id: 4,
    name: "Faculty Research Guidelines",
    desc: "Guidelines for conducting and submitting research projects",
    size: "1.8 MB",
    link: "/downloads/research_guidelines.pdf",
  },
  {
    id: 5,
    name: "Scholarship Application Form",
    desc: "Application form for various scholarship opportunities",
    size: "550 KB",
    link: "/downloads/scholarship_application.pdf",
  },
  {
    id: 6,
    name: "Internship Opportunities Catalog",
    desc: "List of available internship opportunities for students",
    size: "2.3 MB",
    link: "/downloads/internship_catalog.pdf",
  },
  {
    id: 7,
    name: "Laboratory Safety Manual",
    desc: "Safety guidelines for all laboratory activities",
    size: "4.1 MB",
    link: "/downloads/lab_safety_manual.pdf",
  },
  {
    id: 8,
    name: "Alumni Association Membership Form",
    desc: "Form for joining the faculty's alumni association",
    size: "380 KB",
    link: "/downloads/alumni_membership_form.docx",
  },
];

// Function to get downloads
export const getDownloads = () => {
  return downloads;
};

// Save downloads to localStorage for persistence
export const saveDownloadsToStorage = () => {
  localStorage.setItem("downloads", JSON.stringify(downloads));
};

// Load downloads from localStorage
export const loadDownloadsFromStorage = () => {
  const storedDownloads = localStorage.getItem("downloads");
  if (storedDownloads) {
    return JSON.parse(storedDownloads);
  }
  return downloads;
};

// Initialize localStorage with downloads data if not already present
export const initDownloadsStorage = () => {
  if (!localStorage.getItem("downloads")) {
    saveDownloadsToStorage();
  }
};
