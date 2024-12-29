import React from "react";

const LegalPage: React.FC = () => {
  const effectiveDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Privacy Policy & Terms & Conditions
        </h1>

        {/* Privacy Policy Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Privacy Policy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Effective Date: <span className="font-medium">{effectiveDate}</span>
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            DarulSalat ("we," "our," "us") respects your privacy. This Privacy
            Policy explains how we collect, use, and share information when you
            use our mobile application ("DarulSalat App") and your rights
            regarding your data.
          </p>

          <h3 className="text-xl font-medium text-gray-700 mt-6">
            1. Information We Collect
          </h3>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>
              Personal Information: Information such as name, email, and
              user-generated content (e.g., uploaded pictures, Tasbih counts).
            </li>
            <li>
              Usage Data: Automatically collected information, such as device
              type, operating system, and interaction patterns (e.g., Darood
              Sharif counts).
            </li>
            <li>
              Location Data: Used to provide accurate Islamic time and date
              services.
            </li>
          </ul>

          <h3 className="text-xl font-medium text-gray-700 mt-6">
            2. How We Use Your Information
          </h3>
          <p className="text-gray-600 mt-2 leading-relaxed">
            We use your information to:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>
              Enhance app functionality, such as Islamic date calculations and
              Tasbih tracking.
            </li>
            <li>
              Provide access to Islamic books and enable features like picture
              uploads for records.
            </li>
            <li>Send app updates, notifications, and personalized content.</li>
          </ul>

          <h3 className="text-xl font-medium text-gray-700 mt-6">
            3. Contact Information
          </h3>
          <p className="text-gray-600 mt-2 leading-relaxed">
            If you have any questions or concerns about this Privacy Policy, you
            can contact us at:
          </p>
          <ul className="mt-2 text-gray-600">
            <li>
              Email:{" "}
              <a
                href="mailto:support@darulsalat.com"
                className="text-blue-600 underline"
              >
                support@darulsalat.com
              </a>
            </li>
            <li>Phone: +923154620054</li>
          </ul>
        </section>

        {/* Terms & Conditions Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Terms & Conditions
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Effective Date: <span className="font-medium">{effectiveDate}</span>
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            These Terms and Conditions ("Terms") govern your use of the
            DarulSalat mobile application. By downloading or using the app, you
            agree to be bound by these Terms.
          </p>

          <h3 className="text-xl font-medium text-gray-700 mt-6">
            1. Use of the App
          </h3>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>
              You may use DarulSalat to view Islamic dates and times, record
              Darood Sharif counts, access Islamic books, and upload pictures
              for personal Tasbih records.
            </li>
            <li>
              The app is for personal, non-commercial use. Any misuse is
              strictly prohibited.
            </li>
          </ul>

          <h3 className="text-xl font-medium text-gray-700 mt-6">
            2. User Responsibilities
          </h3>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>
              Ensure all uploaded content complies with Islamic guidelines.
            </li>
            <li>
              Do not misuse the app by uploading harmful materials or spamming.
            </li>
            <li>
              You are responsible for the security of your account and its
              activities.
            </li>
          </ul>

          <h3 className="text-xl font-medium text-gray-700 mt-6">
            3. Termination of Use
          </h3>
          <p className="text-gray-600 mt-2 leading-relaxed">
            We reserve the right to suspend or terminate access to the app if
            users violate these Terms or engage in prohibited activities.
          </p>
        </section>

        {/* Footer Section */}
        <footer className="border-t pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} DarulSalat. All Rights Reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default LegalPage;
