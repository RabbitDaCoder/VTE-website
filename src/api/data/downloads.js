// Downloads data
export const downloads = [
  {
    id: 1,
    name: "4 Year Program (CCMAS)",
    desc: "Official 4 year program outline for CCMAS",
    size: "1.2 MB",
    link: "/downloads/4 Year Program (CCMAS).pdf",
  },
  {
    id: 2,
    name: "CRE 121 Course Pdf",
    desc: "Course outline for CRE 121",
    size: "3.5 MB",
    link: "/downloads/CRE-121.pdf",
  },
  {
    id: 3,
    name: "EDU 101 Course Pdf",
    desc: "Course outline for EDU 101",
    size: "420 KB",
    link: "/downloads/edu-101.pdf",
  },
  {
    id: 4,
    name: "GSP 101 Course Pdf",
    desc: "Course outline for GSP 101",
    size: "1.8 MB",
    link: "/downloads/GSP-101.pdf",
  },
  {
    id: 5,
    name: "CRE 251 - ROBOTICS PROGRAMMING 1 NOTE - STEPHEN.pdf",
    desc: "Course outline for CRE 251",
    size: "550 KB",
    link: "/downloads/CRE 251 - ROBOTICS PROGRAMMING 1 NOTE - STEPHEN.pdf",
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
