import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomInput from './CustomInput';

const ContactForm = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const showToast = () => {
        toast.success('Message sent successfully');
    }

    const showErrorToast = () => {
        toast.error('Please fill the required fields');
    }

    function validateForm() {
        const formData = new FormData(form.current);
        const name = formData.get('from_name');
        const email = formData.get('from_email');
        const message = formData.get('message');

        if (!name || !email || !message) {
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
        await emailjs.sendForm('service_x2d2a6g', 'template_we6yq6q', form.current, {
            publicKey: 'w5RlHm6DPeditJvh7',
        });

        showToast();
        form.current.reset();
        } catch (error) {
        console.log(error.text);
        toast.error('Failed to send message');
        } finally {
        setLoading(false);
        }
    }

    return (
        <section className="mt-10 lg:mt-[2%] 2xl:mt-[.9vw] bg-white rounded-md shadow-md p-6 w-[100%] md:w-[600px] lg:w-[100%]">
            <h3 className="font-bold text-lg mb-[10px] text-green-700">Send Message</h3>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col text-sm">
                <div>
                    <CustomInput htmlFor="from_name" text="Full Name" type="text" id="user_name" name="from_name" required />
                </div>
                <div>
                    <CustomInput htmlFor="from_email" text="Email Address" type="email" id="user_email" name="from_email" required />
                </div>
                <div>
                    <CustomInput htmlFor="subject" text="Subject" type="text" id="subject" name="subject" />
                </div>
                <div className="text-green-800">
                    <label htmlFor="message">Message</label>
                    <textarea className="h-[65px] w-[100%] border border-green-400 text-green-900 focus:bg-green-400 focus:outline-none rounded-sm p-[5px]" name="message"required></textarea>
                </div>

                <button type="submit" disabled={loading} className={`flex items-center justify-center gap-2 h-[35px] mt-[15px]
                    rounded-sm bg-green-500 text-white hover:bg-green-600 transition duration-200 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}>
                    {loading && (
                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"/>
                        </svg>
                    )}
                    {loading ? 'Sending...' : 'Send Message'}
                </button>

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
            </form>
        </section>
    )
}

export default ContactForm;