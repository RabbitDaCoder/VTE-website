import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, itemFadeIn } from "../../utils/AnimationVariants";
import { LuMail, LuExternalLink } from "react-icons/lu";

const HelpBox = () => {
  const helpBoxRef = useRef(null);
  const helpBoxInView = useInView(helpBoxRef, { once: true, threshold: 0.1 });

  return (
    <motion.div
      ref={helpBoxRef}
      className="bg-white text-green-700 p-6 rounded-md shadow-md mt-10 lg:mt-[2%] 2xl:mt-[.9vw] w-[100%] md:max-w-[600px] lg:max-w-[100%] lg:h-[262px]"
      initial="hidden"
      animate={helpBoxInView ? "visible" : "hidden"}
      variants={fadeInUp}
    >
      <motion.div variants={itemFadeIn}>
        <motion.span
          className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium mb-2"
          variants={itemFadeIn}
        >
          Need More Help?
        </motion.span>
        <motion.h3 className="text-xl font-bold mb-3" variants={itemFadeIn}>
          Still have questions?
        </motion.h3>
        <motion.p
          className="text-base mb-6 text-gray-600"
          variants={itemFadeIn}
        >
          We're happy to help with any questions not covered in our FAQ section.
          Our support team is ready to assist you with personalized guidance.
        </motion.p>
        <motion.a
          href="mailto:vte@unn.edu.ng?subject=Inquiry%20from%20Website&body=Hello%20VTE%20Faculty,"
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <LuMail /> Email Us Directly
        </motion.a>
        <motion.div
          className="mt-4 text-sm text-gray-500"
          variants={itemFadeIn}
        >
          Or visit our administrative office during working hours (8am-4pm,
          Monday-Friday)
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HelpBox;
