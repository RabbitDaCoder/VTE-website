import React from "react";
import { Link } from "react-router-dom";
import { LuArrowLeft, LuShieldCheck, LuLock, LuInfo } from "react-icons/lu";
import HelmetSEO from "../components/HelmetSEO";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-green-100 min-h-screen">
      <HelmetSEO page="privacy" />
      
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-8 flex items-center">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-green-700 hover:text-green-800 transition"
          >
            <LuArrowLeft /> Back to Home
          </Link>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-green-100 rounded-full">
              <LuShieldCheck className="text-2xl text-green-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800">Privacy Policy</h1>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              Last Updated: {new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}
            </p>
            
            <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4 flex items-center gap-2">
              <LuInfo /> Introduction
            </h2>
            <p className="mb-4">
              The Faculty of Vocational and Technical Education ("VTE", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
            
            <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4 flex items-center gap-2">
              <LuLock /> Information We Collect
            </h2>
            <p className="mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Subscribe to our newsletter</li>
              <li>Fill out a contact form</li>
              <li>Register for events or programs</li>
              <li>Apply for admission</li>
              <li>Request information about our courses</li>
            </ul>
            <p className="mb-4">
              The personal information we collect may include your name, email address, phone number, and any other information you choose to provide.
            </p>
            
            <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">How We Use Your Information</h2>
            <p className="mb-4">
              We may use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Providing and maintaining our website</li>
              <li>Responding to your inquiries and requests</li>
              <li>Sending newsletters and updates about faculty events</li>
              <li>Improving our website and user experience</li>
              <li>Analyzing usage patterns and trends</li>
              <li>Complying with legal obligations</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              We may use cookies and similar tracking technologies to collect information about your browsing activities. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
            
            <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">Third-Party Services</h2>
            <p className="mb-4">
              We may use third-party services that collect, monitor, and analyze user data to improve our website's functionality. These third parties have their own privacy policies addressing how they use such information.
            </p>
            
            <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">Data Security</h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            
            <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            
            <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="font-medium">Faculty of Vocational and Technical Education</p>
              <p>Email: vte@unn.edu.ng</p>
              <p>Phone: +234 904 567 8223</p>
              <p>Address: Nsukka, Enugu Nigeria</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link 
            to="/terms-of-service" 
            className="text-green-700 hover:text-green-800 transition underline"
          >
            View Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;