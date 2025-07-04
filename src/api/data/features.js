import { 
  LuGraduationCap, 
  LuUsers, 
  LuBuilding, 
  LuBookOpen, 
  LuAward 
} from "react-icons/lu";

// Features data with icons and stats
export const features = [
  {
    label: "Students",
    icon: LuUsers,
    stat: 5000,
  },
  {
    label: "Courses",
    icon: LuBookOpen,
    stat: 120,
  },
  {
    label: "Departments",
    icon: LuBuilding,
    stat: 8,
  },
  {
    label: "Graduates",
    icon: LuGraduationCap,
    stat: 15000,
  },
  {
    label: "Awards",
    icon: LuAward,
    stat: 50,
  },
];

// Function to get features
export const getFeatures = () => {
  return features;
};

// Save features to localStorage for persistence
export const saveFeaturesToStorage = () => {
  localStorage.setItem('features', JSON.stringify(features));
};

// Load features from localStorage
export const loadFeaturesFromStorage = () => {
  const storedFeatures = localStorage.getItem('features');
  if (storedFeatures) {
    return JSON.parse(storedFeatures);
  }
  return features;
};

// Initialize localStorage with features data if not already present
export const initFeaturesStorage = () => {
  if (!localStorage.getItem('features')) {
    saveFeaturesToStorage();
  }
};