import Link from "next/link";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { footerLinks } from "@/constants";

const Footer = () => (
  <footer className="flex flex-col bg-[#EEEFFB] ">
    <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
      <div className="flex flex-col justify-start items-start gap-6">
        <h1 className="text-4xl font-bold text-[#000000]">Hekto</h1>

        {/* Search Bar */}
        <div className="relative flex max-w-md md:max-w-lg lg:max-xl">
          <input
            type="text"
            placeholder="Enter Email Address"
            className="w-full h-[44px] border  px-4 py-2 outline-none focus:ring-2 focus:ring-[#EEEFFB]"
          />
          <button
            type="submit"
            className="xl:relative right-3 top-1/2 transform mt-5 pr-3 -translate-y-1/2 w-[135px] h-[44px] text-white bg-[#FB2E86]"
          >
            Sign Up
          </button>
        </div>
        <p className="text-base text-[#8A8FB9]">
          <span className="text-2xl">Contack Info</span> <br />
          17 Princess Road, London, Greater London NW18JR, UK
        </p>
      </div>

      <div className="footer__links">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-gray-500"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="flex justify-center xl:gap-[600px] items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
      <p className="text-base text-gray-700">
        &copy;Webecy - All right reserved
      </p>

      <div className="flex xl:gap-4 gap-6">
        <a
          href="#"
          aria-label="LinkedIn"
          className=" hover:text-blue-800 transition"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="#"
          aria-label="Instagram"
          className=" hover:text-pink-600 transition"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="#"
          aria-label="Twitter"
          className=" hover:text-blue-600 transition"
        >
          <CiTwitter size={24} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
