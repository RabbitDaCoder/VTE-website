import {
  LuLeaf,
  LuBriefcase,
  LuCpu,
  LuHouse,
  LuFactory,
  LuRocket,
  LuUniversity,
  LuUsers,
  LuTrophy,
  LuFlaskConical,
  LuCalendar,
  LuPin, // <-- Add this import for the pinned icon
} from "react-icons/lu";
import {
  FaGraduationCap,
  FaCrown,
  FaHandHoldingHeart,
  FaFlag,
  FaUserFriends,
  FaUserTie,
} from "react-icons/fa";
import JanePics from "../../public/images/testimonial/jane.jpg";
import AyoPics from "../../public/images/testimonial/ayo.jpg";
import JuricPics from "../../public/images/testimonial/jurica.jpg";
import blogImg1 from "../../public/images/blogs/blogImg.jpg";
import eventsImg from "../../public/images/events/eventsImg-1.jpg";
import computer from "../../public/images/departments/computer.jpg";
import mech from "../../public/images/departments/mech.jpg";
import civil from "../../public/images/departments/civil.jpg";
import medicine from "../../public/images/departments/medicine.jpg";
import physics from "../../public/images/departments/physics.jpg";
import { generateID } from "../utils/generateID";
import pinnedImg from "../assets/images/hero-bg.jpg"; // Make sure this path is correct

// Department Data
export const departments = [
  {
    id: 1,
    name: "Agriculture and Bioresources Education",
    icon: LuLeaf,
    image: computer,
    summary:
      "Cultivating knowledge and skills for sustainable agricultural development.",
    description:
      "Agriculture and Bioresources Education is an interdisciplinary field focused on training individuals, particularly future educators and extension workers, in the science, practice, and sustainable management of agricultural systems and natural biological resources.",
    features: [
      "Sustainable Agriculture",
      "Extension Methods",
      "Soil & Crop Science",
      "Livestock Production",
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
    },
  },
  {
    id: 2,
    name: "Business Education",
    icon: LuBriefcase,
    image: mech,
    summary:
      "Equipping future business leaders and educators with essential economic and entrepreneurial skills.",
    description:
      "Our Business Education department focuses on developing educators who can impart vital business acumen, financial literacy, and entrepreneurial spirit to the next generation.",
    features: ["Entrepreneurship", "Accounting", "Marketing", "Business Law"],
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
    },
  },
  {
    id: 3,
    name: "Computer and Robotics Education",
    icon: LuCpu,
    image: civil,
    summary:
      "Innovating teaching methods in computing, AI, and cutting-edge robotics.",
    description:
      "This department is at the forefront of preparing educators to teach the dynamic fields of computer science and robotics, fostering computational thinking and practical engineering skills.",
    features: [
      "Software Development",
      "Robotics Engineering",
      "Networking",
      "Cybersecurity",
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
    },
  },
  {
    id: 4,
    name: "Home Economics and Hospitality Management",
    icon: LuHouse,
    image: medicine,
    summary:
      "Fostering expertise in family welfare, consumer science, and service industry leadership.",
    description:
      "The Home Economics and Hospitality Management department offers a holistic approach to understanding individual, family, and community well-being, alongside rigorous training for careers in the vibrant hospitality sector.",
    features: [
      "Nutrition & Dietetics",
      "Hospitality Operations",
      "Family Resource Management",
      "Textile Arts",
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
    },
  },
  {
    id: 5,
    name: "Industrial Technical Education",
    icon: LuFactory,
    image: physics,
    summary:
      "Developing skilled educators for technical trades and industrial innovation.",
    description:
      "Our Industrial Technical Education department is dedicated to training teachers and professionals in the practical skills and theoretical knowledge required for various technical and industrial fields.",
    features: [
      "Technical Drawing",
      "Electrical Systems",
      "Automotive Technology",
      "Welding & Fabrication",
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
    },
  },
  {
    id: 6,
    name: "Vocational and Entrepreneurship Education",
    icon: LuRocket,
    image: computer,
    summary:
      "Empowering students with practical skills and entrepreneurial mindset for self-reliance.",
    description:
      "This department combines vocational training with entrepreneurial principles, preparing graduates to not only excel in specific trades but also to create and manage their own successful ventures.",
    features: [
      "Entrepreneurship Skills",
      "Small Business Management",
      "Vocational Skills",
      "Financial Planning",
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
        "Vocational Skill Development (e.g., Fashion Design, Cosmetology, Carpentry)",
        "Financial Planning for Startups",
      ],
    },
  },
];

export const studentPresidents = {
  facultyPresident: {
    name: "Comr. Nathan Okoye",
    title: "Faculty Students' President, (VESA)",
    imageUrl: "https://placehold.co/400x400/e0e7ff/4338ca?text=Faculty+Pres.",
  },
  departmentalPresidents: [
    {
      name: "Comr. Eze Chidera Cynthia",
      department:
        "President, Agric and Bioresources Educaiton Students Association",
    },
    {
      name: "Comr. Modestus Chidera",
      department: "President, Business Education Students Association",
    },
    {
      name: "Comr. Chibuzo Daniel O.",
      department:
        "President, Computer and Robotics Education Students Association",
    },
    {
      name: "Comr. Uzoegwu Micheal Kosisochukwu",
      department:
        "President, Home Economics & Hospitality Mgt Education Students Association",
    },
    {
      name: "Comr. Jude Mamah",
      department:
        "President, Industrial Technical Education Students Association",
    },
    {
      name: "Comr. V.V.E",
      department:
        "President, Vocational and Enterprenuership Education Students Association",
    },
  ],
};
export const blogs = [
  {
    id: generateID(),
    title: "Understanding Quantum Computing",
    slug: "understanding-quantum-computing",
    image: blogImg1,
    tags: ["Quantum", "Computing", "Physics", "Technology"],
    date: "2024-06-01",
    author: "Dr. Ada Quantum",
    content: `Quantum computing is a rapidly evolving field that leverages the principles of quantum mechanics to process information in fundamentally different ways than classical computers.

This blog dives into the basics of qubits, superposition, and entanglement, exploring how these principles are utilized in quantum algorithms like Shor’s and Grover’s.

**Key Takeaways:**
- Qubits vs. classical bits
- Quantum gates and circuits
- Real-world applications and challenges`,
  },
  {
    id: generateID(),
    title: "The Future of Artificial Intelligence",
    slug: "future-of-artificial-intelligence",
    image: blogImg1,
    tags: ["AI", "Machine Learning", "Technology", "Future"],
    date: "2024-06-10",
    author: "Sophia Neural",
    content: `Artificial intelligence (AI) is transforming industries and reshaping the way we interact with technology. From machine learning to natural language processing, AI is paving the way for innovative solutions.

Explore emerging trends, ethical debates, and how AI is embedded into everyday applications.

**Highlights:**
- AI in healthcare, finance, and education
- The ethics of AI and bias
- The future of work in an AI-driven world`,
  },
  {
    id: generateID(),
    title: "Advancements in Renewable Energy",
    slug: "advancements-in-renewable-energy",
    image: blogImg1,
    tags: ["Renewable Energy", "Climate", "Sustainability", "Green Tech"],
    date: "2024-06-15",
    author: "Evan Solar",
    content: `Renewable energy sources like solar, wind, and hydroelectric power are becoming increasingly important in the fight against climate change.

This blog explores the latest innovations in solar panel technology, wind turbine efficiency, and grid integration strategies.

**What you'll learn:**
- How solar panels are getting cheaper and more efficient
- The rise of offshore wind farms
- Smart grids and energy storage`,
  },
  {
    id: generateID(),
    title: "Exploring the Metaverse",
    slug: "exploring-the-metaverse",
    image: blogImg1,
    tags: ["Metaverse", "AR/VR", "Virtual Reality", "Technology"],
    date: "2024-06-20",
    author: "Jordan Immersive",
    content: `The metaverse is a virtual universe that combines augmented reality, virtual reality, and the internet.

It offers immersive experiences and new opportunities for social interaction, entertainment, and commerce.

**Topics covered:**
- What is the metaverse?
- AR/VR devices and platforms
- The future of digital communities`,
  },
  {
    id: generateID(),
    title: "Cybersecurity in the Digital Age",
    slug: "cybersecurity-in-the-digital-age",
    image: blogImg1,
    tags: ["Cybersecurity", "Data Protection", "Tech Trends", "Hacking"],
    date: "2024-06-22",
    author: "Alex Shield",
    content: `As our reliance on digital technologies grows, so does the importance of cybersecurity.

This blog discusses the latest trends and best practices in protecting sensitive information from cyber threats, and how to stay safe online.

**Read about:**
- Common cyber threats and how to avoid them
- The importance of strong passwords
- The future of cybersecurity`,
  },
  {
    id: generateID(),
    title: "The Rise of Blockchain Technology",
    slug: "rise-of-blockchain-technology",
    image: blogImg1,
    tags: ["Blockchain", "Cryptocurrency", "Finance", "Security"],
    date: "2024-06-25",
    author: "Nina Ledger",
    content: `Blockchain technology is revolutionizing industries by providing secure and transparent ways to record transactions.

This blog explores its applications beyond cryptocurrencies, including supply chain, healthcare, and digital identity.

**You'll discover:**
- How blockchain works
- Real-world use cases
- The future of decentralized tech`,
  },
  {
    id: generateID(),
    title: "Understanding Quantum Computing",
    slug: "understanding-quantum-computing",
    image: blogImg1,
    tags: ["Quantum", "Computing", "Physics", "Technology"],
    date: "2024-06-01",
    author: "Dr. Ada Quantum",
    content: `Quantum computing is a rapidly evolving field that leverages the principles of quantum mechanics to process information in fundamentally different ways than classical computers.

This blog dives into the basics of qubits, superposition, and entanglement, exploring how these principles are utilized in quantum algorithms like Shor’s and Grover’s.

**Key Takeaways:**
- Qubits vs. classical bits
- Quantum gates and circuits
- Real-world applications and challenges`,
  },
  {
    id: generateID(),
    title: "The Future of Artificial Intelligence",
    slug: "future-of-artificial-intelligence",
    image: blogImg1,
    tags: ["AI", "Machine Learning", "Technology", "Future"],
    date: "2024-06-10",
    author: "Sophia Neural",
    content: `Artificial intelligence (AI) is transforming industries and reshaping the way we interact with technology. From machine learning to natural language processing, AI is paving the way for innovative solutions.

Explore emerging trends, ethical debates, and how AI is embedded into everyday applications.

**Highlights:**
- AI in healthcare, finance, and education
- The ethics of AI and bias
- The future of work in an AI-driven world`,
  },
  {
    id: generateID(),
    title: "Advancements in Renewable Energy",
    slug: "advancements-in-renewable-energy",
    image: blogImg1,
    tags: ["Renewable Energy", "Climate", "Sustainability", "Green Tech"],
    date: "2024-06-15",
    author: "Evan Solar",
    content: `Renewable energy sources like solar, wind, and hydroelectric power are becoming increasingly important in the fight against climate change.

This blog explores the latest innovations in solar panel technology, wind turbine efficiency, and grid integration strategies.

**What you'll learn:**
- How solar panels are getting cheaper and more efficient
- The rise of offshore wind farms
- Smart grids and energy storage`,
  },
  {
    id: generateID(),
    title: "Exploring the Metaverse",
    slug: "exploring-the-metaverse",
    image: blogImg1,
    tags: ["Metaverse", "AR/VR", "Virtual Reality", "Technology"],
    date: "2024-06-20",
    author: "Jordan Immersive",
    content: `The metaverse is a virtual universe that combines augmented reality, virtual reality, and the internet.

It offers immersive experiences and new opportunities for social interaction, entertainment, and commerce.

**Topics covered:**
- What is the metaverse?
- AR/VR devices and platforms
- The future of digital communities`,
  },
  {
    id: generateID(),
    title: "Cybersecurity in the Digital Age",
    slug: "cybersecurity-in-the-digital-age",
    image: blogImg1,
    tags: ["Cybersecurity", "Data Protection", "Tech Trends", "Hacking"],
    date: "2024-06-22",
    author: "Alex Shield",
    content: `As our reliance on digital technologies grows, so does the importance of cybersecurity.

This blog discusses the latest trends and best practices in protecting sensitive information from cyber threats, and how to stay safe online.

**Read about:**
- Common cyber threats and how to avoid them
- The importance of strong passwords
- The future of cybersecurity`,
  },
  {
    id: generateID(),
    title: "The Rise of Blockchain Technology",
    slug: "rise-of-blockchain-technology",
    image: blogImg1,
    tags: ["Blockchain", "Cryptocurrency", "Finance", "Security"],
    date: "2024-06-25",
    author: "Nina Ledger",
    content: `Blockchain technology is revolutionizing industries by providing secure and transparent ways to record transactions.

This blog explores its applications beyond cryptocurrencies, including supply chain, healthcare, and digital identity.

**You'll discover:**
- How blockchain works
- Real-world use cases
- The future of decentralized tech`,
  },
];
export const notices = [
  {
    id: 1,
    title: "Notice 1",
    content: "This is the content of notice 1.",
    date: "2023-10-01",
  },
  {
    id: 2,
    title: "Notice 2",
    content: "This is the content of notice 2.",
    date: "2023-10-02",
  },
  {
    id: 3,
    title: "Notice 3",
    content: "This is the content of notice 3.",
    date: "2023-10-03",
  },
  {
    id: 4,
    title: "Notice 4",
    content: "This is the content of notice 4.",
    date: "2023-10-04",
  },

  {
    id: 5,
    title: "Notice 5",
    content: "This is the content of notice 5.",
    date: "2023-10-05",
  },
  {
    id: 6,
    title: "Notice 6",
    content: "This is the content of notice 6.",
    date: "2023-10-06",
  },
  {
    id: 7,
    title: "Notice 7",
    content: "This is the content of notice 7.",
    date: "2023-10-07",
  },
];
export const events = [
  {
    id: 1,
    title: "How to become an entrepreneur & Self dependent",
    description: "Convocation Ceremony",
    date: "2025-02-26T10:13:00",
    department: "Business Administration",
    image: eventsImg,
    location: "Auditorium A",
    upcoming: new Date("2025-02-26T10:13:00") > new Date(),
    content:
      "Join us for an inspiring convocation ceremony focused on entrepreneurship and self-dependence. Learn from successful entrepreneurs and discover practical steps to start your own venture.",
  },
  {
    id: 2,
    title: "Leadership in Modern Times",
    description: "Convocation Ceremony",
    date: "2025-04-05T12:16:00",
    department: "Management",
    image: eventsImg,
    location: "Main Conference Hall",
    upcoming: new Date("2025-04-05T12:16:00") > new Date(),
    content:
      "This convocation ceremony will explore the qualities and skills needed for effective leadership in today's fast-changing world. Network with industry leaders and gain valuable insights.",
  },
  {
    id: 3,
    title: "Innovation in Technology",
    description: "Tech Meetup",
    date: "2025-06-30T09:14:00",
    department: "Computer Science",
    image: eventsImg,
    location: "Tech Lab 2",
    upcoming: new Date("2025-06-30T09:14:00") > new Date(),
    content:
      "A tech meetup dedicated to the latest innovations in technology. Engage with tech enthusiasts, attend workshops, and see live demos of cutting-edge solutions.",
  },
  {
    id: 4,
    title: "Tech Symposium 2025",
    department: "Computer Science",
    date: "2025-08-02T10:00:00",
    image: eventsImg,
    location: "Auditorium B",
    description: "A gathering of minds in tech.",
    upcoming: new Date("2025-08-02T10:00:00") > new Date(),
    content:
      "Join the brightest minds in technology for a day of talks, networking, and innovation at the Tech Symposium 2025.",
  },
  {
    id: 5,
    title: "AI & Robotics Expo",
    department: "Computer Science",
    date: "2025-10-15T14:00:00",
    image: eventsImg,
    location: "Innovation Center",
    description: "Exploring future technologies and AI innovations.",
    upcoming: new Date("2025-10-15T14:00:00") > new Date(),
    content:
      "Experience the future at the AI & Robotics Expo. See the latest in artificial intelligence and robotics, with live demos and expert panels.",
  },
  {
    id: 6,
    title: "Math Carnival",
    department: "Mathematics",
    date: "2025-09-12T11:00:00",
    image: eventsImg,
    location: "Math Block",
    description: "A celebration of numbers and formulas.",
    upcoming: new Date("2025-09-12T11:00:00") > new Date(),
    content:
      "Celebrate the beauty of mathematics with games, puzzles, and interactive sessions at the Math Carnival.",
  },
  {
    id: 7,
    title: "Statistics & Probability Workshop",
    department: "Mathematics",
    date: "2025-11-05T13:30:00",
    image: eventsImg,
    location: "Room 204",
    description: "Hands-on learning for data and chance lovers.",
    upcoming: new Date("2025-11-05T13:30:00") > new Date(),
    content:
      "Dive deep into statistics and probability with hands-on workshops and real-world data challenges.",
  },
  {
    id: 8,
    title: "Physics in Everyday Life",
    department: "Physics",
    date: "2025-07-20T09:00:00",
    image: eventsImg,
    location: "Physics Lecture Hall",
    description: "Discover how physics powers our world.",
    upcoming: new Date("2025-07-20T09:00:00") > new Date(),
    content:
      "Explore the wonders of physics in daily life through fun experiments and engaging talks.",
  },
  {
    id: 9,
    title: "Astrophysics Lecture Series",
    department: "Physics",
    date: "2025-10-01T15:00:00",
    image: eventsImg,
    location: "Science Auditorium",
    description: "Dive into space, time, and celestial bodies.",
    upcoming: new Date("2025-10-01T15:00:00") > new Date(),
    content:
      "Join leading astrophysicists as they unravel the mysteries of the universe in this special lecture series.",
  },
  {
    id: 10,
    title: "ChemFest 2025",
    department: "Chemistry",
    date: "2025-09-22T12:00:00",
    image: eventsImg,
    location: "Chemistry Lab",
    description: "Chemistry exhibition and interactive sessions.",
    upcoming: new Date("2025-09-22T12:00:00") > new Date(),
    content:
      "Participate in ChemFest 2025 for exciting chemistry experiments, exhibitions, and interactive learning.",
  },
  {
    id: 11,
    title: "Organic Chemistry Bootcamp",
    department: "Chemistry",
    date: "2025-11-10T16:00:00",
    image: eventsImg,
    location: "Lab 5",
    description: "Get ready to master organic reactions.",
    upcoming: new Date("2025-11-10T16:00:00") > new Date(),
    content:
      "Master organic chemistry with intensive sessions and expert guidance at the Organic Chemistry Bootcamp.",
  },
  {
    id: 12,
    title: "BioCon 2025",
    department: "Biological Sciences",
    date: "2025-08-18T10:30:00",
    image: eventsImg,
    location: "Bio Auditorium",
    description: "Conference on biological advances and research.",
    upcoming: new Date("2025-08-18T10:30:00") > new Date(),
    content:
      "Join researchers and students at BioCon 2025 to discuss the latest advances in biological sciences.",
  },
  {
    id: 13,
    title: "Genetics for the Future",
    department: "Biological Sciences",
    date: "2025-12-03T13:00:00",
    image: eventsImg,
    location: "Genetics Center",
    description: "Explore the future of genes and medicine.",
    upcoming: new Date("2025-12-03T13:00:00") > new Date(),
    content:
      "Discover the future of genetics and medicine with talks from leading scientists and hands-on workshops.",
  },
];

export const features = [
  {
    icon: LuUniversity,
    iconClass: "text-3xl text-blue-700",
    label: "Campus Life",
  },
  {
    icon: LuCalendar,
    iconClass: "text-3xl text-blue-400",
    label: "Events",
  },
  {
    icon: LuCalendar,
    iconClass: "text-3xl text-blue-400",
    label: "Events",
  },
  {
    icon: LuFlaskConical,
    iconClass: "text-3xl text-purple-700",
    label: "Research Works",
    stat: 2000,
    statLabel: "Research Works",
  },
  {
    icon: LuUsers,
    iconClass: "text-3xl text-blue-500",
    label: "Graduated Students",
    stat: 20000,
    statLabel: "Graduated Students",
  },
  {
    icon: LuTrophy,
    iconClass: "text-3xl text-purple-500",
    label: "Achievements",
    stat: 1000,
    statLabel: "Achievements",
  },
];
export const benefits = [
  {
    title: "Holistic Learning Approach",
    description:
      "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
    icon: FaGraduationCap,
    iconClass: "text-xl",
  },
  {
    title: "Experienced Educators",
    description:
      "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
    icon: FaCrown,
    iconClass: "text-xl",
  },
  {
    title: "Nurturing Environment",
    description:
      "We prioritize safety and provide a warm and caring atmosphere for every child.",
    icon: FaHandHoldingHeart,
    iconClass: "text-xl",
  },
  {
    title: "Play-Based Learning",
    description:
      "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
    icon: FaFlag,
    iconClass: "text-xl",
  },
  {
    title: "Individualized Attention",
    description:
      "Our small class sizes enable personalized attention, catering to each child's unique needs.",
    icon: FaUserFriends,
    iconClass: "text-xl",
  },
  {
    title: "Parent Involvement",
    description:
      "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
    icon: FaUserTie,
    iconClass: "text-xl",
  },
];

export const testimonials = [
  {
    name: "Jane Doe",
    profession: "Software Engineer",
    title: "Amazing Experience",
    content:
      "VTE provided me with the skills and confidence to excel in my career. The faculty and environment are top-notch!",
    image: JanePics,
  },
  {
    name: "John Smith",
    profession: "Mechanical Engineer",
    title: "Supportive Community",
    content:
      "The support and resources available at VTE made my learning journey enjoyable and fruitful.",
    image: AyoPics,
  },
  {
    name: "Emily Stone",
    profession: "Electrical Engineer",
    title: "Truly Transformative",
    content:
      "From quality lectures to real-world projects, my time at VTE was both rewarding and transformative.",
    image: JuricPics,
  },
  {
    name: "Jane Doe",
    profession: "Software Engineer",
    title: "Amazing Experience",
    content:
      "VTE provided me with the skills and confidence to excel in my career. The faculty and environment are top-notch!",
    image: JanePics,
  },
  {
    name: "John Smith",
    profession: "Mechanical Engineer",
    title: "Supportive Community",
    content:
      "The support and resources available at VTE made my learning journey enjoyable and fruitful.",
    image: AyoPics,
  },
  {
    name: "Emily Stone",
    profession: "Electrical Engineer",
    title: "Truly Transformative",
    content:
      "From quality lectures to real-world projects, my time at VTE was both rewarding and transformative.",
    image: JuricPics,
  },
  {
    name: "Jane Doe",
    profession: "Software Engineer",
    title: "Amazing Experience",
    content:
      "VTE provided me with the skills and confidence to excel in my career. The faculty and environment are top-notch!",
    image: JanePics,
  },
  {
    name: "John Smith",
    profession: "Mechanical Engineer",
    title: "Supportive Community",
    content:
      "The support and resources available at VTE made my learning journey enjoyable and fruitful.",
    image: AyoPics,
  },
  {
    name: "Emily Stone",
    profession: "Electrical Engineer",
    title: "Truly Transformative",
    content:
      "From quality lectures to real-world projects, my time at VTE was both rewarding and transformative.",
    image: JuricPics,
  },
  {
    name: "Jane Doe",
    profession: "Software Engineer",
    title: "Amazing Experience",
    content:
      "VTE provided me with the skills and confidence to excel in my career. The faculty and environment are top-notch!",
    image: JanePics,
  },
  {
    name: "John Smith",
    profession: "Mechanical Engineer",
    title: "Supportive Community",
    content:
      "The support and resources available at VTE made my learning journey enjoyable and fruitful.",
    image: AyoPics,
  },
  {
    name: "Emily Stone",
    profession: "Electrical Engineer",
    title: "Truly Transformative",
    content:
      "From quality lectures to real-world projects, my time at VTE was both rewarding and transformative.",
    image: JuricPics,
  },
  {
    name: "Jane Doe",
    profession: "Software Engineer",
    title: "Amazing Experience",
    content:
      "VTE provided me with the skills and confidence to excel in my career. The faculty and environment are top-notch!",
    image: JanePics,
  },
  {
    name: "John Smith",
    profession: "Mechanical Engineer",
    title: "Supportive Community",
    content:
      "The support and resources available at VTE made my learning journey enjoyable and fruitful.",
    image: AyoPics,
  },
  {
    name: "Emily Stone",
    profession: "Electrical Engineer",
    title: "Truly Transformative",
    content:
      "From quality lectures to real-world projects, my time at VTE was both rewarding and transformative.",
    image: JuricPics,
  },
];

export const downloads = [
  { name: "CRE 123 PDF", desc: "Intro to Software", size: "2MB" },
  { name: "GSP 101 Notes", desc: "Use of English", size: "1.5MB" },
  { name: "MTH 111 Guide", desc: "General Mathematics", size: "3MB" },
  { name: "PHY 101 Lab Manual", desc: "Physics Experiments", size: "4MB" },
  {
    name: "CHE 202 Organic Chemistry",
    desc: "Organic Chemistry Concepts",
    size: "2.5MB",
  },
  {
    name: "BIO 101 Introductory Biology",
    desc: "Cell Biology and Genetics",
    size: "3.5MB",
  },
  {
    name: "ECO 201 Macroeconomics",
    desc: "National Income and GDP",
    size: "2MB",
  },
  {
    name: "ACC 101 Financial Accounting",
    desc: "Basic Accounting Principles",
    size: "1.8MB",
  },
  {
    name: "MGT 301 Principles of Management",
    desc: "Management Theories and Practices",
    size: "2.2MB",
  },
  {
    name: "ENG 101 English Composition",
    desc: "Writing and Rhetoric",
    size: "1.2MB",
  },
];

// Example pinned and all notices (replace with your real data)
export const pinnedNotices = [
  {
    id: 1,
    title: "Tech Acquisition by Cresa Tech Society",
    content:
      "New advanced equipment has been acquired for student and faculty use across all departments.",
    image: pinnedImg,
    button: "Learn More",
    department: "Computer and Robotics Education",
    date: "2025-06-01",
    icon: LuPin, // <-- Add this line for the icon
  },
];

export const allNotices = [
  ...pinnedNotices,
  {
    id: 2,
    title: "Semester Exams Timetable Released",
    date: "2025-06-20",
    category: "Academic",
    summary: "Students can now view the full semester timetable online.",
    department: "Business Education",
  },
  {
    id: 3,
    title: "Lab Safety Training",
    date: "2025-06-10",
    category: "Training",
    summary: "Mandatory for all science students this July.",
    department: "Industrial Technical Education",
  },
  {
    id: 4,
    title: "Departmental Seminar",
    date: "2025-06-15",
    category: "Seminar",
    summary: "Join the seminar on modern teaching methods.",
    department: "Vocational and Entrepreneurship Education",
  },
  {
    id: 5,
    title: "New Hostel Allocation",
    date: "2025-06-18",
    category: "Welfare",
    summary: "Hostel allocation list for new students is out.",
    department: "Home Economics and Hospitality Management",
  },
  {
    id: 6,
    title: "Research Grant Opportunity",
    date: "2025-06-22",
    category: "Research",
    summary: "Apply for the 2025 VTE research grant.",
    department: "Agriculture and Bioresources Education",
  },
];
