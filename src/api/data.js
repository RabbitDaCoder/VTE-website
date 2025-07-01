import {
  LuUniversity,
  LuUsers,
  LuTrophy,
  LuFlaskConical,
  LuCalendar,
  LuLaptop,
  LuSettings,
  LuBuilding2,
  LuStethoscope,
  LuAtom,
  LuPalette,
  LuGlobe,
  LuCalculator,
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
import computer from "../../public/images/departments/computer.jpg";
import mech from "../../public/images/departments/mech.jpg";
import civil from "../../public/images/departments/civil.jpg";
import medicine from "../../public/images/departments/medicine.jpg";
import physics from "../../public/images/departments/physics.jpg";
import blogImg1 from "../../public/images/blogs/blogImg.jpg";

import eventsImg2 from "../../public/images/events/eventsImg-2.jpg";
import eventsImg from "../../public/images/events/eventsImg-1.jpg";
import eventsImg3 from "../../public/images/events/eventsImg-3.jpg";
import { generateID } from "../utils/generateID";
export const departments = [
  {
    id: 1,
    name: "Computer Science",
    description: "Explore the world of algorithms, software, and AI.",
    icon: LuLaptop,
    image: computer,
    features: [
      "Software Engineering",
      "Artificial Intelligence",
      "Cybersecurity",
      "Data Science",
    ],
  },
  {
    id: 2,
    name: "Mechanical Engineering",
    description: "Design, analyze, and manufacture mechanical systems.",
    icon: LuSettings,
    image: mech,
    features: ["Thermodynamics", "Robotics", "CAD/CAM", "Fluid Mechanics"],
  },
  {
    id: 3,
    name: "Civil Engineering",
    description: "Shape the world with infrastructure and construction.",
    icon: LuBuilding2,
    image: civil,
    features: [
      "Structural Design",
      "Geotechnical Engineering",
      "Transportation",
      "Water Resources",
    ],
  },
  {
    id: 4,
    name: "Medicine",
    description: "Train to save lives and advance healthcare.",
    icon: LuStethoscope,
    image: medicine,
    features: [
      "Clinical Practice",
      "Medical Research",
      "Surgery",
      "Pharmacology",
    ],
  },
  {
    id: 5,
    name: "Physics",
    description: "Unravel the mysteries of the universe.",
    icon: LuAtom,
    image: physics,
    features: [
      "Quantum Mechanics",
      "Astrophysics",
      "Material Science",
      "Electromagnetism",
    ],
  },
];
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
  // Add more blogs with unique images and content as needed...
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
    image: eventsImg,
  },
  {
    id: 2,
    title: "Leadership in Modern Times",
    description: "Convocation Ceremony",
    date: "2025-04-05T12:16:00",
    image: eventsImg2,
  },
  {
    id: 3,
    title: "Innovation in Technology",
    description: "Tech Meetup",
    date: "2025-06-30T09:14:00",
    image: eventsImg3,
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
