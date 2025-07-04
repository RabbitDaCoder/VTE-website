import React from "react";
import { Link } from "react-router-dom";
import { LuArrowLeft, LuFileText } from "react-icons/lu";
import { FaExclamationTriangle, FaCheckSquare } from "react-icons/fa";
import HelmetSEO from "../components/HelmetSEO";

const TermsOfService = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-green-100 min-h-screen">
      <HelmetSEO page="terms" />

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
              <LuFileText className="text-2xl text-green-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800">
              Terms of Service
            </h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              Last Updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>

            <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4 flex items-center gap-2">
              <FaCheckSquare /> Agreement to Terms
            </h2>
            <p className="mb-4">
              By accessing or using the Faculty of Vocational and Technical
              Education website, you agree to be bound by these Terms of Service
              and all applicable laws and regulations. If you do not agree with
              any of these terms, you are prohibited from using or accessing
              this site.
            </p>

            <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">
              Use License
            </h2>
            <p className="mb-4">
              Permission is granted to temporarily download one copy of the
              materials on the Faculty of Vocational and Technical Education's
              website for personal, non-commercial transitory viewing only. This
              is the grant of a license, not a transfer of title, and under this
              license you may not:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>
                Attempt to decompile or reverse engineer any software contained
                on the website
              </li>
              <li>
                Remove any copyright or other proprietary notations from the
                materials
              </li>
              <li>
                Transfer the materials to another person or "mirror" the
                materials on any other server
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">
              Disclaimer
            </h2>
            <p className="mb-4">
              The materials on the Faculty of Vocational and Technical
              Education's website are provided on an 'as is' basis. The Faculty
              of Vocational and Technical Education makes no warranties,
              expressed or implied, and hereby disclaims and negates all other
              warranties including, without limitation, implied warranties or
              conditions of merchantability, fitness for a particular purpose,
              or non-infringement of intellectual property or other violation of
              rights.
            </p>

            <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">
              Limitations
            </h2>
            <p className="mb-4">
              In no event shall the Faculty of Vocational and Technical
              Education or its suppliers be liable for any damages (including,
              without limitation, damages for loss of data or profit, or due to
              business interruption) arising out of the use or inability to use
              the materials on the website, even if the Faculty or an authorized
              representative has been notified orally or in writing of the
              possibility of such damage.
            </p>

            <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">
              Accuracy of Materials
            </h2>
            <p className="mb-4">
              The materials appearing on the Faculty's website could include
              technical, typographical, or photographic errors. The Faculty does
              not warrant that any of the materials on its website are accurate,
              complete, or current. The Faculty may make changes to the
              materials contained on its website at any time without notice.
            </p>

            <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">
              Links
            </h2>
            <p className="mb-4">
              The Faculty of Vocational and Technical Education has not reviewed
              all of the sites linked to its website and is not responsible for
              the contents of any such linked site. The inclusion of any link
              does not imply endorsement by the Faculty. Use of any such linked
              website is at the user's own risk.
            </p>

            <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">
              Modifications
            </h2>
            <p className="mb-4">
              The Faculty of Vocational and Technical Education may revise these
              terms of service for its website at any time without notice. By
              using this website, you are agreeing to be bound by the then
              current version of these terms of service.
            </p>

            <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4 flex items-center gap-2">
              <FaExclamationTriangle /> Governing Law
            </h2>
            <p className="mb-4">
              These terms and conditions are governed by and construed in
              accordance with the laws of Nigeria and you irrevocably submit to
              the exclusive jurisdiction of the courts in that location.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/privacy-policy"
            className="text-green-700 hover:text-green-800 transition underline"
          >
            View Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
