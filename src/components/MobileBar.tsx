"use client";

import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";
import { useState, useEffect } from "react";

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // UseEffect to handle body scroll based on menu state
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset the overflow when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-[#7E33E0] text-white md:hidden">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-4">
        <div className="text-xl font-bold">
          <ul>
            <li><Link href="/">Hekto</Link></li>
            <li><Link href="/"><CiShoppingCart /></Link></li>
          </ul>
          
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar Navigation */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-purple-700 text-white transform transition-transform duration-300 z-20 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Menu Links */}
        <ul className="mt-16 space-y-4">
          <li>
            <Link
              href="/"
              className="block px-6 py-2 hover:bg-gray-700 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block px-6 py-2 hover:bg-gray-700 transition"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className="block px-6 py-2 hover:bg-gray-700 transition"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="block px-6 py-2 hover:bg-gray-700 transition"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
        ></div>
      )}
    </header>
  );
};

export default MobileHeader;

