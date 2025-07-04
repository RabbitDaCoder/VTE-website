import React from "react";
import { Link } from "react-router-dom";
import { LuArrowLeft, LuCookie, LuSettings, LuShield } from "react-icons/lu";
import HelmetSEO from "../components/HelmetSEO";

const CookiePolicy = () => {
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
              <LuCookie className="text-2xl text-green-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800">Cookie Policy</h1>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              Last Updated: {new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}
            </p>
            
            <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4 flex items-center gap-2">
              <LuShield /> What Are Cookies
            </h2>
            <p className="mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners. Cookies enhance user experience by remembering your preferences and enabling certain site functions.
            </p>
            
            <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">How We Use Cookies</h2>
            <p className="mb-4">
              The Faculty of Vocational and Technical Education website uses cookies for various purposes, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Essential cookies:</strong> These are necessary for the website to function properly and cannot be switched off in our systems.</li>
              <li><strong>Performance cookies:</strong> These help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
              <li><strong>Functional cookies:</strong> These enable the website to provide enhanced functionality and personalization.</li>
              <li><strong>Targeting cookies:</strong> These may be set through our site by our advertising partners to build a profile of your interests.</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4 flex items-center gap-2">
              <LuSettings /> Managing Cookies
            </h2>
            <p className="mb-4">
              Most web browsers allow you to control cookies through their settings. You can usually find these settings in the "Options" or "Preferences" menu of your browser. You can:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Delete all cookies</li>
              <li>Block all cookies</li>
              <li>Allow all cookies</li>
              <li>Block third-party cookies</li>
              <li>Clear all cookies when you close the browser</li>
              <li>Open a 'private browsing' / 'incognito' session</li>
              <li>Install add-ons and plugins to extend browser functionality</li>
            </ul>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-6">
              <p className="font-medium mb-2">How to manage cookies in different browsers:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-800">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-800">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-800">Safari</a></li>
                <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-800">Microsoft Edge</a></li>
              </ul>
            </div>
            
            <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">Types of Cookies We Use</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 mb-6">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b text-left bg-green-50">Cookie Type</th>
                    <th className="py-2 px-4 border-b text-left bg-green-50">Purpose</th>
                    <th className="py-2 px-4 border-b text-left bg-green-50">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Session Cookies</td>
                    <td className="py-2 px-4 border-b">Enable the website to keep track of your movement from page to page</td>
                    <td className="py-2 px-4 border-b">Temporary</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Persistent Cookies</td>
                    <td className="py-2 px-4 border-b">Remember your preferences for a longer period</td>
                    <td className="py-2 px-4 border-b">1 year</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Analytics Cookies</td>
                    <td className="py-2 px-4 border-b">Help us understand how visitors interact with our website</td>
                    <td className="py-2 px-4 border-b">2 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">Changes to Our Cookie Policy</h2>
            <p className="mb-4">
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date.
            </p>
            
            <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our Cookie Policy, please contact us at:
            </p>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="font-medium">Faculty of Vocational and Technical Education</p>
              <p>Email: vte@unn.edu.ng</p>
              <p>Phone: +234 904 567 8223</p>
              <p>Address: Nsukka, Enugu Nigeria</p>
            </div>
          </div>
        </div>
        
        <div className="text-center flex justify-center gap-4">
          <Link 
            to="/privacy-policy" 
            className="text-green-700 hover:text-green-800 transition underline"
          >
            Privacy Policy
          </Link>
          <Link 
            to="/terms-of-service" 
            className="text-green-700 hover:text-green-800 transition underline"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;