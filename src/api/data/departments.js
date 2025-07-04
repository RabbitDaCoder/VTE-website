import {
  LuLeaf,
  LuBriefcase,
  LuCpu,
  LuHouse,
  LuFactory,
  LuRocket,
} from "react-icons/lu";
import computer from "../../../public/images/departments/computer.jpg";
import mech from "../../../public/images/departments/mech.jpg";
import civil from "../../../public/images/departments/civil.jpg";
import medicine from "../../../public/images/departments/medicine.jpg";
import physics from "../../../public/images/departments/physics.jpg";

// Departments data with sequential IDs
export const departments = [
  {
    id: 1,
    name: "Agriculture and Bioresources Education",
    icon: LuLeaf,
    image: computer,
    summary:
      "Cultivating knowledge and skills for sustainable agricultural development.",
    description:
      "The Department of Agriculture and Bioresources Education prepares educators and professionals who will lead in sustainable agricultural practices, food security initiatives, and environmental stewardship. Our curriculum combines hands-on field experience with cutting-edge research in crop science, animal husbandry, and agricultural economics.",
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
        "Dr. Chika Eze - Crop Science",
        "Prof. Adamu Ibrahim - Soil Science",
        "Dr. Ngozi Okafor - Agricultural Economics",
        "Dr. Emeka Nwankwo - Livestock Management",
      ],
      coreCourses: [
        "ABE 101: Introduction to Agricultural Education",
        "ABE 203: Crop Production Systems",
        "ABE 305: Soil Science and Management",
        "ABE 402: Agricultural Extension Methods",
        "ABE 504: Sustainable Farming Practices",
        "ABE 506: Agricultural Economics and Policy",
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
    image: mech,
    summary:
      "Developing business educators and professionals with entrepreneurial mindsets.",
    description:
      "The Department of Business Education focuses on preparing educators and professionals who can effectively teach business concepts, entrepreneurship, and office technology. Our graduates are equipped with both pedagogical skills and business acumen to excel in educational institutions and corporate settings.",
    features: [
      "Accounting Education",
      "Marketing Education",
      "Office Technology",
      "Entrepreneurship",
      "Business Communication",
      "Information Management",
    ],
    details: {
      head: "Prof. Chijioke Obi",
      faculty: [
        "Dr. Emmanuel Obi - Entrepreneurship",
        "Prof. Blessing Okoro - Accounting Education",
        "Dr. Fatima Suleiman - Marketing Education",
        "Dr. James Adegoke - Office Technology",
      ],
      coreCourses: [
        "BED 101: Foundations of Business Education",
        "BED 202: Accounting for Educators",
        "BED 304: Marketing Education",
        "BED 401: Office Technology and Management",
        "BED 503: Entrepreneurship Education",
        "BED 505: Business Communication Methods",
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
    image: civil,
    summary:
      "Preparing educators for the digital age with expertise in computing and robotics.",
    description:
      "The Department of Computer and Robotics Education focuses on developing educators who can effectively teach computing concepts, programming, and robotics in educational settings. Our curriculum combines technical knowledge with pedagogical approaches to prepare graduates for the evolving technological landscape in education.",
    features: [
      "Programming Education",
      "Educational Robotics",
      "Computer Science Pedagogy",
      "Digital Literacy",
      "Educational Technology",
      "AI in Education",
    ],
    details: {
      head: "Prof. Tunde Bakare",
      faculty: [
        "Dr. Chidi Onyeka - Educational Robotics",
        "Prof. Amina Yusuf - Computer Science Education",
        "Dr. Oluwaseun Adeyemi - Programming Education",
        "Dr. Ngozi Okafor - Educational Technology",
      ],
      coreCourses: [
        "CRE 101: Introduction to Computer Education",
        "CRE 203: Programming for Educators",
        "CRE 305: Educational Robotics",
        "CRE 402: Computer Science Teaching Methods",
        "CRE 504: AI and Machine Learning in Education",
        "CRE 506: Digital Literacy and Citizenship",
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
    name: "Home Economics & Hospitality Management Education",
    icon: LuHouse,
    image: medicine,
    summary:
      "Fostering expertise in nutrition, family resources, and hospitality education.",
    description:
      "The Department of Home Economics and Hospitality Management Education prepares educators and professionals in the areas of food and nutrition, family resource management, and hospitality services. Our graduates excel in teaching these vital life skills and managing related programs in educational and community settings.",
    features: [
      "Nutrition Education",
      "Family Resource Management",
      "Textile & Clothing Education",
      "Hospitality Management",
      "Consumer Education",
      "Sustainable Living",
    ],
    details: {
      head: "Prof. Ngozi Okonkwo",
      faculty: [
        "Dr. Fatima Bello - Nutrition Education",
        "Prof. Joseph Okafor - Hospitality Management",
        "Dr. Chioma Eze - Family Resource Management",
        "Dr. Aisha Mohammed - Textile and Clothing",
      ],
      coreCourses: [
        "HHE 101: Foundations of Home Economics Education",
        "HHE 202: Nutrition Science and Education",
        "HHE 304: Family Resource Management",
        "HHE 401: Hospitality Services Management",
        "HHE 503: Textile and Clothing Education",
        "HHE 505: Sustainable Living Practices",
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
    image: physics,
    summary:
      "Building technical educators with expertise in industrial technologies.",
    description:
      "The Department of Industrial Technical Education focuses on preparing educators and professionals in technical fields such as mechanical technology, electrical systems, and industrial design. Our graduates are equipped to teach technical skills and manage technical education programs in various educational settings.",
    features: [
      "Mechanical Technology",
      "Electrical Systems",
      "Industrial Design",
      "Technical Drawing",
      "Workshop Management",
      "Safety Education",
    ],
    details: {
      head: "Prof. Ibrahim Mohammed",
      faculty: [
        "Dr. Oluwaseun Adeyemi - Mechanical Technology",
        "Prof. Chinedu Okeke - Electrical Systems",
        "Dr. Chibuike Eze - Industrial Design",
        "Dr. Adebola Johnson - Technical Education",
      ],
      coreCourses: [
        "ITE 101: Foundations of Technical Education",
        "ITE 203: Mechanical Technology",
        "ITE 305: Electrical Systems and Applications",
        "ITE 402: Industrial Design Principles",
        "ITE 504: Workshop Organization and Management",
        "ITE 506: Technical Education Methods",
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
    image: computer,
    summary:
      "Fostering entrepreneurial mindsets and vocational skills for self-reliance.",
    description:
      "The Department of Vocational and Entrepreneurship Education focuses on developing educators and professionals who can teach practical vocational skills and entrepreneurial thinking. Our graduates excel in preparing others for self-employment, small business management, and vocational careers.",
    features: [
      "Entrepreneurship Skills",
      "Small Business Management",
      "Vocational Training",
      "Career Development",
      "Business Incubation",
      "Financial Literacy",
    ],
    details: {
      head: "Prof. Chioma Okereke",
      faculty: [
        "Dr. Emeka Nwosu - Entrepreneurship Education",
        "Prof. Aisha Bello - Small Business Management",
        "Dr. Tunde Adeyemi - Vocational Skills Development",
        "Dr. Folake Okonkwo - Financial Literacy",
      ],
      coreCourses: [
        "VEE 101: Introduction to Vocational Education",
        "VEE 202: Entrepreneurship Skills Development",
        "VEE 304: Small Business Management",
        "VEE 401: Vocational Skills Training",
        "VEE 503: Business Incubation and Startups",
        "VEE 505: Financial Literacy Education",
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
