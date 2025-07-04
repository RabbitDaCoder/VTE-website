import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomInput from "./CustomInput";
import { motion } from "framer-motion";
import { fadeInUp, itemFadeIn } from "../../utils/AnimationVariants";
import { LuSend, LuLoader } from "react-icons/lu";

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const showToast = () => {
    toast.success("Message sent successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const showErrorToast = (message = "Please fill the required fields") => {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  function validateForm() {
    const { from_name, from_email, message } = formData;

    if (!from_name || !from_email || !message) {
      showErrorToast();
      return false;
    }
    return true;
  }

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      showToast();
      setFormData({
        from_name: "",
        from_email: "",
        subject: "",
        message: "",
      });
      form.current.reset();
    } catch (error) {
      console.log(error.text);
      showErrorToast("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      className="mt-10 lg:mt-[2%] 2xl:mt-[.9vw] bg-white rounded-md shadow-md p-6 w-[100%] md:w-[600px] lg:w-[100%]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, threshold: 0.1 }}
      variants={fadeInUp}
    >
      <motion.h3
        className="font-bold text-xl mb-4 text-green-700"
        variants={itemFadeIn}
      >
        Send Message
      </motion.h3>
      <motion.p className="text-gray-600 mb-6" variants={itemFadeIn}>
        Have questions or feedback? We'd love to hear from you. Fill out the
        form below and we'll get back to you as soon as possible.
      </motion.p>
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col text-sm space-y-4"
        variants={fadeInUp}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <CustomInput
              htmlFor="from_name"
              text="Full Name"
              type="text"
              id="user_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <CustomInput
              htmlFor="from_email"
              text="Email Address"
              type="email"
              id="user_email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div>
          <CustomInput
            htmlFor="subject"
            text="Subject"
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div className="text-green-800">
          <label htmlFor="message" className="block mb-2 font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="w-full p-3 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
            placeholder="How can we help you?"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <motion.button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md transition duration-300 ease-in-out flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          disabled={loading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {loading ? (
            <>
              <LuLoader className="animate-spin" /> Sending...
            </>
          ) : (
            <>
              <LuSend /> Send Message
            </>
          )}
        </motion.button>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </motion.form>
    </motion.section>
  );
};

export default ContactForm;
