import eventsImg from "../../../public/images/events/eventsImg-1.jpg";
import tenYearCelebration from "/images/ten-years-aniversery.jpg";

// Events data with sequential IDs
export const events = [
  {
    id: 8,
    title: "HOD Football League",
    description:
      "Departmental football competition featuring HODs and faculty members",
    date: "2024-07-29T15:00:00",
    department: "All Departments",
    image:
      "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vdGJhbGwlMjB0b3VybmFtZW50fGVufDB8fDB8fHww",
    location: "Faculty Sports Complex",
    upcoming: new Date("2024-07-29T15:00:00") > new Date(),
    content:
      "The HOD Football League is an exciting interdepartmental competition bringing together Heads of Departments and faculty members in a friendly but competitive football tournament. Running from July 29th to August 20th, 2024, this event aims to foster camaraderie, promote physical fitness, and strengthen relationships across departments.\n\nThe tournament will feature teams representing each department within the Faculty of Vocational and Technical Education. Matches will be held twice weekly, with the final championship match scheduled for August 20th.\n\nStudents are encouraged to attend and support their departments. Refreshments will be available, and special entertainment is planned for the final match day.\n\nSchedule:\n• Opening Ceremony & First Matches: July 29th, 3:00 PM\n• Semi-Finals: August 15th, 3:00 PM\n• Finals & Closing Ceremony: August 20th, 3:00 PM\n\nCome witness your favorite lecturers showcase their football skills!",
    author: "Edeh Chinedu Daniel",
  },
  {
    id: 9,
    title: "VTE Faculty 10th Anniversary Celebration",
    description:
      "Special Tech Service Session by Computer and Robotics Education Department",
    date: "2024-07-08T09:00:00",
    department: "Computer and Robotics Education",
    image: tenYearCelebration,
    location: "VTE Faculty Complex",
    upcoming: new Date("2024-07-08T09:00:00") > new Date(),
    content:
      "In celebration of the 10th year Anniversary of the Faculty of Vocational and Technical Education (VTE), the Department of Computer and Robotics Education is excited to present a Special Tech Service Session as part of the anniversary activities.\n\nAs highlighted in our program, we will be offering:\n• Software Development Services\n• Free Hardware Maintenance Consultation\n\nThis initiative is aimed at showcasing the practical skills and innovation that define our department. It also serves as our contribution to the anniversary celebration, providing value to both students and staff through technical support and development expertise.\n\nThe event will feature:\n• Technical workshops led by faculty experts\n• Student-led demonstrations of innovative projects\n• One-on-one consultation sessions for hardware issues\n• Software development clinics for those with project ideas\n\nAll members of the university community are invited to participate in this celebration of technology and education. Whether you need technical assistance or simply want to explore the innovations happening in our department, we welcome your presence.\n\nDate: July 8th, 2024\nTime: 9:00 AM - 4:00 PM\nVenue: VTE Faculty Complex\n\nJoin us as we celebrate a decade of excellence in vocational and technical education!",
    author: "Edeh Chinedu Daniel",
  },
  {
    id: 1,
    title: "Entrepreneurship Development Workshop",
    description: "Practical skills for business creation and management",
    date: "2024-08-15T10:00:00",
    department: "Vocational and Entrepreneurship Education",
    image:
      "https://plus.unsplash.com/premium_photo-1705267936187-aceda1a6c1a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RW50cmVwcmVuZXVyc2hpcCUyMERldmVsb3BtZW50JTIwV29ya3Nob3B8ZW58MHx8MHx8fDA%3D",
    location: "Entrepreneurship Center, Main Campus",
    upcoming: new Date("2024-08-15T10:00:00") > new Date(),
    content:
      "Join us for a comprehensive workshop on entrepreneurship development, featuring successful entrepreneurs and business educators. Learn practical skills for identifying opportunities, developing business plans, securing funding, and managing small businesses. This workshop is designed for students, educators, and community members interested in entrepreneurship.",
  },
  {
    id: 2,
    title: "Agricultural Innovation Symposium",
    description: "Exploring sustainable farming technologies",
    date: "2024-09-05T09:00:00",
    department: "Agriculture and Bioresources Education",
    image:
      "https://plus.unsplash.com/premium_photo-1663047504135-9fa32a33ad01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QWdyaWN1bHR1cmFsJTIwSW5ub3ZhdGlvbiUyMFN5bXBvc2l1bXxlbnwwfHwwfHx8MA%3D%3D",
    location: "Agricultural Science Complex",
    upcoming: new Date("2024-09-05T09:00:00") > new Date(),
    content:
      "The Agricultural Innovation Symposium brings together researchers, educators, farmers, and industry partners to explore the latest technologies and practices in sustainable agriculture. Topics include precision farming, climate-smart agriculture, sustainable irrigation systems, and innovative teaching methods for agricultural education. The symposium features keynote speakers, panel discussions, and demonstrations of agricultural technologies.",
  },
  {
    id: 3,
    title: "Digital Education Conference",
    description: "Transforming education through technology",
    date: "2024-09-25T09:00:00",
    department: "Computer and Robotics Education",
    image:
      "https://images.unsplash.com/photo-1726831662513-48fb5f72c6f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RGlnaXRhbCUyMEVkdWNhdGlvbiUyMENvbmZlcmVuY2V8ZW58MHx8MHx8fDA%3D",
    location: "ICT Complex",
    upcoming: new Date("2024-09-25T09:00:00") > new Date(),
    content:
      "The Digital Education Conference focuses on the integration of technology in educational settings. The event features presentations on educational robotics, coding in the classroom, virtual and augmented reality in education, and digital literacy development. Educators will have the opportunity to participate in hands-on workshops and explore the latest educational technologies. The conference aims to equip educators with the knowledge and skills to effectively use technology in their teaching.",
  },
  {
    id: 4,
    title: "Technical Skills Exhibition",
    description: "Showcasing student projects and innovations",
    date: "2024-10-10T10:00:00",
    department: "Industrial Technical Education",
    image:
      "https://plus.unsplash.com/premium_photo-1742926579467-2d57159e3bec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VGVjaG5pY2FsJTIwU2tpbGxzJTIwRXhoaWJpdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    location: "Technical Education Complex",
    upcoming: new Date("2024-10-10T10:00:00") > new Date(),
    content:
      "The annual Technical Skills Exhibition showcases outstanding student projects and innovations from the Department of Industrial Technical Education. Visitors can explore demonstrations of mechanical systems, electrical innovations, technical designs, and industrial solutions developed by our students. The exhibition also features industry partners and potential employers looking to recruit talented graduates.",
  },
  {
    id: 5,
    title: "Culinary Arts Festival",
    description: "Celebrating culinary creativity and innovation",
    date: "2024-10-25T11:00:00",
    department: "Home Economics & Hospitality Management Education",
    image:
      "https://images.unsplash.com/photo-1606046988058-3e5cb90ffd2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q3VsaW5hcnklMjBBcnRzJTIwRmVzdGl2YWx8ZW58MHx8MHx8fDA%3D",
    location: "Hospitality Management Center",
    upcoming: new Date("2024-10-25T11:00:00") > new Date(),
    content:
      "The Culinary Arts Festival celebrates the creativity and skills of students and professionals in the culinary arts. The event features cooking competitions, food demonstrations, nutrition education sessions, and tastings of traditional and innovative cuisine. Visitors can learn about sustainable food practices, nutrition education, and career opportunities in the hospitality and food service industries.",
  },
  {
    id: 6,
    title: "Industrial Partnership Forum",
    description: "Connecting education with industry needs",
    date: "2024-11-15T10:00:00",
    department: "Industrial Technical Education",
    image:
      "https://images.unsplash.com/photo-1640621281434-cac7b4ec6f2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SW5kdXN0cmlhbCUyMFBhcnRuZXJzaGlwJTIwRm9ydW18ZW58MHx8MHx8fDA%3D",
    location: "Faculty Conference Center",
    upcoming: new Date("2024-11-15T10:00:00") > new Date(),
    content:
      "The Industrial Partnership Forum brings together educators and industry representatives to discuss collaboration opportunities, curriculum alignment with industry needs, and internship programs. The forum includes panel discussions, networking sessions, and presentations on industry trends and skill requirements. This event aims to strengthen the connection between technical education and industry to better prepare graduates for the workforce.",
  },
  {
    id: 7,
    title: "Faculty Research Day",
    description: "Showcasing faculty and student research",
    date: "2024-12-05T10:00:00",
    department: "All Departments",
    image: eventsImg,
    location: "Faculty Auditorium",
    upcoming: new Date("2024-12-05T10:00:00") > new Date(),
    content:
      "Faculty Research Day is an annual event that showcases research projects conducted by faculty members and students across all departments. The event features poster presentations, oral presentations, and demonstrations of research findings. This is an excellent opportunity to learn about the diverse research activities within the faculty and to identify potential collaboration opportunities.",
  },
];

// Function to get events
export const getEvents = () => {
  // Return events sorted by date (earlier first)
  return [...events].sort((a, b) => new Date(a.date) - new Date(b.date));
};

// Function to get an event by ID
export const getEventById = (id) => {
  const numId = parseInt(id);
  return events.find((event) => event.id === numId);
};

// Function to get upcoming events
export const getUpcomingEvents = (limit = 3) => {
  const currentDate = new Date();

  // For debugging
  console.log("Current date:", currentDate);

  const upcomingEventsArray = events
    .filter((event) => {
      const eventDate = new Date(event.date);
      // For debugging
      console.log(
        `Event: ${event.title}, Date: ${eventDate}, Is upcoming: ${
          eventDate > currentDate
        }`
      );
      return eventDate > currentDate;
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date)) // Sort by date (earlier first)
    .slice(0, limit);

  // For debugging
  console.log("Upcoming events count:", upcomingEventsArray.length);

  return upcomingEventsArray;
};

// Save events to localStorage for persistence
export const saveEventsToStorage = () => {
  localStorage.setItem("events", JSON.stringify(events));
};

// Load events from localStorage
export const loadEventsFromStorage = () => {
  const storedEvents = localStorage.getItem("events");
  if (storedEvents) {
    return JSON.parse(storedEvents);
  }
  return events;
};

// Initialize localStorage with events data if not already present
export const initEventsStorage = () => {
  if (!localStorage.getItem("events")) {
    saveEventsToStorage();
  }
};
