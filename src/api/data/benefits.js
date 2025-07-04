import { LuBookOpen, LuGraduationCap, LuUsers, LuBriefcase, LuGlobe } from "react-icons/lu";

// Benefits data
export const benefits = [
  {
    id: 1,
    title: "Quality Education",
    description: "Access to high-quality vocational and technical education programs designed to meet industry standards and prepare students for successful careers.",
    icon: LuBookOpen
  },
  {
    id: 2,
    title: "Expert Faculty",
    description: "Learn from experienced educators and industry professionals who bring real-world knowledge and expertise to the classroom.",
    icon: LuGraduationCap
  },
  {
    id: 3,
    title: "Supportive Community",
    description: "Join a diverse and inclusive community of learners, educators, and professionals committed to excellence in vocational and technical education.",
    icon: LuUsers
  },
  {
    id: 4,
    title: "Career Opportunities",
    description: "Gain practical skills and knowledge that lead to diverse career opportunities in high-demand fields and industries.",
    icon: LuBriefcase
  },
  {
    id: 5,
    title: "Global Perspective",
    description: "Develop a global perspective through international partnerships, exchange programs, and exposure to diverse cultural and educational practices.",
    icon: LuGlobe
  }
];

// Function to get benefits
export const getBenefits = () => {
  return benefits;
};

// Save benefits to localStorage for persistence
export const saveBenefitsToStorage = () => {
  localStorage.setItem('benefits', JSON.stringify(benefits));
};

// Load benefits from localStorage
export const loadBenefitsFromStorage = () => {
  const storedBenefits = localStorage.getItem('benefits');
  if (storedBenefits) {
    return JSON.parse(storedBenefits);
  }
  return benefits;
};

// Initialize localStorage with benefits data if not already present
export const initBenefitsStorage = () => {
  if (!localStorage.getItem('benefits')) {
    saveBenefitsToStorage();
  }
};