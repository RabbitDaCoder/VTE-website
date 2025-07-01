// SVG icons for the departments of VTE
const AgriIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-blue-500">
    <path d="M11 2a2 2 0 0 0-2 2v5l-3 3 3 3v5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-5l3-3-3-3V4a2 2 0 0 0-2-2z" />
    <path d="M7 15l-5 5" />
    <path d="M17 15l5 5" />
  </svg>
); 

const BusinessIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-blue-500">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
); 

const ComputerRoboticsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-blue-500">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M6 18h12" />
    <line x1="12" y1="17" x2="12" y2="21"></line>
    <circle cx="9" cy="10" r="1"></circle>
    <circle cx="15" cy="10" r="1"></circle>
    <path d="M12 14c-1.66 0-3-1.34-3-3h6c0 1.66-1.34 3-3 3z" />
  </svg>
); 

const HomeHospitalityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-blue-500">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
); // Classic house icon, often used for home or shelter

const IndustrialTechIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-blue-500">
    <path d="M2 17l10 5 10-5" />
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 12l10 5 10-5" />
    <path d="M12 22l10-5" />
    <line x1="12" y1="12" x2="12" y2="22" />
    <circle cx="12" cy="12" r="3" />
  </svg>
); 

const VocationalEntrepreneurshipIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-blue-500">
    <path d="M13 7L18.66 12 13 17" />
    <path d="M6 12h12" />
    <circle cx="4" cy="12" r="2" />
    <path d="M17.5 17.5l-3.5 3.5 1-1" />
    <path d="M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
  </svg>
); 

// Updated mock data for the departments
const departmentsData = [
  {
    id: 1,
    name: 'Agriculture and Bioresources Education',
    icon: <AgriIcon />,
    summary: 'Cultivating knowledge and skills for sustainable agricultural development.',
    details: {
      head: 'Prof. Toochukwu E. Ejiofor',
      faculty: ['Dr. Crop Science', 'Prof. Soil Health', 'Dr. Animal Husbandry'],
      coreCourses: ['Agronomy Principles', 'Livestock Production', 'Agricultural Economics', 'Extension Methods'],
      description: 'Agriculture and Bioresources Education is an interdisciplinary field focused on training individuals, particularly future educators and extension workers, in the science, practice, and sustainable management of agricultural systems and natural biological resources.'
    }
  },
  {
    id: 2,
    name: 'Business Education',
    icon: <BusinessIcon />,
    summary: 'Equipping future business leaders and educators with essential economic and entrepreneurial skills.',
    details: {
      head: 'Dr. E.O. Ugwuoke',
      faculty: ['Prof. Market Trends', 'Dr. Financial Literacy', 'Prof. Entrepreneurship Strategy'],
      coreCourses: ['Principles of Business', 'Accounting for Educators', 'Marketing Fundamentals', 'Business Law'],
      description: 'Our Business Education department focuses on developing educators who can impart vital business acumen, financial literacy, and entrepreneurial spirit to the next generation.'
    }
  },
  {
    id: 3,
    name: 'Computer and Robotics Education',
    icon: <ComputerRoboticsIcon />,
    summary: 'Innovating teaching methods in computing, AI, and cutting-edge robotics.',
    details: {
      head: 'Dr. Ifeoma B. Onah',
      faculty: ['Prof. Ibezim Nnenna', 'Asso. Prof. Emma Nwangwu', 'Asso. Prof. C.J. Olelewe', 'Dr. Nick Eze', 'Dr. Chukwuma Mgboji', 'Dr. Charles Chiamogu'],
      coreCourses: ['Software Development', 'Robotics Engineering', 'Hardware Maintenance', 'Networking', 'Cybersecurity', 'Artificial Intelligence'],
      description: 'This department is at the forefront of preparing educators to teach the dynamic fields of computer science and robotics, fostering computational thinking and practical engineering skills.'
    }
  },
  {
    id: 4,
    name: 'Home Economics and Hospitality Management',
    icon: <HomeHospitalityIcon />,
    summary: 'Fostering expertise in family welfare, consumer science, and service industry leadership.',
    details: {
      head: 'Asso. Prof. Amaka Chukwuone',
      faculty: ['Prof. Ngozi. Eze', 'Dr. A. Ezeanwu', 'Dr. Patricia Kalu'],
      coreCourses: ['Nutrition and Dietetics', 'Hospitality Operations', 'Family Resource Management', 'Textile Arts and Design'],
      description: 'The Home Economics and Hospitality Management department offers a holistic approach to understanding individual, family, and community well-being, alongside rigorous training for careers in the vibrant hospitality sector.'
    }
  },
  {
    id: 5,
    name: 'Industrial Technical Education',
    icon: <IndustrialTechIcon />,
    summary: 'Developing skilled educators for technical trades and industrial innovation.',
    details: {
      head: 'Asso. Prof. Jimoh Bakere',
      faculty: ['Prof. Workshop Safety', 'Dr. Advanced Manufacturing', 'Prof. Vocational Didactics'],
      coreCourses: ['Technical Drawing', 'Electrical Systems', 'Automotive Technology', 'Welding and Fabrication'],
      description: 'Our Industrial Technical Education department is dedicated to training teachers and professionals in the practical skills and theoretical knowledge required for various technical and industrial fields.'
    }
  },
  {
    id: 6,
    name: 'Vocational and Entrepreneurship Education',
    icon: <VocationalEntrepreneurshipIcon />,
    summary: 'Empowering students with practical skills and entrepreneurial mindset for self-reliance.',
    details: {
      head: 'Dr. Okereke',
      faculty: ['Prof. Startup Dynamics', 'Dr. Skill Acquisition', 'Prof. Microfinance'],
      coreCourses: ['Entrepreneurship Skills', 'Small Business Management', 'Vocational Skill Development (e.g., Fashion Design, Cosmetology, Carpentry)', 'Financial Planning for Startups'],
      description: 'This department combines vocational training with entrepreneurial principles, preparing graduates to not only excel in specific trades but also to create and manage their own successful ventures.'
    }
  },
];