import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LuMapPin, LuPhone, LuMail, LuClock } from "react-icons/lu";
import {
  fadeInUp,
  itemFadeIn,
  staggerContainer,
} from "../../utils/AnimationVariants";

const ContactInfoItem = ({ icon: Icon, title, children }) => (
  <motion.div
    className="flex flex-row gap-x-[12px]"
    variants={itemFadeIn}
    whileHover={{ x: 5 }}
    transition={{ duration: 0.2 }}
  >
    <Icon className="text-xl text-green-600 mt-1 flex-shrink-0" />
    <div>
      <h4 className="text-base font-bold text-green-800">{title}</h4>
      {children}
    </div>
  </motion.div>
);

const ContactInfo = () => {
  const infoRef = useRef(null);
  const infoInView = useInView(infoRef, { once: true, threshold: 0.1 });

  return (
    <motion.section
      ref={infoRef}
      className="bg-white mt-10 lg:mt-[2%] 2xl:mt-[.9vw] flex flex-col gap-y-[15px] rounded-md shadow-md p-6 text-green-700 w-[100%] md:max-w-[600px] lg:max-w-[100%]"
      initial="hidden"
      animate={infoInView ? "visible" : "hidden"}
      variants={fadeInUp}
    >
      <motion.div className="mb-4" variants={fadeInUp}>
        <motion.span
          className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium mb-2"
          variants={itemFadeIn}
        >
          Get in Touch
        </motion.span>
        <motion.h3
          className="font-bold text-xl text-green-700"
          variants={fadeInUp}
        >
          Faculty Contact Info
        </motion.h3>
        <motion.p className="text-sm text-gray-600 mt-1" variants={fadeInUp}>
          Reach out to us through any of these channels
        </motion.p>
      </motion.div>

      <motion.div
        className="flex flex-col gap-y-[20px]"
        variants={staggerContainer}
      >
        <ContactInfoItem icon={LuMapPin} title="Address">
          <p className="text-sm text-gray-600">
            Faculty of Vocational and Technical Education
            <br />
            Opposite St. Peter's Catholic Church,
            <br />
            University of Nigeria, Nsukka, Enugu State.
          </p>
        </ContactInfoItem>

        <ContactInfoItem icon={LuPhone} title="Phone Number">
          <p className="text-sm text-gray-600">+234 904 567 8223</p>
          <p className="text-sm text-gray-600">+234 812 345 6789</p>
        </ContactInfoItem>

        <ContactInfoItem icon={LuMail} title="Email Address">
          <p className="text-sm text-gray-600">vte@unn.edu.ng</p>
          <p className="text-sm text-gray-600">admissions.vte@unn.edu.ng</p>
        </ContactInfoItem>

        <ContactInfoItem icon={LuClock} title="Office Hours">
          <p className="text-sm text-gray-600">
            Monday - Friday: 8:00 AM - 4:00 PM
          </p>
          <p className="text-sm text-gray-600">Saturday & Sunday: Closed</p>
        </ContactInfoItem>
      </motion.div>
    </motion.section>
  );
};

export default ContactInfo;
