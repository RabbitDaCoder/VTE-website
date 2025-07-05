import blogImg2 from "/images/blogs/blogImg-2.jpg";
import starLinkBlog from "/images/blogs/blog-starLink.jpg";
// Only import Chinedu's image since that's the only one available
import authorImgChinedu from "/images/authors/chinedu.jpg";

// Initialize blogs with sequential IDs
export const blogs = [
  {
    id: 1,
    title: "Understanding Educational Technology Integration",
    slug: "understanding-educational-technology-integration",
    image:
      "https://images.unsplash.com/photo-1694340016914-e684a924f5b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VW5kZXJzdGFuZGluZyUyMEVkdWNhdGlvbmFsJTIwVGVjaG5vbG9neSUyMEludGVncmF0aW9ufGVufDB8fDB8fHww",
    tags: ["EdTech", "Teaching", "Innovation", "Digital Learning"],
    date: "2024-06-01",
    author: "Dr. Ada Nwosu",
    // authorImg commented out as requested
    authorBio:
      "Educational technology researcher and consultant with over 10 years of experience in digital learning environments.",
    readTime: "8 min",
    content: `Educational technology integration is transforming how we teach and learn across all disciplines. This article explores effective strategies for incorporating technology into educational settings.

This blog examines various educational technologies, their pedagogical foundations, and best practices for implementation in both traditional and online learning environments.

**Key Takeaways:**
- Selecting appropriate technologies for learning objectives
- Balancing technology with traditional teaching methods
- Assessment strategies in technology-enhanced learning
- Addressing the digital divide in educational settings`,
  },
  {
    id: 2,
    title: "The Future of Vocational Education in Nigeria",
    slug: "future-of-vocational-education-nigeria",
    image:
      "https://images.unsplash.com/photo-1582638423482-a90640357638?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VGhlJTIwRnV0dXJlJTIwb2YlMjBWb2NhdGlvbmFsJTIwRWR1Y2F0aW9uJTIwaW4lMjBOaWdlcmlhfGVufDB8fDB8fHww",
    tags: [
      "Vocational Education",
      "Skills Development",
      "Nigeria",
      "Employment",
    ],
    date: "2024-06-10",
    author: "Prof. Sophia Adeyemi",
    // authorImg commented out as requested
    authorBio:
      "Professor of Vocational Education with expertise in curriculum development and national education policy.",
    readTime: "12 min",
    content: `Vocational education is increasingly vital for Nigeria's economic development and addressing youth unemployment. This article examines current trends and future directions.

We explore how vocational education is evolving to meet industry demands, government initiatives supporting skills development, and success stories from various institutions.

**Highlights:**
- Industry-aligned curriculum development
- Public-private partnerships in vocational training
- Success metrics and employment outcomes
- Policy recommendations for strengthening vocational education`,
  },
  {
    id: 3,
    title: "Sustainable Agricultural Practices in Education",
    slug: "sustainable-agricultural-practices-education",
    image:
      "https://plus.unsplash.com/premium_photo-1737676547497-5407aa308007?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3VzdGFpbmFibGUlMjBBZ3JpY3VsdHVyYWwlMjBQcmFjdGljZXMlMjBpbiUyMEVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    tags: ["Agriculture", "Sustainability", "Education", "Food Security"],
    date: "2024-06-15",
    author: "Dr. Nnamdi Okonkwo",
    // authorImg: authorImg3,
    authorBio:
      "Agricultural education specialist focusing on sustainable farming practices and environmental conservation.",
    readTime: "10 min",
    content: `Integrating sustainable agricultural practices into educational curricula is essential for addressing food security challenges and environmental conservation.

This blog explores innovative approaches to teaching sustainable agriculture, from classroom theory to practical field applications and community engagement projects.

**What you'll learn:**
- Curriculum frameworks for sustainable agriculture education
- Hands-on teaching methodologies
- Community-based learning projects
- Assessment of sustainability competencies`,
  },
  {
    id: 4,
    title: "Technical Education and Industry 4.0",
    slug: "technical-education-industry-4-0",
    image:
      "https://plus.unsplash.com/premium_photo-1726880460027-fab1b079b37a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGVjaG5pY2FsJTIwRWR1Y2F0aW9uJTIwYW5kJTIwSW5kdXN0cnklMjA0LjB8ZW58MHx8MHx8fDA%3D",
    tags: ["Technical Education", "Industry 4.0", "Innovation", "Technology"],
    date: "2024-05-18",
    author: "Prof. Oluwaseun Adeyemi",
    // authorImg: authorImg4,
    authorBio:
      "Professor of Technical Education specializing in automation, robotics, and industrial technology integration.",
    readTime: "15 min",
    content: `The Fourth Industrial Revolution is transforming technical education requirements. This article explores how technical education is adapting to Industry 4.0.

We examine the integration of automation, data exchange, and new technologies in technical education curricula and teaching methodologies.

**Key Areas Covered:**
- Smart manufacturing skills development
- IoT and cyber-physical systems in technical education
- Curriculum adaptation for Industry 4.0
- Industry partnerships for technical skills development`,
  },
  {
    id: 5,
    title: "Entrepreneurship Education for Economic Development",
    slug: "entrepreneurship-education-economic-development",
    image:
      "https://plus.unsplash.com/premium_photo-1713890424186-11d3584a22fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RW50cmVwcmVuZXVyc2hpcCUyMEVkdWNhdGlvbiUyMGZvciUyMEVjb25vbWljJTIwRGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
    tags: [
      "Entrepreneurship",
      "Economic Development",
      "Education",
      "Innovation",
    ],
    date: "2024-05-12",
    author: "Dr. Emeka Nwosu",
    // authorImg: authorImg5,
    authorBio:
      "Entrepreneurship educator with over 15 years of experience in business development and innovation.",
    readTime: "10 min",
    content: `Entrepreneurship education plays a crucial role in economic development by fostering innovation and self-reliance. This article examines effective approaches to entrepreneurship education.

We explore pedagogical strategies, curriculum design, and assessment methods that effectively develop entrepreneurial mindsets and skills.

**Main Points:**
- Experiential learning in entrepreneurship education
- Business incubation programs in educational settings
- Measuring entrepreneurial competencies
- Case studies of successful entrepreneurship education programs`,
  },
  {
    id: 6,
    title: "Integrating Technology in Vocational Training",
    slug: "integrating-technology-vocational-training",
    image:
      "https://plus.unsplash.com/premium_photo-1742926577711-b3c9b1cc6cd8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SW50ZWdyYXRpbmclMjBUZWNobm9sb2d5JTIwaW4lMjBWb2NhdGlvbmFsJTIwVHJhaW5pbmd8ZW58MHx8MHx8fDA%3D",
    tags: ["Technology", "Vocational Training", "Innovation", "Education"],
    date: "2024-06-05",
    author: "Prof. Adaobi Okeke",
    // authorImg: authorImg1,
    authorBio:
      "Educational technology researcher and consultant with over 10 years of experience in digital learning environments.",
    readTime: "12 min",
    content: `The integration of technology in vocational training enhances skill acquisition and relevance in the digital economy. This article outlines practical steps and success stories.
  
  **Main Points:**
  - Use of VR/AR in technical training
  - E-learning platforms for vocational students
  - Challenges of implementing tech in rural settings
  - Policy recommendations for wider adoption`,
  },

  {
    id: 7,
    title: "The Role of Soft Skills in Technical Education",
    slug: "soft-skills-in-technical-education",
    image:
      "https://plus.unsplash.com/premium_photo-1716637062754-3257b307ee94?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGhlJTIwUm9sZSUyMG9mJTIwU29mdCUyMFNraWxscyUyMGluJTIwVGVjaG5pY2FsJTIwRWR1Y2F0aW9ufGVufDB8fDB8fHww",
    tags: ["Soft Skills", "Technical Education", "Career Development"],
    date: "2024-06-15",
    author: "Mr. Chijioke Umeh",
    // authorImg: authorImg2,
    authorBio:
      "Career coach with expertise in soft skills development and career planning.",
    readTime: "10 min",
    content: `Technical expertise alone does not guarantee workplace success. Soft skills complement technical knowledge and are increasingly sought by employers.
  
  **Main Points:**
  - Communication and teamwork in technical fields
  - Embedding soft skills in the curriculum
  - Assessment of soft skills in students
  - Industry feedback on employability`,
  },

  {
    id: 8,
    title: "Gender Equality in Vocational Education",
    slug: "gender-equality-vocational-education",
    image:
      "https://images.unsplash.com/photo-1684259499086-93cb3e555803?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8R2VuZGVyJTIwRXF1YWxpdHklMjBpbiUyMFZvY2F0aW9uYWwlMjBFZHVjYXRpb258ZW58MHx8MHx8fDA%3D",
    tags: ["Gender Equality", "Vocational Training", "Inclusion"],
    date: "2024-06-22",
    author: "Dr. Grace Onuoha",
    // authorImg: authorImg3,
    authorBio:
      "Educational researcher specializing in gender equality and inclusive education.",
    readTime: "12 min",
    content: `Addressing gender disparities in vocational education empowers women and promotes equitable economic growth. Strategies for inclusion are discussed.
  
  **Main Points:**
  - Gender-sensitive curriculum
  - Encouraging women in STEM and trades
  - Eliminating cultural barriers
  - Success stories from female graduates`,
  },

  {
    id: 9,
    title: "Green Skills for a Sustainable Future",
    slug: "green-skills-sustainable-future",
    image:
      "https://plus.unsplash.com/premium_photo-1678865183765-696a4b1887d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEdyZWVuJTIwU2tpbGxzJTIwZm9yJTIwYSUyMFN1c3RhaW5hYmxlJTIwRnV0dXJlfGVufDB8fDB8fHww",
    tags: ["Sustainability", "Green Skills", "Environment", "Education"],
    date: "2024-07-01",
    author: "Prof. Nnamdi Eze",
    // authorImg: authorImg4,
    authorBio:
      "Environmental science professor with expertise in sustainable development and green technologies.",
    readTime: "15 min",
    content: `The demand for green skills is growing as economies transition to sustainability. Education must adapt to prepare students for emerging green jobs.
  
  **Main Points:**
  - Curriculum for renewable energy
  - Waste management and recycling skills
  - Green construction techniques
  - Policy frameworks supporting green jobs`,
  },

  {
    id: 10,
    title: "Entrepreneurial Mindset in Secondary Schools",
    slug: "entrepreneurial-mindset-secondary-schools",
    image:
      "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RW50cmVwcmVuZXVyaWFsJTIwTWluZHNldCUyMGluJTIwU2Vjb25kYXJ5JTIwU2Nob29sc3xlbnwwfHwwfHx8MA%3D%3D",
    tags: ["Entrepreneurship", "Youth Development", "Education"],
    date: "2024-07-10",
    author: "Mrs. Ifeoma Opara",
    // authorImg: authorImg5,
    authorBio:
      "Entrepreneurship educator with over 15 years of experience in business development and innovation.",
    readTime: "10 min",
    content: `Cultivating an entrepreneurial mindset early helps students identify opportunities and create value. This article explores school-level interventions.
  
  **Main Points:**
  - Introducing entrepreneurship clubs
  - Project-based learning and competitions
  - Role models and mentorship
  - Impact assessment of programs`,
  },

  {
    id: 11,
    title: "Improving Apprenticeship Programs",
    slug: "improving-apprenticeship-programs",
    image:
      "https://images.unsplash.com/photo-1596496357130-e24a50408378?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SW1wcm92aW5nJTIwQXBwcmVudGljZXNoaXAlMjBQcm9ncmFtc3xlbnwwfHwwfHx8MA%3D%3D",
    tags: ["Apprenticeship", "Skills Development", "Policy"],
    date: "2024-07-15",
    author: "Engr. Samuel Obi",
    // authorImg: authorImg1,
    authorBio:
      "Educational technology researcher and consultant with over 10 years of experience in digital learning environments.",
    readTime: "12 min",
    content: `Apprenticeship programs bridge the gap between theory and practice but often face challenges. Best practices for modern apprenticeships are outlined.
  
  **Main Points:**
  - Strengthening industry-education partnerships
  - Standardizing certification
  - Financial incentives for employers
  - Success metrics for apprenticeships`,
  },

  {
    id: 12,
    title: "TVET and National Economic Goals",
    slug: "tvet-and-national-economic-goals",
    image:
      "https://images.unsplash.com/photo-1561491432-82f2b22a263e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFRWRVQlMjBhbmQlMjBOYXRpb25hbCUyMEVjb25vbWljJTIwR29hbHN8ZW58MHx8MHx8fDA%3D",
    tags: ["TVET", "Economic Development", "Policy", "Education"],
    date: "2024-07-22",
    author: "Dr. Uchechi Nwachukwu",
    // authorImg: authorImg2,
    authorBio:
      "Professor of Vocational Education with expertise in curriculum development and national education policy.",
    readTime: "15 min",
    content: `Technical and Vocational Education and Training (TVET) aligns workforce skills with national economic priorities. This article examines policy alignment.
  
  **Main Points:**
  - National skills strategy integration
  - Identifying priority sectors
  - Funding models for TVET
  - Monitoring and evaluation frameworks`,
  },

  {
    id: 13,
    title: "Digital Literacy in the Workforce",
    slug: "digital-literacy-workforce",
    image:
      "https://plus.unsplash.com/premium_photo-1661638457252-fa8944066a8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RGlnaXRhbCUyMExpdGVyYWN5JTIwaW4lMjB0aGUlMjBXb3JrZm9yY2V8ZW58MHx8MHx8fDA%3D",
    tags: ["Digital Literacy", "Workforce", "Innovation"],
    date: "2024-07-29",
    author: "Mr. Kingsley Anya",
    // authorImg: authorImg3,
    authorBio:
      "Agricultural education specialist focusing on sustainable farming practices and environmental conservation.",
    readTime: "10 min",
    content: `Digital literacy is no longer optional. Workers need core digital skills to remain competitive. We discuss effective ways to deliver training.
  
  **Main Points:**
  - Basic and advanced digital competencies
  - Online vs. in-person training models
  - Digital inclusion for marginalized groups
  - Success indicators in digital training`,
  },

  {
    id: 14,
    title: "Innovative Funding for Vocational Education",
    slug: "innovative-funding-vocational-education",
    image:
      "https://images.unsplash.com/photo-1637997840847-5e385c00a1a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fElubm92YXRpdmUlMjBGdW5kaW5nJTIwZm9yJTIwVm9jYXRpb25hbCUyMEVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    tags: ["Funding", "Vocational Education", "Innovation"],
    date: "2024-08-05",
    author: "Mrs. Chinelo Eze",
    // authorImg: authorImg4,
    authorBio:
      "Professor of Technical Education specializing in automation, robotics, and industrial technology integration.",
    readTime: "12 min",
    content: `Funding remains a key barrier to expanding vocational education. This article explores innovative financing options.
  
  **Main Points:**
  - Public-private partnerships
  - Skills development funds
  - Employer contributions and levies
  - Case studies of success`,
  },

  {
    id: 15,
    title: "Industry 4.0 and Vocational Training",
    slug: "industry-4-0-vocational-training",
    image:
      "https://images.unsplash.com/photo-1601119463477-5ecded258746?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SW5kdXN0cnklMjA0LjAlMjBhbmQlMjBWb2NhdGlvbmFsJTIwVHJhaW5pbmd8ZW58MHx8MHx8fDA%3D",
    tags: ["Industry 4.0", "Vocational Training", "Technology"],
    date: "2024-08-12",
    author: "Dr. Henry Okafor",
    // authorImg: authorImg5,
    authorBio:
      "Entrepreneurship educator with over 15 years of experience in business development and innovation.",
    readTime: "10 min",
    content: `Industry 4.0 technologies are transforming workplaces. Vocational training must evolve to prepare students for this future.
  
  **Main Points:**
  - Robotics and automation in training
  - Teaching data analytics skills
  - Cybersecurity awareness
  - Collaborations with tech companies`,
  },
  {
    id: 16,
    title:
      "VESA Clean-Up Exercise: Building Community Through Environmental Stewardship",
    slug: "vesa-clean-up-exercise-community-environmental-stewardship",
    image: blogImg2,
    tags: [
      "Community Service",
      "Environment",
      "Student Activities",
      "Campus Life",
    ],
    date: "2024-06-25",
    author: "Miss Chioma",
    // authorImg: authorImgChioma,
    authorBio:
      "Vocational Education student passionate about community service and environmental conservation.",
    readTime: "12 min",
    content: `# VESA Clean-Up Exercise: Building Community Through Environmental Stewardship

The Vocational Education Students Association (VESA) is organizing a campus-wide clean-up exercise scheduled for Saturday, July 5th, 2025. This initiative represents more than just a routine sanitation activity—it embodies our commitment to environmental responsibility and community building.

## Why Environmental Stewardship Matters in Education

Environmental consciousness is increasingly becoming an essential component of holistic education. As future educators and professionals in vocational and technical fields, VESA members understand that environmental responsibility is intertwined with professional ethics and community leadership.

The clean-up exercise provides practical experience in:
- Collaborative problem-solving
- Project management and coordination
- Community engagement
- Environmental sustainability practices

## Event Details

**Date:** Saturday, July 5th, 2025
**Time:** 8:00 AM - 12:00 PM
**Meeting Point:** Faculty Main Entrance
**What to Bring:** Gloves, water bottle, hat, sunscreen
**Provided:** Cleaning tools, waste bags, refreshments

## Building Community Through Shared Purpose

This event offers an opportunity for students across all departments to work together toward a common goal. The relationships formed during such collaborative activities often extend beyond the event itself, creating networks that support academic and professional growth.

## Join the Movement

We invite all VESAITES to participate in this meaningful initiative. Your contribution, regardless of how small it may seem, makes a significant difference in our collective effort to maintain a clean, healthy, and inspiring learning environment.

As the African proverb says, "If you want to go fast, go alone. If you want to go far, go together." Let's go far together in creating a sustainable and beautiful campus environment.

Together, we clean. Together, we learn. Together, we grow.`,
  },
  {
    id: 17,
    title:
      "CRESA Starlink Project: Bringing High-Speed Internet to Our Department",
    slug: "cresa-starlink-project-high-speed-internet",
    image: starLinkBlog,
    tags: ["CRESA", "Technology", "Infrastructure", "Internet", "Sponsorship"],
    date: "2024-07-15",
    author: "Edeh Chinedu Daniel",
    authorImg: authorImgChinedu, // Keep Chinedu's image as it's available
    authorBio:
      "Computer Science student and tech enthusiast passionate about improving digital infrastructure in educational institutions.",
    readTime: "7 min",
    content: `# CRESA Starlink Project: Bringing High-Speed Internet to Our Department

## COMPUTER AND ROBOTICS EDUCATION STUDENTS' ASSOCIATION (CRESA)
University of Nigeria, Nsukka

**Subject: Sponsorship Request For CRESA Starlink Project**

Dear CRESA Student,

We bring you greetings and an exciting opportunity to be part of something great!

The CRESA Executive body is launching a project to install Starlink Satellite Internet in our department. This initiative will provide fast and reliable internet access for academic use, research, project submissions, coding practice, and general productivity for both students and lecturers.

## Project Details

To achieve this, we are calling on students who can sponsor or if you know someone that can sponsor this project. The total cost of the project is ₦2,900,000, and sponsorship starts at ₦100,000.

## Benefits for Sponsors

As a token of appreciation, student sponsors will be offered a choice between two incentives:

1. Receive 10% of the total amount you contribute, returned as a cash incentive, or
2. Enjoy unlimited free internet access till your graduation.

## Why This Matters

In today's digital age, reliable internet access is not a luxury but a necessity for academic excellence. The Starlink system offers:

- High-speed connectivity with low latency
- Reliable service regardless of local infrastructure
- Capacity to support multiple simultaneous users
- Enhanced ability to access online learning resources
- Improved capability for remote collaboration

## How to Contribute

We respectfully appeal for your financial support towards this project. It is a unique opportunity to make a lasting impact while receiving long-term value. If you are capable and willing to sponsor this innovation, the details are as follows:

**Account name:** Computer and Robotics Students Association  
**Account no:** 5700123593  
**Bank:** Fidelity Bank PLC

Once any donation is made, kindly reach out to any Exco to be made aware of such donations.

Thank you in anticipation of your kind consideration and support.

Best regards,

Rt. Comr Chibuzo Daniel Onyedikachukwu  
CRESA President

Rt. Come Desmond Kingsley Chibuike  
CRESA P.R.O`,
  },
];

// Function to get blogs
export const getBlogs = () => {
  // In a real app, this might fetch from an API or localStorage
  return blogs;
};

// Function to get a blog by slug
export const getBlogBySlug = (slug) => {
  return blogs.find((blog) => blog.slug === slug);
};

// Function to get a blog by ID
export const getBlogById = (id) => {
  const numId = parseInt(id);
  return blogs.find((blog) => blog.id === numId);
};

// Function to get related blogs
export const getRelatedBlogs = (blogSlug, limit = 3) => {
  const blog = getBlogBySlug(blogSlug);
  if (!blog) return [];

  return blogs
    .filter(
      (b) =>
        b.slug !== blogSlug &&
        (b.tags?.some((tag) => blog.tags?.includes(tag)) ||
          b.author === blog.author)
    )
    .slice(0, limit);
};

// Save blogs to localStorage for persistence
export const saveBlogsToStorage = () => {
  localStorage.setItem("blogs", JSON.stringify(blogs));
};

// Load blogs from localStorage
export const loadBlogsFromStorage = () => {
  const storedBlogs = localStorage.getItem("blogs");
  if (storedBlogs) {
    return JSON.parse(storedBlogs);
  }
  return blogs;
};

// Initialize localStorage with blogs data if not already present
export const initBlogsStorage = () => {
  if (!localStorage.getItem("blogs")) {
    saveBlogsToStorage();
  }
};
