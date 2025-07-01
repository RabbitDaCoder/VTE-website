import React from 'react';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';
import EmbeddedMap from '../components/Contact/EmbeddedMap';
import SocialLinks from '../components/Contact/SocialLinks';
import FAQSection from '../components/Contact/FAQSection';
import HelpBox from '../components/Contact/HelpBox';

const Contact = () => {
  return (
    <div className="min-h-screen p-[20px]">
      <div>
        <h1 className="font-bold font-serif text-center mb-[10px] lg:mb-[15px] text-2xl md:text-3xl lg:text-4xl/12 xl:text-5xl/14 2xl:text-8xl/28">
          Contact the Faculty of<br /> Vocational & Technical Education</h1>
        <h2 className="mx-auto font-normal font-sans text-center text-base md:text-xl lg:text-3xl/10 xl:text-4xl/12 2xl:text-6xl/24 
        lg:w-[1000px] xl:w-[1200px] 2xl:w-[83.33vw]">We are here to assist current and prospective students,
          partners and the community. Reach out to us - We look forward to connecting!</h2>
      </div>
      <ContactForm />
      <ContactInfo />
      <EmbeddedMap />
      <SocialLinks />
      <FAQSection />
      <HelpBox />
    </div>
    )
}

export default Contact;

// for Team member:
// propsper the wire frame will be in assets/wireframe/conact folder
// use to to see what is required in the about page
// for the content:
// use dummy text or lorem ipsum text to fill the content for now

// flow and features: on assets/documentation/contact folder
