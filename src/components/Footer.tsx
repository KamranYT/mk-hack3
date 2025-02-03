import Link from "next/link";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { footerLinks } from "@/constants";

const Footer = () => (
  <footer className="flex flex-col bg-[#EEEFFB] px-6 sm:px-16 py-10">
    {/* Top Section */}
    <div className="flex flex-col md:flex-row justify-between gap-8">
      {/* Brand & Contact Section */}
      <div className="flex flex-col justify-start items-start gap-6 w-full md:w-1/3">
        <h1 className="text-4xl font-bold text-black">Hekto</h1>

        <div className="flex border border-gray-300 rounded-lg overflow-hidden">
        <input
          type="text"
          placeholder="Enter your email"
          className="w-full p-2 outline-none"
        />
        <button className="bg-[#FB2E86] text-white w-28 px-4 flex items-center justify-center">
          {/* <Search className="text-white w-5 h-5" /> */}
          Sign-up
        </button>
      </div>

        <p className="text-base text-[#8A8FB9]">
          <span className="text-2xl font-semibold">Contact Info</span> <br />
          17 Princess Road, London, Greater London NW18JR, UK
        </p>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full md:w-2/3">
        {footerLinks.map((item) => (
          <div key={item.title} className="flex flex-col gap-3">
            <h3 className="font-bold text-[#151875]">{item.title}</h3>
            {item.links.map((link) => (
              <Link key={link.title} href={link.url} className="text-gray-600 hover:text-[#FB2E86] transition">
                {link.title}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>

    {/* Bottom Section */}
    <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-300 mt-10 pt-6">
      <p className="text-sm text-gray-700">&copy; Webecy - All rights reserved</p>

      <div className="flex gap-4 mt-4 sm:mt-0">
        <a href="#" aria-label="Facebook" className="hover:text-blue-800 transition">
          <FaFacebook size={24} />
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-pink-600 transition">
          <FaInstagram size={24} />
        </a>
        <a href="#" aria-label="Twitter" className="hover:text-blue-600 transition">
          <CiTwitter size={24} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
