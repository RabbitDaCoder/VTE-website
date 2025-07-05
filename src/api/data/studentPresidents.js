import facultyPresident from "/images/executives/faculty_president.png";
import cre_president from "/images/executives/Cre_President.jpg";
import AE_president from "/images/executives/AE_president.jpg";
import presidents from "/images/profiles/profile_placeholder.jpg";
// Student Presidents data
export const studentPresidents = {
  facultyPresident: {
    name: "Comr. Nathan Okoye",
    department: "Computer and Robotics Education",
    position: "Faculty President",
    year: "Final Year",
    title: "Faculty Students' President, (VESA)",
    imageUrl: facultyPresident,
    quote:
      "Empowering students through quality vocational and technical education for a better future.",
  },
  departmentalPresidents: [
    {
      name: "Comr. Eze Chidera Cynthia",
      department: "Agriculture and Bioresources Education",
      position: "Departmental President",
      year: "400 Level",
      imageUrl: AE_president,
    },
    {
      name: "Comr. Modestus Chidera",
      department: "Business Education",
      position: "Departmental President",
      year: "400 Level",
      imageUrl: presidents,
    },
    {
      name: "Comr. Chibuzo Daniel O.",
      department: "Computer and Robotics Education",
      position: "Departmental President",
      year: "500 Level",
      imageUrl: cre_president,
    },
    {
      name: "Comr. Uzoegwu Micheal Kosisochukwu",
      department: "Home Economics and Hospitality Management Education",
      position: "Departmental President",
      year: "400 Level",
      imageUrl: presidents,
    },
    {
      name: "Comr. Jude Mamah",
      department: "Industrial Technical Education",
      position: "Departmental President",
      year: "500 Level",
      imageUrl: presidents,
    },
    {
      name: "Comr. V.V.E",
      department: "Vocational and Entrepreneurship Education",
      position: "Departmental President",
      year: "400 Level",
      imageUrl: presidents,
    },
  ],
};

// Function to get student presidents
export const getStudentPresidents = () => {
  return studentPresidents;
};

// Save student presidents to localStorage for persistence
export const saveStudentPresidentsToStorage = () => {
  localStorage.setItem("studentPresidents", JSON.stringify(studentPresidents));
};

// Load student presidents from localStorage
export const loadStudentPresidentsFromStorage = () => {
  const storedStudentPresidents = localStorage.getItem("studentPresidents");
  if (storedStudentPresidents) {
    return JSON.parse(storedStudentPresidents);
  }
  return studentPresidents;
};

// Initialize localStorage with student presidents data if not already present
export const initStudentPresidentsStorage = () => {
  if (!localStorage.getItem("studentPresidents")) {
    saveStudentPresidentsToStorage();
  }
};
