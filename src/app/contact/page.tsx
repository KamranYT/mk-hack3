import React from "react";
import Image from "next/image";

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Banner Section */}
      <div className="bg-[#F6F5FF] py-8 text-start px-4 sm:px-8 lg:px-64">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101750]">
          Contact Us
        </h1>
        <p className="text-sm mt-2 text-black">
          Home . Pages{" "}
          <span className="text-[#FB2E86]">. Contact Us</span>
        </p>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 py-8 sm:py-16 space-y-12">
        {/* Information Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="space-y-10">
            {/* Information About Us */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                Information About Us
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices mattis aliquam, malesuada diam est. Malesuada
                sem tristique amet erat vitae eget dolor lobortis.
              </p>
            </div>

            {/* Contact Way */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                Contact Way
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Contact Details */}
                <div className="space-y-4">
                  <p>
                    <span className="font-bold">Tel:</span> +1 234-567-890
                  </p>
                  <p>
                    <span className="font-bold">Email:</span> support@shopsite.com
                  </p>
                  <p>
                    <span className="font-bold">Address:</span> 20 Margaret St,
                    London, UK
                  </p>
                  <p>Free standard shipping on all orders.</p>
                </div>

                
              </div>
            </div>
          </div>

          {/* Get In Touch Section */}
          <div className="relative bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6">
              Get In Touch
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <textarea
                placeholder="Type Your Message"
                rows={5}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition"
              >
                Send Mail
              </button>
            </form>

            {/* Decorative Image */}
            <div className="absolute bottom-4 right-4 w-32 sm:w-40 lg:w-56 opacity-80">
              <Image
                src="/contact.png"
                width={32}
                height={32}
                alt="Contact Illustration"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;