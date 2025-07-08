// Sample testimonial images (replace with actual images)
import testimonialImg1 from "/images/testimonial/testimonial1.jpg";
import testimonialImg2 from "/images/testimonial/testimonial2.jpg";
import testimonialImg3 from "/images/testimonial/testimonial3.jpg";

// Testimonials data
export const testimonials = [
  {
    id: 1,
    name: "Dr. Chinedu Okonkwo",
    profession: "Senior Lecturer, University of Lagos",
    image: testimonialImg1,
    title: "Exceptional Faculty Development",
    content:
      "The Faculty of Vocational and Technical Education at UNN has consistently demonstrated excellence in preparing educators. Their graduates are well-equipped with both theoretical knowledge and practical skills.",
  },
  {
    id: 2,
    name: "Mrs. Amina Ibrahim",
    profession: "Principal, Government Technical College",
    image: testimonialImg2,
    title: "Outstanding Technical Training",
    content:
      "As an employer of VTE graduates, I've been impressed by their technical competence and teaching abilities. The faculty's emphasis on hands-on training produces educators ready for real-world challenges.",
  },
  {
    id: 3,
    name: "Emeka Nwachukwu",
    profession: "VTE Alumni & Entrepreneur",
    image: testimonialImg3,
    title: "Life-Changing Education",
    content:
      "My education at the Faculty of VTE transformed my career path. The entrepreneurship skills I gained enabled me to start my own technical training center, which now employs over 20 people.",
  },
];

// Function to get testimonials
export const getTestimonials = () => {
  return testimonials;
};

// Save testimonials to localStorage for persistence
export const saveTestimonialsToStorage = () => {
  localStorage.setItem("testimonials", JSON.stringify(testimonials));
};

// Load testimonials from localStorage
export const loadTestimonialsFromStorage = () => {
  const storedTestimonials = localStorage.getItem("testimonials");
  if (storedTestimonials) {
    return JSON.parse(storedTestimonials);
  }
  return testimonials;
};

// Initialize localStorage with testimonials data if not already present
export const initTestimonialsStorage = () => {
  if (!localStorage.getItem("testimonials")) {
    saveTestimonialsToStorage();
  }
};
