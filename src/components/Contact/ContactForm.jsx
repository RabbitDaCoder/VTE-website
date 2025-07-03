import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    toast("Message sent successfully");
  };

  return (
    <section className="mt-10 rounded-md shadow-md p-6">
      <h3 className="font-bold font-serif text-xl mb-[10px]">Send Message</h3>
      <form ref={form} className="flex flex-col text-sm" onSubmit={sendEmail}>
        <div>
          <CustomInput
            htmlFor={"from_name"}
            text={"Full Name"}
            type={"text"}
            id={"user_name"}
            name={"from_name"}
            required
          />
        </div>
        <div>
          <CustomInput
            htmlFor={"from_email"}
            text={"Email Address"}
            type={"email"}
            id={"user_email"}
            name={"from_email"}
            required
          />
        </div>
        <div>
          <CustomInput
            htmlFor={"from_subject"}
            text={"Subject"}
            type={"text"}
            id={"subject"}
            name={"from_subject"}
          />
        </div>
        <div>
          <CustomInput
            className="h-[65px]"
            htmlFor={"from_message"}
            text={"Message"}
            type={"text"}
            id={"user_message"}
            name={"from_message"}
            required
          />
        </div>
        <CustomButton
          className="bg-yellow-500 text-gray-200 h-[35px] rounded-sm"
          text={"Send message"}
          type="submit"
        />
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
          theme="dark"
        />
      </form>
    </section>
  );
};

export default ContactForm;