// Faculty life images with detailed information
export const facultyLifeImages = [
  {
    id: 1,
    image: "/images/faculty-life/faculty-1.jpg",
    caption: "Student orientation program",
    description:
      "New students being introduced to faculty resources and opportunities",
    date: "2023-09-15",
    category: "Academic",
  },
  {
    id: 2,
    image: "/images/faculty-life/faculty-2.jpg",
    caption: "Faculty research symposium",
    description:
      "Annual gathering showcasing student and faculty research projects",
    date: "2023-11-10",
    category: "Research",
  },
  {
    id: 3,
    image: "/images/faculty-life/faculty-3.jpg",
    caption: "Campus cultural festival",
    description:
      "Celebrating diversity through cultural performances and exhibitions",
    date: "2024-02-25",
    category: "Cultural",
  },
  {
    id: 4,
    image: "/images/faculty-life/faculty-4.jpg",
    caption: "Events Rally",
    description: "Celebrating the achievements of our graduating class",
    date: "2023-07-20",
    category: "Ceremony",
  },
  {
    id: 5,
    image: "/images/faculty-life/faculty-5.jpg",
    caption: "Student workshop session",
    description: "Hands-on learning experience in specialized technical skills",
    date: "2024-03-15",
    category: "Workshop",
  },
  {
    id: 6,
    image: "/images/faculty-life/faculty-6.jpg",
    caption: "Faculty sports day",
    description:
      "Annual inter-departmental sports competition promoting teamwork",
    date: "2023-10-05",
    category: "Sports",
  },
  {
    id: 7,
    image: "/images/faculty-life/faculty-7.jpg",
    caption: "Academic conference",
    description:
      "International conference on vocational and technical education innovations",
    date: "2024-01-18",
    category: "Conference",
  },
  {
    id: 8,
    image: "/images/faculty-life/faculty-8.jpg",
    caption: "Community outreach program",
    description:
      "Students applying technical skills to solve community challenges",
    date: "2023-12-12",
    category: "Outreach",
  },
];

// Function to get faculty life images
export const getFacultyLifeImages = () => {
  return facultyLifeImages;
};

// Function to get faculty life images by category
export const getFacultyLifeImagesByCategory = (category) => {
  if (!category) return facultyLifeImages;
  return facultyLifeImages.filter((image) => image.category === category);
};

// Function to get faculty life image by ID
export const getFacultyLifeImageById = (id) => {
  const numId = parseInt(id);
  return facultyLifeImages.find((image) => image.id === numId);
};

// Save faculty life images to localStorage for persistence
export const saveFacultyLifeToStorage = () => {
  localStorage.setItem("facultyLifeImages", JSON.stringify(facultyLifeImages));
};

// Load faculty life images from localStorage
export const loadFacultyLifeFromStorage = () => {
  const storedFacultyLife = localStorage.getItem("facultyLifeImages");
  if (storedFacultyLife) {
    return JSON.parse(storedFacultyLife);
  }
  return facultyLifeImages;
};

// Initialize faculty life images in localStorage
export const initFacultyLifeStorage = () => {
  if (!localStorage.getItem("facultyLifeImages")) {
    saveFacultyLifeToStorage();
  }
};

// Export the array as default export
export default facultyLifeImages;
