"use client"; // Add this at the top to make it a Client Component

import Link from "next/link";
import React from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { IoMdLogIn } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { useRouter } from "next/navigation"; // Correct import for useRouter in App Router
import { FiPhoneCall } from "react-icons/fi";
import SearchBar from "./Search";

const Header: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPage = e.target.value;
    if (selectedPage) {
      router.push(selectedPage); // Navigate programmatically
    }
  };

  return (
    <div className="lg:max-w-[1520px]">
      {/* Top Banner */}
      <div className="bg-[#7E33E0] text-white text-xs sm:text-sm md:text-lg flex flex-col md:flex-row md:justify-between items-center gap-2 sm:gap-4 py-2 px-3 sm:px-5">
        {/* Left Section */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <a
            href="mailto:mk7275374@gmail.com"
            className="hover:text-gray-300 flex gap-1"
          >
            <CiMail className="mt-1" /> <span>mk7275374@gmail.com</span>
          </a>
          <a href="tel:+1234567890" className="hover:text-gray-300 flex gap-1">
            <FiPhoneCall className="mt-1" /> <span>+92 3313007384</span>
          </a>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">

          {/* Login Link */}
          <Link href="/sign-in" className="flex gap-1 font-serif">
            Login <IoMdLogIn className="mt-1" />
          </Link>

          {/* Icons */}
          <div className="flex gap-2 sm:gap-4">
            <button className="flex">
              Wishlist{" "}
              <CiHeart className="w-5 h-5 sm:w-6 sm:h-6 hover:text-red-600" />
            </button>
            <Link href="/cart" className="text-lg">
              <RiShoppingCart2Line className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md px-3 sm:px-5 py-3 flex flex-wrap justify-between items-center gap-2 sm:gap-4 md:gap-10">
        {/* Logo */}
        <div className="text-lg sm:text-2xl md:text-4xl font-bold text-gray-800">
          Hekto
        </div>

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="flex flex-wrap gap-5 sm:gap-4 justify-center">
            <li>
              <select
                className="text-pink-600 cursor-pointer"
                defaultValue=""
                onChange={handleNavigation}
              >
                <option value="/">Home</option>
                <option value="/contact">Contact</option>
                <option value="/about">About</option>
                <option value="/faq">Faq</option>
                <option value="/cart">Cart</option>
                <option value="/checkout">Checkout</option>
              </select>
            </li>
            <li>
              <Link href="/grid" className="hover:text-gray-700">
              Products
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gray-700">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-gray-700">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-700">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* <div className="relative flex items-center w-full sm:w-[350px]">
      <input
        type="text"
        placeholder="What are you looking for ?"
        className="w-full border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-gray-400"
      />
      <button className="absolute right-0 bg-pink-500 p-3">
        <Search className="text-white w-5 h-5" />
      </button>
    </div> */}
        <SearchBar />
      </header>
    </div>
  );
};

export default Header;
