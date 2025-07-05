import React from "react";
import ContactForm from "../components/Contact/ContactForm";
import ContactInfo from "../components/Contact/ContactInfo";
import EmbeddedMap from "../components/Contact/EmbeddedMap";
import SocialLinks from "../components/Contact/SocialLinks";
import FAQSection from "../components/Contact/FAQSection";
import HelpBox from "../components/Contact/HelpBox";
import TempContactHeaderBgImage from "/images/hero/hero-bg.jpg";
import HelmetSEO from "../components/HelmetSEO.jsx";

const Contact = () => {
  return (
    <div className="min-h-full xl:pb-[5vw] bg-gradient-to-br from-green-50 via-white to-green-100 flex flex-col items-center">
      <HelmetSEO page="contact" />
      <div
        className="pt-[20px] pb-[20px] xl:pt-[3vw] xl:pb-[3vw] w-full h-[350px] flex flex-col items-center bg-cover bg-center px-2"
        style={{ backgroundImage: `url(${TempContactHeaderBgImage})` }}
      >
        <h1 className=" max-w-7xl font-extrabold text-center my-6 lg:my-12 text-2xl md:text-4xl text-gray-100 md:w-[600px] lg:w-[800px]">
          Contact the Faculty of
          <br /> Vocational and Technical Education
        </h1>
        <p
          className="pr-[20px] pl-[20px]  mx-auto font-normal text-center text-base md:text-xl lg:text-xl xl:text-xl md:w-[600px]
        lg:w-[900px] xl:w-[1200px]   text-gray-100 xl:mb-[3vw]"
        >
          We are here to assist current and prospective students, partners and
          the community. Reach out to us - We look forward to connecting!
        </p>
      </div>
      <div className="pr-[20px] pl-[20px] pb-[20px] flex flex-col items-center w-[100%] max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:gap-x-[2%] justify-center w-[100%]">
          <div className="flex flex-col items-center w-[100%] lg:w-[100%]">
            <ContactForm />
            <SocialLinks className={"hidden lg:block"} />
          </div>
          <div className="flex flex-col items-center w-[100%] lg:w-[100%]">
            <ContactInfo />
            <EmbeddedMap />
          </div>
        </div>
        <SocialLinks className={"lg:hidden"} />
        <div className="flex flex-col lg:flex-row items-center gap-x-[2%] w-[100%]">
          <FAQSection />
          <HelpBox />
        </div>
      </div>
    </div>
  );
};

export default Contact;

// for Team member:
// propsper the wire frame will be in assets/wireframe/conact folder
// use to to see what is required in the about page
// for the content:
// use dummy text or lorem ipsum text to fill the content for now

// flow and features: on assets/documentation/contact folder
