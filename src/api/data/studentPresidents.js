// Student Presidents data
export const studentPresidents = {
  facultyPresident: {
    name: "Chukwuemeka Okafor",
    department: "Computer and Robotics Education",
    position: "Faculty President",
    year: "Final Year",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
    quote: "Empowering students through quality vocational and technical education for a better future.",
    email: "chukwuemeka.okafor@student.unn.edu.ng",
    socialMedia: {
      twitter: "https://twitter.com/chukwuemeka",
      linkedin: "https://linkedin.com/in/chukwuemeka-okafor"
    }
  },
  departmentalPresidents: [
    {
      name: "Ngozi Eze",
      department: "Agriculture and Bioresources Education",
      position: "Departmental President",
      year: "400 Level",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80"
    },
    {
      name: "Oluwaseun Adeyemi",
      department: "Business Education",
      position: "Departmental President",
      year: "400 Level",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80"
    },
    {
      name: "Chibuike Eze",
      department: "Computer and Robotics Education",
      position: "Departmental President",
      year: "500 Level",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80"
    },
    {
      name: "Fatima Bello",
      department: "Home Economics and Hospitality Management Education",
      position: "Departmental President",
      year: "400 Level",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80"
    },
    {
      name: "Ibrahim Mohammed",
      department: "Industrial Technical Education",
      position: "Departmental President",
      year: "500 Level",
      imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80"
    },
    {
      name: "Amina Yusuf",
      department: "Vocational and Entrepreneurship Education",
      position: "Departmental President",
      year: "400 Level",
      imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80"
    }
  ]
};

// Function to get student presidents
export const getStudentPresidents = () => {
  return studentPresidents;
};

// Save student presidents to localStorage for persistence
export const saveStudentPresidentsToStorage = () => {
  localStorage.setItem('studentPresidents', JSON.stringify(studentPresidents));
};

// Load student presidents from localStorage
export const loadStudentPresidentsFromStorage = () => {
  const storedStudentPresidents = localStorage.getItem('studentPresidents');
  if (storedStudentPresidents) {
    return JSON.parse(storedStudentPresidents);
  }
  return studentPresidents;
};

// Initialize localStorage with student presidents data if not already present
export const initStudentPresidentsStorage = () => {
  if (!localStorage.getItem('studentPresidents')) {
    saveStudentPresidentsToStorage();
  }
};