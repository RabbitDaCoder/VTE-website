import React from 'react'; // useState is no longer needed for internal expansion
import VteLogoBackground from "../assets/images/hero-bg.jpg";
import StudentsColProjects from '../assets/images/students_collabo_project.png';
import FacultyPresident from '../assets/images/faculty_president.png';
import ProfilePlaceholder from '../assets/images/profile_placeholder.jpg';
import { Link } from 'react-router-dom';

// SVG icons for the departments of VTE (These remain unchanged)
const AgriIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-green-500">
        <path d="M11 2a2 2 0 0 0-2 2v5l-3 3 3 3v5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-5l3-3-3-3V4a2 2 0 0 0-2-2z" />
        <path d="M7 15l-5 5" />
        <path d="M17 15l5 5" />
    </svg>
);

const BusinessIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-green-500">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
    </svg>
);

const ComputerRoboticsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-green-500">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M6 18h12" />
        <line x1="12" y1="17" x2="12" y2="21"></line>
        <circle cx="9" cy="10" r="1"></circle>
        <circle cx="15" cy="10" r="1"></circle>
        <path d="M12 14c-1.66 0-3-1.34-3-3h6c0 1.66-1.34 3-3 3z" />
    </svg>
);

const HomeHospitalityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-green-500">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
);

const IndustrialTechIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-green-500">
        <path d="M2 17l10 5 10-5" />
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 12l10 5 10-5" />
        <path d="M12 22l10-5" />
        <line x1="12" y1="12" x2="12" y2="22" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);

const VocationalEntrepreneurshipIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-green-500">
        <path d="M13 7L18.66 12 13 17" />
        <path d="M6 12h12" />
        <circle cx="4" cy="12" r="2" />
        <path d="M17.5 17.5l-3.5 3.5 1-1" />
        <path d="M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
    </svg>
);

// Updated mock data for the departments - ADDED externalLink
const departmentsData = [
    {
        id: 1,
        name: 'Agriculture and Bioresources Education',
        icon: <AgriIcon />,
        summary: 'Cultivating knowledge and skills for sustainable agricultural development.',
        externalLink: '/departments/agriculture', // Placeholder link
        details: { // 'details' object is still here in data but won't be rendered directly
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
        externalLink: '/departments/business', // Placeholder link
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
        externalLink: '/departments/computer-robotics', // Placeholder link
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
        externalLink: '/departments/home-hospitality', // Placeholder link
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
        externalLink: '/departments/industrial-tech', // Placeholder link
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
        externalLink: '/departments/vocational-entrepreneurship', // Placeholder link
        details: {
            head: 'Dr. Okereke',
            faculty: ['Prof. Startup Dynamics', 'Dr. Skill Acquisition', 'Prof. Microfinance'],
            coreCourses: ['Entrepreneurship Skills', 'Small Business Management', 'Vocational Skill Development (e.g., Fashion Design, Cosmetology, Carpentry)', 'Financial Planning for Startups'],
            description: 'This department combines vocational training with entrepreneurial principles, preparing graduates to not only excel in specific trades but also to create and manage their own successful ventures.'
        }
    },
];

// Mock data for student presidents (remains unchanged)
const studentPresidentsData = {
    facultyPresident: {
        name: 'Comr. Nathan Okoye',
        title: 'Faculty Students\' President, (VESA)',
        imageUrl: 'https://placehold.co/400x400/e0e7ff/4338ca?text=Faculty+Pres.'
    },
    departmentalPresidents: [
        { name: 'Comr. Eze Chidera Cynthia', department: 'President, Agric and Bioresources Educaiton Students Association' },
        { name: 'Comr. Modestus Chidera', department: 'President, Business Education Students Association' },
        { name: 'Comr. Chibuzo Daniel O.', department: 'President, Computer and Robotics Education Students Association' },
        { name: 'Comr. Uzoegwu Micheal Kosisochukwu', department: 'President, Home Economics & Hospitality Mgt Education Students Association' },
        { name: 'Comr. Jude Mamah', department: 'President, Industrial Technical Education Students Association' },
        { name: 'Comr. V.V.E', department: 'President, Vocational and Enterprenuership Education Students Association', }
    ]
};


const DepartmentsPage = () => {
    // No state management for 'openDetails' or modal needed anymore

    return (
        <div className="bg-gray-50 font-sans">

            {/* 1. HERO SECTION */}
            <section
                className="bg-cover bg-center h-96 text-white bg-opacity-50"
                style={{ backgroundImage: `url(${VteLogoBackground})` }} >
                <div className="flex items-center justify-center h-full w-full bg-black-900 bg-opacity-25 text-sm/">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-green-200">EXPLORE OUR DEPARTMENT</h1>
                        <br />
                    </div>
                </div>
            </section>
            {/* Main content wrapper */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* 2. DEPARTMENTS GRID (Card Format - Direct Link) */}
                <section id="departments" className="scroll-mt-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl"> THE DEPARTMENTS IN VTE</h2>
                        <p className="mt-4 text-lg text-black">Click on a department to learn more about its focus, faculty, and opportunities.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"> {/* Use items-stretch for uniform height if content varies */}
                        {departmentsData.map((dept) => (
                            <div
                                key={dept.id}
                                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out p-6 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="flex-shrink-0">{React.cloneElement(dept.icon, { className: 'h-10 w-10 text-blue-600' })}</div>
                                        <h3 className="text-xl font-bold text-green-900">{dept.name}</h3>
                                    </div>
                                    <p className="text-gray-700 mb-4">{dept.summary}</p>

                                    {/* No expandable details rendered here */}
                                </div>

                                {/* The "See More" button is now an anchor tag */}
                                <Link to={`/departments/${dept.id}`} className="mt-6 w-full bg-green-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors text-center inline-block"> 
                                    See More
                                </Link>
                              
                            </div>
                        ))}
                    </div>
                </section>

                {/* All other sections remain unchanged */}

                {/* 3. STUDENT LIFE SECTION */}
                <section id="student-life" className="mt-24 scroll-mt-20 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-green-900 p-8 rounded-lg shadow-lg">
                        <div className="order-2 md:order-1 ">
                            <h2 className="text-3xl font-bold tracking-tight text-white">Vibrant Student Life</h2>
                            <p className="mt-4 text-gray-200 text-justify">Life in the Faculty of Education is more than just lectures and labs. We foster a community where students can grow, innovate, and collaborate. From various academic clubs to community engagement projects and creative arts groups, there's always something happening. Our goal is to provide a holistic educational experience that prepares you not just for a career, but for life.</p>
                            <button className="mt-6 bg-gray-100 text-green-900 font-bold py-2 px-4 rounded-lg hover:bg-green-800 outline-2 hover:text-gray-100 transition-colors duration 300 ease-in-out">
                                Explore Clubs & Activities
                            </button>
                        </div>
                        <div className="order-1 md:order-2">
                            <img src={StudentsColProjects} className="rounded-lg shadow-lg w-full h-auto" alt="Students Collaboration Projects" />
                        </div>
                    </div>
                </section>

                {/* 4. DEPARTMENTAL STUDENT UNION SECTION */}
                <section id="student-union" className="mt-24 scroll-mt-20">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">Meet Your Student Leaders</h2>
                        <p className="mt-4 text-lg text-gray-800 max-w-2xl mx-auto">The Education Students' Union is your voice, your support system, and your advocate. Get to know the leaders representing you.</p> {/* Updated description */}
                    </div>

                    {/* Faculty President */}
                    <div className="mt-12 mb-16 flex flex-col items-center">
                        <div className="relative">
                            <img src={FacultyPresident} alt={`Photo of ${studentPresidentsData.facultyPresident.name}`} className="h-40 w-40 rounded-full object-cover shadow-2xl ring-4 ring-green-800 ring-offset-4 ring-offset-gray-50" />
                        </div>
                        <h3 className="mt-6 text-2xl font-bold text-gray-950">{studentPresidentsData.facultyPresident.name}</h3>
                        <p className="text-lg font-medium text-green-900">{studentPresidentsData.facultyPresident.title}</p>
                    </div>

                    {/* Departmental Presidents */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6/2 gap-x-6 gap-y-10">
                        {studentPresidentsData.departmentalPresidents.map((president) => (
                            <div key={president.name} className="text-center">
                                <img src={ProfilePlaceholder} alt={`Photo of ${president.name}`} className="w-24 h-24 mx-auto rounded-full object-cover shadow-lg" />
                                <h4 className="mt-4 text-lg text-green-800 font-bold">{president.name}</h4>
                                <p className="text-lg text-gray-900">{president.department}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 5. RECENT EVENT BANNER */}
                <section id="recent-event" className="mt-24 scroll-mt-20">
                    <div className="bg-green-900 rounded-lg shadow-xl overflow-hidden">
                        <div className="p-12 text-center text-white">
                            <h2 className="text-3xl font-bold">Annual Education Innovation Showcase 2025</h2>
                            <p className="mt-4 max-w-2xl mx-auto ">Our most recent event was a massive success, showcasing groundbreaking educational projects and research from students across all departments. Thank you to all participants and sponsors!</p>
                            <button className="mt-6 bg-white text-gray-900 font-bold py-2 px-6 rounded-full hover:bg-amber-600 transition-colors hover:text-white">
                                View Event Gallery
                            </button>
                        </div>
                    </div>
                </section>

                {/* 6. COMPETITIONS & MEETINGS SECTION */}
                <section id="competitions-meetings" className="mt-24 scroll-mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Competitions */}
                        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Educational Competitions & Showcases</h3>
                            <p className="text-black text-justify mb-4" >Sharpen your pedagogical skills and showcase your innovative teaching approaches. We regularly host and participate in national and international educational contests.</p>
                            <ul className="space-y-3">
                                <li className="flex items-start"><span className="text-blue-500 font-bold mr-2">&#8594;</span> Inter-Departmental Teaching Aid Design Challenge - Fall 2025</li>
                                <li className="flex items-start"><span className="text-blue-500 font-bold mr-2">&#8594;</span> National Innovative Pedagogy Contest - Spring 2026</li>
                                <li className="flex items-start"><span className="text-blue-500 font-bold mr-2">&#8594;</span> EdTech Hackathon: Future of Learning - Coming Soon</li>
                            </ul>
                        </div>
                        {/* Congress Meetings */}
                        <div className="bg-gray-100 p-8 rounded-lg shadow-md ">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Academic Conferences & Research Colloquia</h3>
                            <p className="text-black text-justify mb-4">Engage with the latest educational research and network with pioneers in the field at our regular academic gatherings.</p>
                            <ul className="space-y-3">
                                <li className="flex items-start"><span className="text-blue-500 font-bold mr-2">&#8594;</span> Monthly Faculty Research Seminar</li>
                                <li className="flex items-start"><span className="text-blue-500 font-bold mr-2">&#8594;</span> Annual Education Research Conference</li>
                                <li className="flex items-start"><span className="text-blue-500 font-bold mr-2">&#8594;</span> Guest Lecture Series on Global Education Trends</li>
                            </ul>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default DepartmentsPage;