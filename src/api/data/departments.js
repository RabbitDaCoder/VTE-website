import {
  LuLeaf,
  LuBriefcase,
  LuCpu,
  LuHouse,
  LuFactory,
  LuRocket,
} from "react-icons/lu";
import Cre_logo from "/images/departments/CRE/CRE_Logo.png";
// import AE_logo from "/images/departments/AE/AE_Logo.png";
// import BE_logo from "/images/departments/BE/BE_Logo.png";
// import HEC_logo from "/images/departments/HEC/HEC_Logo.png";
// import ITE_logo from "/images/departments/ITE/ITE_Logo.png";
// import VEE_logo from "/images/departments/VEE/VEE_Logo.png";

// For public folder images in Vite, use direct paths
const CRE = "/images/departments/CRE/cre-4.jpg";
const VEE = "/images/departments/VEE/vee-3.jpg";
const BE = "/images/departments/BE/be-1.jpg";
const HEC = "/images/departments/HEC/hec1.PNG";
const AE = "/images/departments/AE/ae-1.PNG";
const ITE = "/images/departments/ITE/ite2.PNG";

// Departments data with sequential IDs
export const departments = [
  {
    id: 1,
    name: "Agriculture and Bioresources Education",
    icon: LuLeaf,
    // logo: ,
    image: AE,
    summary:
      "Cultivating knowledge and skills for sustainable agricultural development.",
    description:
      "Agriculture Education is an interdisciplinary field focused on training individuals, particularly future educators and extension workers, in the science, practice, and sustainable management of agricultural systems and natural biological resources.",
    features: [
      "Sustainable Agriculture Practices",
      "Extension Education Methods",
      "Soil & Crop Science",
      "Livestock Production Management",
      "Agricultural Economics",
      "Environmental Conservation",
    ],
    details: {
      head: "Prof. Toochukwu E. Ejiofor",
      faculty: [
        "Dr. Crop Science",
        "Prof. Soil Health",
        "Dr. Animal Husbandry",
      ],
      coreCourses: [
        "Agronomy Principles",
        "Livestock Production",
        "Agricultural Economics",
        "Extension Methods",
      ],
      blogIds: [4, 5],
      eventIds: [2, 5],
    },
    contact: {
      address:
        "Department of Agriculture and Bioresources Education, Faculty of Vocational and Technical Education, University of Nigeria, Nsukka",
      email: "agriculture.edu@unn.edu.ng",
      phone: "+234 803 456 7890",
      hours: "Monday - Friday: 8:00 AM - 4:00 PM",
    },
    social: {
      facebook: "https://facebook.com/unnagriculture",
      twitter: "https://twitter.com/unnagriculture",
      instagram: "https://instagram.com/unnagriculture",
    },
    gallery: [
      "/images/departments/agriculture/gallery-1.jpg",
      "/images/departments/agriculture/gallery-2.jpg",
      "/images/departments/agriculture/gallery-3.jpg",
      "/images/departments/agriculture/gallery-4.jpg",
      "/images/departments/agriculture/gallery-5.jpg",
    ],
  },
  {
    id: 2,
    name: "Business Education",
    icon: LuBriefcase,
    // logo: ,
    image: BE,
    summary:
      "Equipping future business leaders and educators with essential economic and entrepreneurial skills.",
    description:
      "Our Business Education department focuses on developing educators who can impart vital business acumen, financial literacy, and entrepreneurial spirit to the next generation.",
    features: [
      "Accounting Education",
      "Marketing Education",
      "Office Technology",
      "Entrepreneurship",
      "Business Communication",
      "Information Management",
    ],
    details: {
      head: "Dr. E.O. Ugwuoke",
      faculty: [
        "Prof. Market Trends",
        "Dr. Financial Literacy",
        "Prof. Entrepreneurship Strategy",
      ],
      coreCourses: [
        "Principles of Business",
        "Accounting for Educators",
        "Marketing Fundamentals",
        "Business Law",
      ],
      blogIds: [2, 3],
      eventIds: [1, 3],
    },
    contact: {
      address:
        "Department of Business Education, Faculty of Vocational and Technical Education, University of Nigeria, Nsukka",
      email: "business.edu@unn.edu.ng",
      phone: "+234 805 678 9012",
      hours: "Monday - Friday: 9:00 AM - 5:00 PM",
    },
    social: {
      facebook: "https://facebook.com/unnbusiness",
      twitter: "https://twitter.com/unnbusiness",
      linkedin: "https://linkedin.com/company/unnbusiness",
    },
    gallery: [
      "/images/departments/business/gallery-1.jpg",
      "/images/departments/business/gallery-2.jpg",
      "/images/departments/business/gallery-3.jpg",
      "/images/departments/business/gallery-4.jpg",
      "/images/departments/business/gallery-5.jpg",
    ],
  },
  {
    id: 3,
    name: "Computer and Robotics Education",
    icon: LuCpu,
    logo: Cre_logo,
    image: CRE,
    summary:
      "The principle guiding this discipline is to produce individuals with saleable computing and pedagogical skills who would in turn be relevant in the society.",
    description:
      "The department is designed to develop and execute a word-class computer and robotics education programme intended to provide sound theoretical and practical training for students in the areas of educational software development, hardware maintenance, networking, robotics, and cyber security.",
    features: [
      "Software development",
      "Hardware maintenance",
      "Microsoft kit",
      "Database management",
      "Robotics",
      "AI & Machine Learning",
      "Cyber security",
    ],
    details: {
      head: "Dr. Mrs Bernadine Ifeoma Onah",
      faculty: [
        "Dr. John Enovo - Hardware maintenance",
        "Miss C. R. Uzoegwu - Database management",
        "Prof. N. E. Ibezim - Robotics",
        "Dr. E. C. Nwangwu - Software development",
      ],
      coreCourses: [
        "Software Development",
        "Robotics Engineering",
        "Hardware Maintenance",
        "Networking",
        "Cybersecurity",
        "Artificial Intelligence",
      ],
    },
    programs: [
      {
        name: "100 Level",
        description: "Foundation courses in computing and education",
        courses: [
          "GST 111 — Communication in English",
          "EDU 101 — Introduction to Teaching Profession",
          "COS 101 — Introduction to Computing Sciences",
          "MTH 101 — General Mathematics",
          "PHY 107 — General Physics Laboratory",
          "CRE 121 — Information Management and Communication Technology",
          "CRE 123 — Word Processing",
          "VTE 101 — Foundations of Vocational and Technical Education",
          "GST 112 — Nigerian Peoples and Culture",
          "PHY 102 — General Physics",
          "COS 102 — Problem Solving",
          "CRE 132 — Computer Hardware Maintenance",
          "CRE 152 — Foundations of Robotics Education",
          "CRE 162 — Introduction to Computer Programming",
        ],
      },
      {
        name: "200 Level",
        description: "Intermediate computing and robotics courses",
        courses: [
          "GST 211 — Environment & Sustainable Development",
          "ENT 211 — Entrepreneurship and Innovation",
          "EDU 201 — Curriculum, Curriculum Delivery and Teaching Methods",
          "MTH 201 — Mathematical Methods I",
          "COS 201 — Computer Programming I",
          "SEN 201 — Introduction to Software Engineering",
          "CSC 203 — Discrete Structures",
          "IFT 211 — Digital Logic Design",
          "CRE 211 — Methodology in Computer Education",
          "CRE 251 — Robotics Programming I",
          "MTH 202 — Mathematical Methods II",
          "COS 202 — Computer Programming II",
          "IFT 212 — Computer Architecture & Organization",
          "CRE 224 — Multimedia Development and Application",
          "CRE 226 — Computer and Robotics Graphics",
          "CRE 252 — Robotics Programming II",
          "CSC 299 — SIWES I",
        ],
      },
      {
        name: "300 Level",
        description: "Advanced computing concepts and practical applications",
        courses: [
          "EDU 301 — Teaching Practice I",
          "CSC 301 — Data Structures",
          "ICT 305 — Data Communication System & Network",
          "CSC 309 — Artificial Intelligence",
          "CRE 327 — Data Reduction using SPSS",
          "CRE 351 — Mobile Device Maintenance & Repairs",
          "CYB 201 — Introduction to Cyber Security and Strategy",
          "EDU 302 — Educational Measurements, Tests, Research Methods and Statistics",
          "ENT 312 — Venture Creation",
          "GST 312 — Peace and Conflict Resolution",
          "DTS 304 — Data Management",
          "CSC 308 — Operating Systems",
          "CSC 322 — Computer Science Innovation and New Technologies",
          "CRE 324 — Web Development and Application",
          "CRE 326 — Data Science Application in Education",
          "CSC 399 — SIWES II",
        ],
      },
      {
        name: "400 Level",
        description: "Final year specialization and project work",
        courses: [
          "VTE 401 — Vocational Guidance",
          "EDU 401 — Teaching Practice II",
          "CSC 401 — Algorithms and Complexity Analysis",
          "INS 401 — Project Management",
          "CRE 421 — Spreadsheet Processing",
          "CRE 423 — Gamification",
          "EDU 400 — Project",
          "VTE 402 — Administration and Supervision of Vocational & Technical Education",
          "CRE 434 — Mobile Application Development",
          "CSC 402 — Ethics and Legal Issues in Computer Science",
          "VTE 404 — Evaluation of Vocational and Technical Education",
          "CRE 452 — Design and Development of Educational Robots",
        ],
      },
    ],
    contact: {
      address:
        "Department of Computer and Robotics Education, Faculty of Vocational and Technical Education, University of Nigeria, Nsukka",
      email: "computerrobotics@unn.edu.ng",
      phone: "+234 803 123 4567",
      hours: "Monday - Friday: 8:00 AM - 4:00 PM",
    },
    social: {
      facebook: "https://facebook.com/unncomputerrobotics",
      twitter: "https://twitter.com/unncomputerrobotics",
      instagram: "https://instagram.com/unncomputerrobotics",
      linkedin: "https://linkedin.com/company/unncomputerrobotics",
      youtube: "https://youtube.com/unncomputerrobotics",
    },
    blogIds: [1, 4],
    eventIds: [3, 4],
    gallery: [
      "/images/departments/CRE/gallery-1.jpg",
      "/images/departments/CRE/gallery-2.jpg",
      "/images/departments/CRE/gallery-3.jpg",
      "/images/departments/CRE/gallery-4.jpg",
      "/images/departments/CRE/gallery-5.jpg",
    ],
  },
  {
    id: 4,
    name: "Home Economics and Hospitality Management",
    icon: LuHouse,
    // logo: ,
    image: HEC,
    summary:
      "Fostering expertise in family welfare, consumer science, and service industry leadership.",
    description:
      "The Home Economics and Hospitality Management department offers a holistic approach to understanding individual, family, and community well-being, alongside rigorous training for careers in the vibrant hospitality sector.",
    features: [
      "Nutrition Education",
      "Family Resource Management",
      "Textile & Clothing Education",
      "Hospitality Management",
      "Consumer Education",
      "Sustainable Living",
    ],
    details: {
      head: "Asso. Prof. Amaka Chukwuone",
      faculty: ["Prof. Ngozi. Eze", "Dr. A. Ezeanwu", "Dr. Patricia Kalu"],
      coreCourses: [
        "Nutrition and Dietetics",
        "Hospitality Operations",
        "Family Resource Management",
        "Textile Arts and Design",
      ],
      blogIds: [3, 5],
      eventIds: [5, 7],
    },
    contact: {
      address:
        "Department of Home Economics and Hospitality Management, Faculty of Vocational and Technical Education, University of Nigeria, Nsukka",
      email: "homeeconomics@unn.edu.ng",
      phone: "+234 807 890 1234",
      hours: "Monday - Friday: 8:30 AM - 4:30 PM",
    },
    social: {
      facebook: "https://facebook.com/unnhomeeconomics",
      instagram: "https://instagram.com/unnhomeeconomics",
      youtube: "https://youtube.com/unnhomeeconomics",
    },
    gallery: [
      "/images/departments/home-economics/gallery-1.jpg",
      "/images/departments/home-economics/gallery-2.jpg",
      "/images/departments/home-economics/gallery-3.jpg",
      "/images/departments/home-economics/gallery-4.jpg",
      "/images/departments/home-economics/gallery-5.jpg",
    ],
  },
  {
    id: 5,
    name: "Industrial Technical Education",
    icon: LuFactory,
    // logo: ,
    image: ITE,
    summary:
      "Developing skilled educators for technical trades and industrial innovation.",
    description:
      "Our Industrial Technical Education department is dedicated to training teachers and professionals in the practical skills and theoretical knowledge required for various technical and industrial fields.",
    features: [
      "Mechanical Technology",
      "Electrical Systems",
      "Industrial Design",
      "Technical Drawing",
      "Workshop Management",
      "Safety Education",
    ],
    details: {
      head: "Asso. Prof. Jimoh Bakere",
      faculty: [
        "Prof. Workshop Safety",
        "Dr. Advanced Manufacturing",
        "Prof. Vocational Didactics",
      ],
      coreCourses: [
        "Technical Drawing",
        "Electrical Systems",
        "Automotive Technology",
        "Welding and Fabrication",
      ],
      blogIds: [1, 2],
      eventIds: [4, 6],
    },
    contact: {
      address:
        "Department of Industrial Technical Education, Faculty of Vocational and Technical Education, University of Nigeria, Nsukka",
      email: "industrial.tech@unn.edu.ng",
      phone: "+234 809 012 3456",
      hours: "Monday - Friday: 8:00 AM - 4:00 PM",
    },
    social: {
      facebook: "https://facebook.com/unnindustrialtech",
      twitter: "https://twitter.com/unnindustrialtech",
      linkedin: "https://linkedin.com/company/unnindustrialtech",
    },
    gallery: [
      "/images/departments/industrial/gallery-1.jpg",
      "/images/departments/industrial/gallery-2.jpg",
      "/images/departments/industrial/gallery-3.jpg",
      "/images/departments/industrial/gallery-4.jpg",
      "/images/departments/industrial/gallery-5.jpg",
    ],
  },
  {
    id: 6,
    name: "Vocational and Entrepreneurship Education",
    icon: LuRocket,
    // logo: ,
    image: VEE,
    summary:
      "Empowering students with practical skills and entrepreneurial mindset for self-reliance.",
    description:
      "This department combines vocational training with entrepreneurial principles, preparing graduates to not only excel in specific trades but also to create and manage their own successful ventures.",
    features: [
      "Entrepreneurship Skills",
      "Small Business Management",
      "Vocational Training",
      "Career Development",
      "Business Incubation",
      "Financial Literacy",
    ],
    details: {
      head: "Dr. Okereke",
      faculty: [
        "Prof. Startup Dynamics",
        "Dr. Skill Acquisition",
        "Prof. Microfinance",
      ],
      coreCourses: [
        "Entrepreneurship Skills",
        "Small Business Management",
        "Vocational Skill Development",
        "Financial Planning for Startups",
      ],
      blogIds: [2, 5],
      eventIds: [1, 8],
    },
    contact: {
      address:
        "Department of Vocational and Entrepreneurship Education, Faculty of Vocational and Technical Education, University of Nigeria, Nsukka",
      email: "vocational.edu@unn.edu.ng",
      phone: "+234 801 234 5678",
      hours: "Monday - Friday: 9:00 AM - 5:00 PM",
    },
    social: {
      facebook: "https://facebook.com/unnvocational",
      twitter: "https://twitter.com/unnvocational",
      instagram: "https://instagram.com/unnvocational",
      youtube: "https://youtube.com/unnvocational",
    },
    gallery: [
      "/images/departments/vocational/gallery-1.jpg",
      "/images/departments/vocational/gallery-2.jpg",
      "/images/departments/vocational/gallery-3.jpg",
      "/images/departments/vocational/gallery-4.jpg",
      "/images/departments/vocational/gallery-5.jpg",
    ],
  },
];

// Function to get departments
export const getDepartments = () => {
  return departments;
};

// Function to get a department by ID
export const getDepartmentById = (id) => {
  const numId = parseInt(id);
  return departments.find((dept) => dept.id === numId);
};

// Save departments to localStorage for persistence
export const saveDepartmentsToStorage = () => {
  localStorage.setItem("departments", JSON.stringify(departments));
};

// Load departments from localStorage
export const loadDepartmentsFromStorage = () => {
  const storedDepartments = localStorage.getItem("departments");
  if (storedDepartments) {
    return JSON.parse(storedDepartments);
  }
  return departments;
};

// Initialize localStorage with departments data if not already present
export const initDepartmentsStorage = () => {
  if (!localStorage.getItem("departments")) {
    saveDepartmentsToStorage();
  }
};
