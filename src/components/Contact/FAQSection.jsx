import React, {useState} from 'react';
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const AccordionItem = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);        
    return (
        <div className="border-b border-gray-300 py-4">
            <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center w-full text-left">
                <span className="text-base font-medium">{question}</span>
                <span className="text-xl"> {isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
            </button>

        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden">
                    <p className="mt-2 text-sm text-gray-700">{answer}</p>
                </motion.div>
            )}
        </AnimatePresence>
        </div>
    )
}


const FAQSection = () => {
  const faqData = [
    {
        question:"What is VTE?",
        answer:"The Faculty of Vocational and Technical Education trains students in both theory and practical education in trades and teaching.",
    },
    {
        question:"How do I apply?",
        answer:"Visit the UNN website, navigate to admissions, and follow the instructions for applying to VTE.",
    },
    {
        question:"Where is the faculty located?",
        answer:"We are located opposite St. Peter's Catholic Church, UNN Nsukka Campus.",
    }
 ]
    
 return (
    <div className="bg-white p-6 rounded-md shadow-md max-w-3xl mx-auto mt-10">
        <h2 className="text-xl font-serif font-bold mb-4">Frequently Asked Questions</h2>
        {faqData.map((item, idx) => (<AccordionItem key={idx} question={item.question} answer={item.answer} />))}
    </div>
  )
}
    

export default FAQSection;