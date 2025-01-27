import React from "react";
import ShopexOffer from "@/components/ShopexOffer";
import Image from "next/image";

const ContactPage: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Banner Section */}
            <div className="bg-[#F6F5FF] py-8 text-start px-4 sm:px-8 lg:px-64">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101750]">
                    About Us
                </h1>
                <p className="text-sm mt-2 text-black">
                    Home . Pages{" "}
                    <span className="text-[#FB2E86]">. Contact Us</span>
                </p>
            </div>

           {/* About Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <Image
            src="contact1.png"
            alt="About Us"
            fill
            className="rounded-lg shadow-lg w-[570px] h-[409px]"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Know About Our Ecommerce <br /> Business, History
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>
          <button className="px-6 py-3 bg-pink-500 text-white font-semibold rounded hover:bg-pink-600">
          <a href="/contact">Contact Us</a>
          </button>
        </div>
      </div>
      <ShopexOffer />
</div>
)}
export default ContactPage                                             