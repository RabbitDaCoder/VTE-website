import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_x2d2a6g', 'template_we6yq6q', form.current, 'w5RlHm6DPeditJvh7')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    // const showToast = () => {
    //     toast('Message sent successfully');
    // }

    // const showErrorToast = () => {
    //     toast('Please fill the required fields');
    // }

    // function displayToast() {
    //     if ('input' === '' || 'textarea' === '') {
    //         showErrorToast()
    //     } else {
    //         showToast()
    //     }
    // }
    return (
        <section className="mt-10 bg-white rounded-md shadow-md p-6">
            <h3 className="font-bold text-lg mb-[10px] text-green-700">Send Message</h3>
            <form className="flex flex-col text-sm">
                <div><CustomInput htmlFor={'from_name'} text={'Full Name'} type={'text'} id={'user_name'} name={'from_name'} required /></div>
                <div><CustomInput htmlFor={'from_email'} text={'Email Address'} type={'email'} id={'user_email'} name={'from_email'} required /></div>
                <div><CustomInput htmlFor={'from_subject'} text={'Subject'} type={'text'} id={'subject'} name={'from_subject'} /></div>
                <div><CustomInput className="h-[65px]" htmlFor={'from_message'} text={'Message'} type={'text'} id={'user_message'} name={'from_message'} required /></div>
                <CustomButton className="bg-green-500 text-white h-[35px] rounded-sm" text={'Send message'} />
                {/* <ToastContainer
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
                /> */}
            </form>
        </section>        
    )
}

export default ContactForm;