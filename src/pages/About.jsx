import React, { useState, useEffect } from "react";
import VteLogoBackground from "../assets/images/hero-bg.jpg";
import DeansSection from "../components/DeansSection";

// THIS IS THE HERO SECTION (About Component)
const About = () => {
  return (
    <div>
      <section
        className="bg-cover bg-center h-96 text-white bg-opacity-50"
        style={{ backgroundImage: `url(${VteLogoBackground})` }}
      >
        <div className="flex items-center justify-center h-full w-full bg-black-900 bg-opacity-25 text-sm/">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-amber-600">
              About Our Faculty
            </h1>
            <br />
            <h2 className="text-2xl md:text-4xl font-semibold text-teal-400">
              Vocational and Technical Education
            </h2>
            <p className="mt-1 text-lg md:text-xl">
              Building Skills for Tomorrow's Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Render the MissionVision component */}
      <MissionVision />

      {/* THIS IS OUR HISTORY/TIMELINE US AREA */}
      <section className=" bg-gray-50">
        <div className=" mx-auto px-6 bg-green-900 bg-opacity-50 rounded-lg shadow-lg p-12">
          <div className="text-center mb-1">
            <h2 className="text-4xl font-bold text-gray-100">Our History</h2>
            <p className="text-orange-500 font-bold mt-4 mb-10">
              A journey through our milestones and achievements.
            </p>
          </div>
          <div className="bg-green-100 rounded-lg shadow-lg p-8">
            <p className="text-gray-800 text-justify">
              The Faculty which started off as Department of Vocational Teacher
              Education was one of the earliest departments in the University of
              Nigeria, Nsukka established in 1962. It was given its original
              mandate under Ford Foundation Project Grant No. 640-0475 for
              $380,000 in 1964. From inception, it was one of the three
              departments that made up the faculty of Education.The then
              Department of Vocational Teacher Education was made up of four
              broad units, namely; Agricultural Education, Business Education,
              Home Economics Education and Industrial Technical Education. Each
              of the four initial units of the Department had only a few
              students then and were, therefore grouped together into one
              department with the understanding that the Units would become
              full-fledged department when they had more students. The first
              head of Department was Professor Agusiobo.The Department was the
              pioneer Department of Vocational and Technical Education in
              Nigeria. As a result, almost all the institutions that run
              Vocational and Technical Education programmes in Nigeria at
              University, Polytechnic and College of Education levels are
              administered by the products of this Department.
              <br /> <br />
              In 1985 Computer Education unit was introduced.{" "}
              <span className="font-bold text-green-900">
                The Faculty was created in July 2015.
              </span>{" "}
              She offers both undergraduate and postgraduate programme in the
              six occupational areas of Agricultural & Bioresources Education,
              Business Education, Computer & Robotics Education, Home Economics
              & Hospitality Management Education, Industrial Technical Education
              and Vocational and Entrepreneurship Education that serves the
              entire faculty. The Faculty of Vocational Teacher Education,
              University of Nigeria, Nsukka has achieved huge successes in the
              face of overwhelming odds in the past 50 years. It has produced
              competent and vocationally skilled teachers that work in all areas
              of life in Nigeria and other parts of the world.
              <br /> <br />
              The Faculty is made up of the following Departments: <br />
              <ol className="list-decimal pl-5 font-bold">
                <li>Agriculture and Bioresources Education</li>
                <li>Business Education</li>
                <li>Computer and Robotics Education</li>
                <li>Home Economics and Hospitality Management Education</li>
                <li>Industrial Technical Education</li>
                <li>Vocational and Entrepreneurship Education</li>
              </ol>
              <br />
              Since the inception of the Faculty, it has collaborated fully with
              the Faculty of Education in affiliating most of her programmes
              with other tertiary institutions in Nigeria. This was one of the
              ways of ensuring the spread of the programme to the other parts of
              the country.
              <br /> <br />
              <span className="font-bold text-green-800">
                Some of the affiliated institutions are:
              </span>
              <br />
              <ul className="list-disc pl-5">
                <li>
                  School of Technical Education at Yaba College of Technology,
                  Yaba. School for Vocational Technical Education at College of
                  Education, Ikerekiti in Ekiti State.
                </li>
                <li>
                  School of Vocational and Technical Education, Alvan Ikoku
                  Federal College of Education, Owerri
                </li>
                <li>Federal College of Education (Technical) Omoku, and</li>
                <li>
                  School of Vocational and Technical Education, Nwafor Orizu
                  College of Educaiton Nsugbe.
                </li>
              </ul>
              <br />
              The Department evolved into Faculty of Vocational and Technical
              Education in the year 2015 with Professor C.A. Igbo as the Acting
              Dean.
            </p>
          </div>
        </div>
      </section>

      {/* Dean's Section*/}
      <DeansSection />

      {/* Render the FacultyValues component */}
      <FacultyValues />

      {/* Render the WhyChooseUs component */}
      <WhyChooseUs />

      {/* Render the ExploreDepartments component */}
      <ExploreDepartments />

      {/* Render the PhotoCarousel component */}
      <PhotoCarousel />
    </div>
  );
};

// THIS IS THE MISSION AND VISION AREA
const FlipCard = ({ frontTitle, backText, backText1, backText2 }) => {
  return (
    // The main container that creates the 3D perspective space
    <div className="bg-transparent w-full h-64 [perspective:1000px] group">
      {/* The inner container that handles the flip transition */}
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front of the card */}
        <div className="absolute w-full h-full [backface-visibility:hidden]">
          <div className="bg-green-900 rounded-2xl shadow-lg p-8 h-full flex flex-col justify-center items-center">
            <h3 className="text-2xl font-bold text-gray-200 mb-4">
              {frontTitle}
            </h3>
            {/* <p className="text-gray-600 text-center">{frontText}</p> */}
          </div>
        </div>

        {/* --- FLIP INDICATOR --- */}
        <div className="absolute bottom-4 right-4 flex items-center text-gray-400 group-hover:opacity-0 transition-opacity duration-300">
          <span className="text-xs mr-2 text-white">Hover to flip</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>

        {/* Back of the card (initially hidden and rotated) */}
        <div className="absolute w-full h-70 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8 h-full flex flex-col justify-center items-center">
            <p className="text-justify">{backText}</p>
            <p className="text-justify">{backText1}</p>
            <p className="text-justify">{backText2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const MissionVision = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-950">
            Our Mission & Vision
          </h2>
          <p className="text-gray-900 mt-4">
            The core principles that guide our faculty.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4">
          {/* Mission Card */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <FlipCard
              frontTitle="Our Mission"
              backTitle="How We Achieve It" // Note: backTitle is not used in FlipCard component
              backText="1. To provide world-class TVET leadership in Africa through research and development, knowledge sharing, innovative practices, and human capital re-engineering."
              backText1="2. To positively transform society by seeking motivated students eager to rediscover the world through knowledge of science, technology, and vocational education."
              backText2="3. To meet students' needs in the most appropriate manner and provide the workforce for educational institutions and businesses."
            />
          </div>

          {/* Vision Card */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <FlipCard
              frontTitle="Our Vision"
              frontText="Insert your vision statement here. This should describe the future your faculty aspires to create." // Note: frontText is not used in FlipCard component
              backTitle="Our Future Focus" // Note: backTitle is not used in FlipCard component
              backText="1. To be a leading force in transforming formal and informal TVET practices through innovation and systems development. "
              backText1="2. To restore human dignity through skills empowerment and positioning TVET for sustainable development in a globalized world. "
              backText2="3. To be at the forefront of research, development, innovation, knowledge transfer, and human resources development in the global academic community."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

{
  /* THIS IS THE FACULTY VALUE AREA */
}
const FacultyValues = () => {
  const values = [
    {
      title: "Excellence",
      description:
        "Striving for the highest standards in teaching, research, and service.",
    },
    {
      title: "Integrity",
      description:
        "Upholding honesty and ethical principles in all our academic and professional endeavors.",
    },
    {
      title: "Innovation",
      description:
        "Fostering a culture of creativity, curiosity, and cutting-edge discovery.",
    },
    {
      title: "Collaboration",
      description:
        "Working together across disciplines to achieve common goals and drive progress.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className=" mx-auto px-6 bg-green-900 rounded-lg shadow">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white pt-10">
            Our Core Values
          </h2>
          <p className="text-amber-500 font-bold mt-4">
            The principles that define our community.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4">
          {values.map((value, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8 ">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center h-full">
                <h3 className="text-xl font-bold text-green-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-green-900">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

{
  /* THIS IS THE WHY CHOOSE US AREA */
}
const WhyChooseUs = () => {
  const reasons = [
    {
      title: "World-Class Faculty",
      description:
        "Learn from renowned experts and researchers who are leaders in their fields.",
    },
    {
      title: "State-of-the-Art Facilities",
      description:
        "Access modern laboratories, advanced equipment, and extensive research resources.",
    },
    {
      title: "Vibrant Student Life",
      description:
        "A supportive and diverse community with numerous clubs, events, and activities.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
          Why Choose Us?
        </h2>
        <div className="flex flex-wrap -mx-4">
          {reasons.map((reason, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-green-900 text-white rounded-lg shadow-lg p-8 h-full hover:bg-gray-900 hover:text-white hover:font-bolder transition duration-500 transform hover:scale-105">
                <h3 className="text-2xl font-bold mb-4">{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

{
  /* THIS IS EXPLORE DEPARTMENT AREA */
}
const ExploreDepartments = () => {
  const departments = [
    { name: "Agriculture and Bioresources Education", link: "#departments" },
    { name: "Business Education", link: "#departments" },
    { name: "Computer and Robotics Education", link: "#departments" },
    {
      name: "Home Economics and Hospitality Management Education",
      link: "#departments",
    },
    { name: "Industrial Technical Education", link: "#departments" },
    { name: "Vocational and Entrepreneurship Education", link: "#departments" },
  ];

  return (
    <section id="departments" className="py-20 bg-green-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Explore Our Departments</h2>
        <div className="flex flex-wrap justify-center">
          {departments.map((dept, index) => (
            <a
              key={index}
              href={dept.link}
              className="bg-white text-gray-900 font-bold rounded-full py-3 px-6 m-2 hover:bg-gray-900 hover:text-gray-100 transition duration-500 transform hover:scale-105"
            >
              {dept.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

{
  /* THIS IS THE PHOTO CAROUSEL AREA */
}
const PhotoCarousel = () => {
  const images = [
    "https://placehold.co/1200x500/a8dadc/1d3557?text=Campus+Life",
    "https://placehold.co/1200x500/f1faee/e63946?text=Student+Collaboration",
    "https://placehold.co/1200x500/457b9d/f1faee?text=Research+in+Action",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Glimpses of Our Faculty
        </h2>
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-lg shadow-2xl">
            <div
              className="flex transition-transform ease-in-out duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Faculty event ${index + 1}`}
                  className="w-full flex-shrink-0"
                />
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full ml-4 focus:outline-none"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full mr-4 focus:outline-none"
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
