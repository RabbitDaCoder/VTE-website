import eventsImg from "../../../public/images/events/eventsImg-1.jpg";

// Events data with sequential IDs
export const events = [
  {
    id: 1,
    title: "Entrepreneurship Development Workshop",
    description: "Practical skills for business creation and management",
    date: "2024-08-15T10:00:00",
    department: "Vocational and Entrepreneurship Education",
    image: eventsImg,
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
    image: eventsImg,
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
    image: eventsImg,
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
    image: eventsImg,
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
    image: eventsImg,
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
    image: eventsImg,
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
  {
    id: 8,
    title: "Educational Leadership Symposium",
    description: "Developing effective educational leaders",
    date: "2025-01-20T09:00:00",
    department: "All Departments",
    image: eventsImg,
    location: "Faculty Conference Center",
    upcoming: new Date("2025-01-20T09:00:00") > new Date(),
    content:
      "The Educational Leadership Symposium focuses on developing effective leadership skills for educational settings. Topics include strategic planning for educational institutions, managing educational change, building effective teams, and promoting inclusive education. The symposium is designed for current and aspiring educational leaders, including department heads, school administrators, and educational policy makers.",
  },
];

// Function to get events
export const getEvents = () => {
  return events;
};

// Function to get an event by ID
export const getEventById = (id) => {
  const numId = parseInt(id);
  return events.find(event => event.id === numId);
};

// Function to get upcoming events
export const getUpcomingEvents = (limit = 3) => {
  return events
    .filter(event => new Date(event.date) > new Date())
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, limit);
};

// Save events to localStorage for persistence
export const saveEventsToStorage = () => {
  localStorage.setItem('events', JSON.stringify(events));
};

// Load events from localStorage
export const loadEventsFromStorage = () => {
  const storedEvents = localStorage.getItem('events');
  if (storedEvents) {
    return JSON.parse(storedEvents);
  }
  return events;
};

// Initialize localStorage with events data if not already present
export const initEventsStorage = () => {
  if (!localStorage.getItem('events')) {
    saveEventsToStorage();
  }
};