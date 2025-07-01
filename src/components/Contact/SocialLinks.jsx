import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

const  SocialLinks = () => {
    return (
        <div className="flex flex-col gap-y-[10px] mt-10 rounded-md shadow-md p-6">
            <h3 className="text-xl font-serif font-bold">Connect with us on social media</h3>
            <p className="text-sm">Stay updated with the latest news, events, and announcements from the Faculty of Vocational and Technical Education.</p>
            <div className="flex flex-row gap-x-[20px] text-3xl items-center">
                <a target="_blank"><FaFacebookSquare className="hover:text-green-500 transition duration-2000 ease-in-out" /></a>
                <a target="_blank"><FaSquareInstagram className="hover:text-green-500 transition duration-2000 ease-in-out" /></a>
                <a target="_blank"><FaSquareXTwitter className="hover:text-green-500 transition duration-2000 ease-in-out" /></a>
                <a target="_blank"><AiFillTikTok className="text-[33px] hover:text-green-500 transition duration-2000 ease-in-out" /></a>
            </div>
        </div>        
    )
}

export default SocialLinks;