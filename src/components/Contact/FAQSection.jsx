import React, { useState, useRef } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  fadeInUp,
  itemFadeIn,
  staggerContainer,
} from "../../utils/AnimationVariants.js";

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      className="border-b border-green-200 py-4"
      variants={itemFadeIn}
      whileHover={{ backgroundColor: "rgba(240, 253, 244, 0.5)" }}
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left cursor-pointer"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-base font-medium text-green-700">{question}</span>
        <motion.span
          className="text-xl text-green-700"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </motion.span>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-sm text-green-700 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const faqData = [
    {
      question: "What is VTE?",
      answer:
        "The Faculty of Vocational and Technical Education trains students in both theory and practical education in trades and teaching. We focus on developing skilled professionals who can contribute to various technical and vocational fields.",
    },
    {
      question: "How do I apply for admission?",
      answer:
        "Visit the UNN website, navigate to admissions, and follow the instructions for applying to VTE. You'll need to meet the faculty's entry requirements and submit all necessary documentation by the specified deadlines.",
    },
    {
      question: "Where is the faculty located?",
      answer:
        "We are located opposite St. Peter's Catholic Church, UNN Nsukka Campus. Our facilities include modern classrooms, specialized laboratories, and workshops for practical training.",
    },
    {
      question: "What departments are in the faculty?",
      answer:
        "Our faculty houses several departments including Agricultural Education, Business Education, Computer Education, Home Economics Education, Industrial Technical Education, and Vocational Teacher Education.",
    },
    {
      question: "Are there scholarships available?",
      answer:
        "Yes, there are various scholarships available for qualified students. These include merit-based scholarships, need-based financial aid, and specific grants for vocational education. Contact our administrative office for more details.",
    },
  ];

  const faqRef = useRef(null);
  const faqInView = useInView(faqRef, { once: true, threshold: 0.1 });

  return (
    <motion.div
      ref={faqRef}
      className="bg-white p-6 rounded-md shadow-md w-[100%] md:max-w-[600px] lg:max-w-[100%] mt-10 lg:mt-[2%] 2xl:mt-[.9vw]"
      initial="hidden"
      animate={faqInView ? "visible" : "hidden"}
      variants={fadeInUp}
    >
      <motion.div className="mb-6" variants={fadeInUp}>
        <motion.span
          className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium mb-2"
          variants={itemFadeIn}
        >
          Got Questions?
        </motion.span>
        <motion.h2
          className="text-xl font-bold text-green-700"
          variants={fadeInUp}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p className="text-sm text-gray-600 mt-1" variants={fadeInUp}>
          Find answers to common questions about our faculty and programs
        </motion.p>
      </motion.div>

      <motion.div variants={staggerContainer}>
        {faqData.map((item, idx) => (
          <AccordionItem
            key={idx}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default FAQSection;
