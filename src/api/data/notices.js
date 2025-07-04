import { LuPin, LuFileText } from "react-icons/lu";
import pinnedImg from "../../assets/images/hero-bg.jpg";

// Notices data with enhanced structure
export const notices = [
  {
    id: 1,
    title: "2024/2025 Academic Calendar Released",
    content:
      "The Faculty of Vocational and Technical Education has released the academic calendar for the 2024/2025 session. First semester begins on September 15, 2024. All students are advised to complete registration before this date.\n\nThe calendar includes important dates such as:\n\n• Registration Period: August 15 - September 14, 2024\n• First Semester Classes: September 15 - December 20, 2024\n• First Semester Exams: January 10 - 24, 2025\n• Second Semester Begins: February 15, 2025\n\nPlease note that late registration attracts a penalty fee. Contact your department secretary for more information.",
    summary:
      "First semester begins September 15. Complete registration before this date to avoid penalties.",
    date: "2024-07-01",
    department: "All Departments",
    category: "Academic",
    author: "Faculty Registrar",
    readTime: 3,
    attachments: [
      {
        name: "Academic_Calendar_2024_2025.pdf",
        size: "1.2 MB",
      },
      {
        name: "Registration_Guidelines.pdf",
        size: "850 KB",
      },
    ],
  },
  {
    id: 2,
    title: "Faculty Research Grant Applications Open",
    content:
      "Applications are now open for the 2024 Faculty Research Grants. Academic staff and postgraduate students are encouraged to submit proposals focusing on educational innovation, vocational training, and technical skills development.\n\nGrant amounts range from ₦500,000 to ₦2,000,000 depending on the scope and potential impact of the research. Priority will be given to projects that demonstrate practical applications and potential for improving teaching methodologies or student outcomes.\n\nApplication deadline is July 30, 2024. Results will be announced by August 15, 2024.",
    summary:
      "Submit proposals for grants ranging from ₦500,000 to ₦2,000,000. Deadline: July 30, 2024.",
    date: "2024-07-02",
    department: "All Departments",
    category: "Research",
    author: "Research Committee",
    readTime: 4,
    attachments: [
      {
        name: "Research_Grant_Application_Form.docx",
        size: "420 KB",
      },
      {
        name: "Research_Proposal_Guidelines.pdf",
        size: "650 KB",
      },
    ],
  },
  {
    id: 3,
    title: "Computer Lab Upgrade Schedule",
    content:
      "The Computer and Robotics Education department will be upgrading all computer labs from July 15-30, 2024. Alternative arrangements have been made for scheduled classes during this period.",
    date: "2024-07-03",
    department: "Computer and Robotics Education",
    category: "Facilities",
  },
  {
    id: 4,
    title: "Workshop on Teaching Methodologies",
    content:
      "A three-day workshop on innovative teaching methodologies will be held from July 20-22, 2024. All academic staff are required to attend. The workshop will cover student-centered learning approaches, assessment strategies, and educational technology integration.",
    date: "2024-07-04",
    department: "All Departments",
    category: "Training",
  },
  {
    id: 5,
    title: "Industrial Attachment Placements",
    content:
      "The list of approved organizations for industrial attachment for the 2024/2025 session has been published. Students should check the departmental notice boards or the faculty website for details and application procedures.",
    date: "2024-07-05",
    department: "Industrial Technical Education",
    category: "Internship",
  },
  {
    id: 6,
    title: "Entrepreneurship Development Program",
    content:
      "The Department of Vocational and Entrepreneurship Education will be hosting a 2-week Entrepreneurship Development Program from August 1-14, 2024. The program is open to all final year students across the faculty.",
    date: "2024-07-06",
    department: "Vocational and Entrepreneurship Education",
    category: "Training",
  },
  {
    id: 7,
    title: "Faculty Board Meeting",
    content:
      "The next Faculty Board Meeting will be held on July 25, 2024, at 10:00 AM in the Faculty Boardroom. All heads of departments and faculty representatives are required to attend.",
    date: "2024-07-07",
    department: "All Departments",
    category: "Administrative",
  },
];

// Pinned notices with enhanced structure
export const pinnedNotices = [
  {
    id: 101,
    title: "Tech Acquisition by Cresa Tech Society",
    content:
      "New advanced equipment has been acquired for student and faculty use across all departments. The equipment includes high-performance computers, 3D printers, robotics kits, and virtual reality headsets.\n\nTraining sessions on how to use the new equipment will be conducted from July 15-30, 2024. All interested students and staff should register via the link below.\n\nThis acquisition was made possible through the generous donation from our alumni association and industry partners.",
    summary:
      "New tech equipment available for all departments. Training sessions start July 15.",
    image: pinnedImg,
    button: "Learn More",
    department: "Computer and Robotics Education",
    date: "2025-06-01",
    icon: LuPin,
    author: "Dean of Faculty",
    readTime: 5,
    attachments: [
      {
        name: "Equipment_List_and_Specifications.pdf",
        size: "1.5 MB",
      },
      {
        name: "Training_Schedule.pdf",
        size: "420 KB",
      },
    ],
  },
];

// All notices combined
export const allNotices = [...pinnedNotices, ...notices];

// Function to get notices
export const getNotices = () => {
  return notices;
};

// Function to get pinned notices
export const getPinnedNotices = () => {
  return pinnedNotices;
};

// Function to get all notices
export const getAllNotices = () => {
  return allNotices;
};

// Function to get a notice by ID
export const getNoticeById = (id) => {
  const numId = parseInt(id);
  return allNotices.find((notice) => notice.id === numId);
};

// Save notices to localStorage for persistence
export const saveNoticesToStorage = () => {
  localStorage.setItem("notices", JSON.stringify(notices));
  localStorage.setItem("pinnedNotices", JSON.stringify(pinnedNotices));
};

// Load notices from localStorage
export const loadNoticesFromStorage = () => {
  const storedNotices = localStorage.getItem("notices");
  const storedPinnedNotices = localStorage.getItem("pinnedNotices");

  const loadedNotices = storedNotices ? JSON.parse(storedNotices) : notices;
  const loadedPinnedNotices = storedPinnedNotices
    ? JSON.parse(storedPinnedNotices)
    : pinnedNotices;

  return {
    notices: loadedNotices,
    pinnedNotices: loadedPinnedNotices,
    allNotices: [...loadedPinnedNotices, ...loadedNotices],
  };
};

// Initialize localStorage with notices data if not already present
export const initNoticesStorage = () => {
  if (
    !localStorage.getItem("notices") ||
    !localStorage.getItem("pinnedNotices")
  ) {
    saveNoticesToStorage();
  }
};
