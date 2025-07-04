import {
  LuLeaf,
  LuBriefcase,
  LuCpu,
  LuHouse,
  LuFactory,
  LuRocket,
} from "react-icons/lu";

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
    image: CRE,
    summary:
      "Innovating teaching methods in computing, AI, and cutting-edge robotics.",
    description:
      "This department is at the forefront of preparing educators to teach the dynamic fields of computer science and robotics, fostering computational thinking and practical engineering skills.",
    features: [
      "Programming Education",
      "Educational Robotics",
      "Computer Science Pedagogy",
      "Digital Literacy",
      "Educational Technology",
      "AI in Education",
    ],
    details: {
      head: "Dr. Ifeoma B. Onah",
      faculty: [
        "Prof. Ibezim Nnenna",
        "Asso. Prof. Emma Nwangwu",
        "Asso. Prof. C.J. Olelewe",
        "Dr. Nick Eze",
        "Dr. Chukwuma Mgboji",
        "Dr. Charles Chiamogu",
      ],
      coreCourses: [
        "Software Development",
        "Robotics Engineering",
        "Hardware Maintenance",
        "Networking",
        "Cybersecurity",
        "Artificial Intelligence",
      ],
      blogIds: [1, 4],
      eventIds: [3, 4],
    },
    gallery: [
      "/images/departments/computer/gallery-1.jpg",
      "/images/departments/computer/gallery-2.jpg",
      "/images/departments/computer/gallery-3.jpg",
      "/images/departments/computer/gallery-4.jpg",
      "/images/departments/computer/gallery-5.jpg",
    ],
  },
  {
    id: 4,
    name: "Home Economics and Hospitality Management",
    icon: LuHouse,
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
