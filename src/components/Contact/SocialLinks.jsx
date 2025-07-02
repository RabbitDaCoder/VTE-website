import React from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const  SocialLinks = ({className}) => {
    return (
        <div className={`bg-white flex flex-col gap-y-[10px] mt-10 lg:mt-[2%] 2xl:mt-[.9vw] rounded-md shadow-md p-6 md:max-w-[600px] lg:max-w-[100%] ${className}`}>
            <h3 className="text-lg font-bold text-green-700">Connect with us on social media</h3>
            <p className="text-sm text-green-700">Stay updated with the latest news, events, and announcements from the Faculty of Vocational and Technical Education.</p>
            <div className="flex flex-row gap-x-[20px] text-3xl items-center pt-[15px]">
                <a to={"/"} className="p-2 bg-green-50 rounded-full hover:bg-green-100 transition duration-2000 ease-in-out">
                    <FaFacebookF className="text-xl text-green-700 cursor-not-allowed" />
                </a>
                <a to={"/"} className="p-2 bg-green-50 rounded-full hover:bg-green-100 transition duration-2000 ease-in-out">
                    <FaXTwitter className="text-xl text-green-700 cursor-not-allowed" /> 
                </a>
                <a to={"/"} className="p-2 bg-green-50 rounded-full hover:bg-green-100 transition duration-2000 ease-in-out">
                    <FaInstagram className="text-xl text-green-700 cursor-not-allowed" />
                </a>
                <a to={"/"} className="p-2 bg-green-50 rounded-full hover:bg-green-100 transition duration-2000 ease-in-out">
                    <FaLinkedinIn className="text-xl text-green-700 cursor-not-allowed" />
                </a>
            </div>
        </div>        
    )
}

export default SocialLinks;