import Under from "@/components/img";
import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Banner Section */}
      <div className="bg-[#F6F5FF] py-8 text-start px-4 sm:px-8 lg:px-64">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101750]">
          FAQ
        </h1>
        <p className="text-sm mt-2 text-black">
          Home . Pages <span className="text-[#FB2E86]">. Faq</span>
        </p>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 py-8 sm:py-16 space-y-12">
        {/* Information Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="space-y-10">
            {/* Frequently Asked Questions */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-[#1D3178] text-xl sm:text-2xl font-semibold mb-4">
                General Information
              </h2>
              <div className="space-y-6">
                {/* Question 1 */}
                <div>
                  <h3 className="font-semibold text-[#1D3178]">
                    What materials are used in your furniture?
                  </h3>
                  <p className="text-[#A1ABCC]">
                    Our furniture is crafted from high-quality materials such as
                    solid wood, premium upholstery, and durable metals for
                    lasting comfort and style.
                  </p>
                </div>

                {/* Question 2 */}
                <div>
                  <h3 className="font-semibold text-[#1D3178]">
                    Do you offer customization options for sofas and chairs?
                  </h3>
                  <p className="text-[#A1ABCC]">
                    Yes, we offer a range of customization options including
                    fabric, color, and size to fit your specific needs and
                    preferences.
                  </p>
                </div>

                {/* Question 3 */}
                <div>
                  <h3 className="font-semibold text-[#1D3178]">
                    What is the estimated delivery time for orders?
                  </h3>
                  <p className="text-[#A1ABCC]">
                    Delivery typically takes 2-4 weeks, depending on your
                    location and the availability of the items.
                  </p>
                </div>

                {/* Question 4 */}
                <div>
                  <h3 className="font-semibold text-[#1D3178]">
                    How do I care for and maintain my furniture?
                  </h3>
                  <p className="text-[#A1ABCC]">
                    Regularly dust and clean your furniture with a soft cloth,
                    and follow specific care instructions provided with your
                    purchase for optimal maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Get In Touch Section */}
          <div className="relative bg-[#F8F8FD] shadow-md rounded-lg p-6">
            <h2 className="text-[#1D3178] text-xl sm:text-2xl font-semibold mb-6">
              Ask a Question
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="text"
                placeholder="Subject*"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <textarea
                placeholder="Type Your Message*"
                rows={5}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#FB2E86] text-white py-3 rounded-lg transition"
              >
                Send Mail
              </button>
            </form>
          </div>
        </div>
        <Under />
      </main>
    </div>
  );
};

export default ContactPage;
